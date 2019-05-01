const Koa = require('koa');
const render = require('koa-ejs');
const koaBody = require('koa-body');
const login = require('./router/login');
const koaMount = require('koa-mount');
const koaStatic = require('koa-static');
const app = new Koa();

render(app, {
    root: `${__dirname}/view`,
    layout: false,
    viewExt: 'ejs',
    cache: false,
    debug: false,
});

app.use(koaBody({
    multipart: true,
}));
app.use(login.routes());
app.use(koaMount('/public', koaStatic(`${__dirname}/public`)));
app.listen(3000);
