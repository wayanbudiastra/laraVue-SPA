import {http, httpFile} from './http_service';

export function createCatagory(data){
    return httpFile().post('/catagory',data);
}

export function loadCatagory() {
    return http().get('/catagory');
}

export function deleteCatagory(id) {
    return http().delete(`/catagory/${id}`);
    
}

export function updateCatagory(id, data){
    return httpFile().post(`catagory/${id}`, data);
}