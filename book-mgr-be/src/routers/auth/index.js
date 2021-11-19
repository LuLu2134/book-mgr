const Router = require('@koa/router');
const mongoose = require('mongoose');

const User = mongoose.model('User');

const router = new Router({
    prefix: '/auth',
  });

  router.post('/register', async (ctx) => {
    console.log(ctx.request.body);

    // const User = new User({
    //   account: '',
    //   password: '',
    // });

    // const res = await User.save();

    ctx.body = { 
      code: 1,
      msg: '注册成功',
      //data: res, 
     };
  }); 
 
  router.post('/login', async (ctx) => {
    
  });

   module.exports = router;