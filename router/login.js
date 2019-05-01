const router = require('koa-router')();

router
    .get('/login', async(ctx) => {
        await ctx.render('login');
    })

module.exports = router;