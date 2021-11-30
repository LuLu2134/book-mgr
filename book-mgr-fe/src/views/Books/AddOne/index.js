import { defineComponent, reactive } from  'vue';
import { book } from '@/service';
import { message } from 'ant-design-vue';
import { result, clone } from '@/helpers/utils';

const defaultFormData = {
    name: '',
    price: 0,
    author: '',
    publishDate: 0,
    classify: '',
};

export default  defineComponent ({
    setup() {
        const addForm = reactive(clone(defaultFormData));

        const submit = async () => {
            const form = clone(addForm);
            form.publishDate = addForm.publishDate.valueOf();
            const res = await book.add(form);

            result(res)
                .success((d, { data }) => {
                    Object.assign(addForm, defaultFormData);
                    message.success(data.msg);
                });
        };

        return {
            addForm,
            submit,
        };
    },
});