const mongoose = require('mongoose');
const { getMeta, preSave } =require('../helpers');

const BookSchema = new mongoose.Schema({
    //商品名
    name: String,
    //价格
    price: Number,
    //供应商
    author: String,
    //生产日期
    publishDate: String,
    //分类
    classify: String,
    //库存
    count: Number,

    meta: getMeta(), 
});

BookSchema.pre('save', preSave);

mongoose.model('Book', BookSchema);