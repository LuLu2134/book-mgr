import axios from 'axios';

export const add = (form) => {
    return axios.post(
        'http://localhost:3000/book/add', 
        form,
    );
}; 

// export const login = (account, password) => {
//     return axios.post('http://localhost:3000/auth/login', {
//         account,
//         password,  
//  });   
// }; 