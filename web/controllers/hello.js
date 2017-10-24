var hello  = async (ctx, next) => {
    ctx.render('test.html', {name: ctx.params.name});
};

module.exports = [
    {
        method:'get',
        path:'/hello/:name',
        fn:hello
    }
];