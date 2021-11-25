import { defineComponent, reactive, ref } from 'vue';
import { UserOutlined, UnlockOutlined, MailOutlined } from '@ant-design/icons-vue'
import { auth } from '@/service'

export default defineComponent({
    components: {
        UserOutlined,
        UnlockOutlined, 
        MailOutlined,
    },
    setup() {
        // 注册用的表单数据
        const regForm = reactive({
            account: '',
            password: '',
        });

        //注册逻辑
        const register = () => {
             auth.register(regForm.account, regForm.password);
        };
        
        //登入用的表单数据
        const loginForm = reactive ({
            account: '',
            password: '',
        });

        // 登入逻辑
        const login = () => {
            auth.login(loginForm.account, loginForm.password);
        };

        return {
            //注册相关的数据
            regForm,
            register,

            //登入相关的数据
            login,
            loginForm,
        };
    },
});