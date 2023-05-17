import httpInstance from "../utils/http";

export function getHello(){
    return httpInstance({
        url: '/api/test/hello'
    })
}


export const loginApi = data => {
    return httpInstance({
        url: 'api/user/login',
        method: 'post',
        data
    })
};