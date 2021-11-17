
const Koa = require('koa');

const app = new Koa();

//通过 app.use 注册中间件
//中间件本质上 他就是一个函数
//context 上下文 - 当前请求的相关信息都在里面
app.use(async (context) => {
    //对象的解构
    const { request : req } = context;
    const { url } = req;

    if (url === '/') {
        context.response.body = '<h1>主页</h1>';

        return;
    }

    //路由
    if (url === '/user/list') {
        context.response.body = '<h1>用户列表</h1>';

        return;
    }

    context.body = '404';
    context.status = 404;
});

app.use((context) => {
    context.body = '找不到资源';
});

//开启一个 http 服务
//接受 http 请求 并作处理，处理完后响应
app.listen(3000, () => {
    console.log('启动成功');
});

console.log('112233');
