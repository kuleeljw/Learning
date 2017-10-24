var Koa = require('koa');
var koaRouter = require('koa-router');
var koaBodyparser = require('koa-bodyparser');
var init = require('./init');

var app = new Koa();
var router = koaRouter();

init.initController(router);

app.use(koaBodyparser());
app.use(init.initNunjucks('views'));
app.use(init.initStaticsHandler('/static', __dirname));
app.use(router.routes());

app.listen(8080);