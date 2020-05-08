import {http, httpFile} from './http_service';
import jwt from 'jsonwebtoken';
import store from '../store';

export function register(data){
    return http().post('/auth/register',data);
}
export function login(data) {
    return http().post('/auth/login', data)
    .then(response => {
        if(response.status === 200){
            setToken(response.data);
        }
        return response.data;
    });
}

function setToken(data) {
    const token = jwt.sign({ data : data }, 'laravelvuespajksadlkkjfhsuehbajw2020');
    localStorage.setItem('laravel-vue-spa', token);
    store.dispatch('authenticate', data.data);

}

export function isLoggedIn() {
    const token = localStorage.getItem('laravel-vue-spa');
    return token != null;
    
}

export function logout(){
    http().get('/auth/logout');
    localStorage.removeItem('laravel-vue-spa');
}

export function getAccesToken(){
    const token = localStorage.getItem('laravel-vue-spa');
    if(!token){
        return null;
    }
    const tokenData = jwt.decode(token);
    return tokenData.data.access_token;
}



