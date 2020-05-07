import {http, httpFile} from './http_service';

export function register(data){
    return http().post('/auth/register',data);
}
export function login(data) {
    return http().post('/auth/login', data)
    .then(response => {
        if(response.status=== 200){
            setToken(response.data);
        }
        return response.data;
    });
}

function setToken(data) {
    localStorage.setItem('laravel-vue-spa', JSON.stringify(data));
}



