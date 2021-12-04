<template>
    <div>
        <a-card>
            <h2>商品列表</h2>

            <a-divider />

            <space-between>
                <div class="search">
                    <a-input-search placeholder="根据商品名搜索" enter-button />
                </div>

                <a-button @click="show = true">添加一条</a-button>
            </space-between>
  
            <a-divider />

            <a-table 
                :columns="columns" 
                :data-source="list"
                :pagination="false"
            >
                <template #publishDate="data">
                    {{ formatTimestamp (data.record.publishDate) }}
                </template>
            </a-table>
            <space-between style="margin-top: 24px;">
                <div />
                <a-pagination 
                 v-model:current="curPage" 
                 :total="total"
                 :page-size="10"
                 @change="setPage"
                />   
            </space-between>
        </a-card>

        <add-one 
            v-model:show="show"
        />
    </div>
</template> 

<script src="./index.js"></script>

<style lang="scss" scoped>
    @import './index.scss'
</style>