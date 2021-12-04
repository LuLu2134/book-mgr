const Router = require('@koa/router');
const mongoose = require('mongoose');
const { getBody } = require('../../helpers/utils');

const Book = mongoose.model('Book');

const router = new Router ({
    prefix: '/book',
});

router.post('/add', async (ctx) => {
    const {
        name,
        price,
        author,
        publishDate,
        classify,
    } = getBody(ctx);

    const book = new Book({
        name,
        price,
        author,
        publishDate,
        classify,
    });

    const res = await book.save();
    
    ctx.body = {
        data: res,
        code: 1,
        msg: '添加成功',
    };
});

router.get('/list', async (ctx) => {
    // https://aa.cc.com/user?page=1
    const {
        page = 1,
    } = ctx.query;

    let = {
        size = 10,
    } = ctx.query;

    size = Number(size);




    
    const list = await Book
        .find()
        .skip((page - 1) * size)
        .limit(size)
        .exec();

    const total = await Book.countDocuments();    

    ctx.body = {
        data: {
            total,
            list,
            page,
            size,
        },
        code: 1,
        msg: '获取列表成功',
    };
});

module.exports = router;