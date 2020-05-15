import store from '../store';
import axios from 'axios';
import * as auth from './auth_service';

export function http() {
    return axios.create({
        baseURL:store.state.apiURL,
        headers:{
            Authorization: 'Bearer' + auth.getAccesToken(),
        }
    });
}

export function httpFile() {
    return axios.create({
        baseURL: store.state.apiURL,
        headers: {
            Authorization: 'Bearer' + auth.getAccesToken(),
            'Content-Type' : 'multipart/from-data'
        }
    });

}