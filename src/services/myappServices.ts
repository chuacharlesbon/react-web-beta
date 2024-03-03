import axios from "axios";
import { Core } from "../config";
import { getCookie } from "../hooks";

// API and Datasource - Axios CRUD Templates

interface LOGIN {
    email: string;
    password: string;
}

interface PRODUCT {
    id?: number;
    name: string;
    description: string;
    image: any;
}

interface USER {
    id?: number;
    name: string;
    email: string;
    password: string;
}

export const getMyService = async () =>
    axios.get(`${Core.DEVAPI}/api/ping`).then((response: any) => response).catch(err => err);

export const loginService = async (body: LOGIN) =>
    axios.post(`${Core.DEVAPI}/api/login`, body).then((response: any) => response);

export const postService1 = async (body: PRODUCT) => {
    const token = getCookie('token');
    const form = new FormData();
    form.append('name', body.name);
    form.append('description', body.description);
    form.append('image', body.image[0]);
    return axios({
        method: 'POST',
        url: `${Core.DEVAPI}/add-product/${body.id}`,
        data: form,
        headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` },
    }).then((response) => response);
};

export const postService2 = async (body: USER) => {
    const token = getCookie('token');
    return axios({
        method: 'POST',
        url: `${Core.DEVAPI}/add-user`,
        data: JSON.stringify({
            id: body.id,
            name: body.name,
            email: body.email,
            password: body.password,
        }),
        headers: { Authorization: `Bearer ${token}` },
    }).then((response) => response).catch(err => err);
};

export const updateService = async (body: USER) => {
    const token = getCookie('token');
    return axios({
        method: 'PUT',
        url: `${Core.DEVAPI}/update-user`,
        data: JSON.stringify({
            id: body.id,
            name: body.name,
            email: body.email,
            password: body.password,
        }),
        headers: { Authorization: `Bearer ${token}` },
    }).then((response) => response).catch(err => err)
};

export const deleteService = async (id: number) => {
    const token = getCookie('token');
    return axios({
        method: 'DELETE',
        url: `${Core.DEVAPI}/delete-user/${id}`,
        headers: { Authorization: `Bearer ${token}` },
    }).then((response) => response).catch(err => err);
};