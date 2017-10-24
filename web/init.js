var fs = require('mz/fs');
var mime = require('mime');
var nunjucks = require('nunjucks');
var path = require('path');

var initController = function (router) {
    let dir = path.join(__dirname, 'controllers');
    let files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
    for (let f of files) {
        let m = require(path.join(dir, f));
        for (let p of m) {            
            if(p.method === 'get') {
                router.get(p.path, p.fn);
            } else if (p.method === 'post') {
                router.post(p.path, p.fn);
            } else {
                console.log('invalid method');
            }
        }
    }
};

var initNunjucks = function (path, opt) {
    opt = opt == undefined ? {} : opt;
    let loader = new nunjucks.FileSystemLoader(path, {
        watch: opt.watch || false,
        noCache: opt.noCache || false
    });
    let env = new nunjucks.Environment(loader, {
        autoescape: opt.autoescape || true,
        throwOnUndefined: opt.throwOnUndefined || false,
        trimBlocks: opt.trimBlocks || false,
        lstripBlocks: opt.lstripBlocks || false
    });

    return async (ctx, next) => {
        ctx.response.type = 'text/html';
        ctx.render = function (view, model) {
            ctx.response.body = env.render(view, model);
        };
        await next();
    };
};

var initStaticsHandler = function(staticPath, dir) {
    return async (ctx, next) => {
        let reqPath = ctx.request.path;
        if(reqPath.startsWith(staticPath)) {
            let filePath = path.join(dir, reqPath);
            if(await fs.exists(filePath)) {
                ctx.response.type = mime.getType(reqPath);
                ctx.response.body = await fs.readFile(filePath);
            } else {
                ctx.response.status = 404;
            }
        } else {
            await next();
        }
    };
};

module.exports.initController = initController;
module.exports.initNunjucks = initNunjucks;
module.exports.initStaticsHandler = initStaticsHandler;

