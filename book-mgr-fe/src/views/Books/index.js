import { defineComponent, ref, onMounted} from 'vue';
import { book } from '@/service';
import { result, formatTimestamp } from '@/helpers/utils';
import AddOne from './AddOne/index.vue'; 

export default defineComponent ({
    components: {
        AddOne,
    },
    setup() {
        const columns = [
            {
                title: '商品名',
                dataIndex: 'name',
            },
            {
                title: '生产商',
                dataIndex: 'author',
            },
            {
                title: '价格',
                dataIndex: 'price',
            },
            {
                title: '生产日期',
                dataIndex: 'publishDate',
                slots: {
                    customRender: 'publishDate',
                },
            },
            {
                title: '分类',
                dataIndex: 'classify',
            },
            
        ];
        const show = ref(false);

        const list = ref([]);
        const total = ref(0);
        const curPage = ref(1);

        const getList = async () => {
            const res =await book.list({
                page: curPage.value,
                size: 10,
            });

            result(res)
                .success(({ data }) => {  
                    const { list: l, total: t } = data;
                    list.value = l;
                    total.value = t;
                });
        }

        onMounted(async () => {
            getList();
        });

        const setPage = (page) => {
            curPage.value = page;

            getList();
        };

        return {
            columns,
            show,
            list,
            formatTimestamp,
            curPage,
            total,
            setPage,
        };
    },
});