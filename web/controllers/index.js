module.exports = [
    {
        method:'get',
        path:'/',
        fn: async (ctx, next) => {
            ctx.response.body = `<form action='/signin' method='post'>
                                    <p>name:<input id='name' name='name' type='text'/></p>
                                    <p>password:<input id='pwd' name='pwd' type='password'/></p>
                                    <p><input id='submit' type='submit' value='提交'/></p>
                                </form>`
        }
    },
    {
        method:'post',
        path:'/signin',
        fn:async (ctx, next) => {
            var name = ctx.request.body.name || '';
            var pwd = ctx.request.body.pwd || '';
        
            if (name === 'koa' && pwd === '111111') {
                ctx.response.body = `welcome ${name}`;
            } else {
                ctx.response.body = 'sign in failed';
            }
        }
    }
];