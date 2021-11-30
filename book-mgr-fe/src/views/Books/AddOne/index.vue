<template>
    <div>
        <a-modal 
            title="添加商品"
            :visible="true" 
            @ok="submit"
        >
            <a-form :label-col="{ span: 6 }" >
                <a-form-item label="商品名">
                    <a-input v-model:value="addForm.name"/>
                </a-form-item>
                <a-form-item label="价格">
                    <a-input-number v-model:value="addForm.price" :min="0" :max="99999999" />
                </a-form-item>
                <a-form-item label="供应商">
                    <a-input v-model:value="addForm.author"/>
                </a-form-item>
                <a-form-item label="生产日期">
                    <a-date-picker v-model:value="addForm.publishDate"/>
                </a-form-item>
                <a-form-item label="分类">
                    <a-input v-model:value="addForm.classify"/>
                </a-form-item>
            </a-form>
        </a-modal> 
    </div>
</template>

<script src="./index.js"></script>
