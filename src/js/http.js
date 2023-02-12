const http = {
    get(path, params) {
        return this.request('get', path, params)
    },
    post(path, params) {
        return this.request('post', path, params)
    },
    put(path, params) {
        return this.request('put', path, params)
    },
    delete(path, params) {
        return this.request('delete', path, params)
    },
    request(method, path, params) {
        return axios({
            method: method,
            url: path,
            data: params
        });
    }
}