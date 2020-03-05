import { authHeader } from '../helpers';
import { config } from '../config';
import axios from 'axios';

export const fileService = {
    upload,
    downloadDataFile,
    getAll,
    getById,
    delete: _delete
};

function upload(file) {

    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' }
    };
    const formData = new FormData();
    formData.append('file', file);
    // return fetch(`${config.apiUrl}/upload`, requestOptions)
    return axios.post(`${config.apiUrl}/upload`, formData, requestOptions)
        .then(handleAxiosResponse)
        .then(data => {
            return data.file;
        }).catch(e => {
            e.message = e.response.data.message?e.response.data.message:e.message;
            const error = e;
            return Promise.reject(error);
        });
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/files`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/files/${id}`, requestOptions).then(handleResponse);
}
function downloadDataFile(file) {
    const requestOptions = {
        method: 'GET',
        responseType: 'blob',
        headers: { ...authHeader(), 'Content-Type': 'application/json' }
    };
    return axios.get(`${config.apiUrl}/files/${file.id}/download`,requestOptions).then((response) => {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement('a');

        fileLink.href = fileURL;
        
        fileLink.setAttribute('target', '_blank');
        fileLink.setAttribute('download', file.name);

        document.body.appendChild(fileLink);

        fileLink.click();
    })
}
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/files/${id}`, requestOptions).then(handleResponse);
}

function handleAxiosResponse(response) {
    let data = response.data;
    if (response.statusText != "OK") {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }
    data.message = "Uploaded";
    return data;
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            // if (response.status === 401) {
            //     // auto logout if 401 response returned from api
            //     logout();
            //     location.reload(true);
            // }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

