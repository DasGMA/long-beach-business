import axios from 'axios';
import store from '../src/Redux/store';

const lbo = axios.create({
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    baseURL: `http://localhost:8888`
});

// Use token and check if expired or not. If expired, then refresh token.
lbo.interceptors.request.use(async req => {
    const token = localStorage.getItem('Token');
    if (!token) {
        return req;
    }

    const tokenExpired = Math.floor(new Date() / 1000) - tokenTime > 3300;
    if (!tokenExpired) {
        req.headers.authorization = token;
        return req;
    }

    const newToken = await refreshToken(token);
    req.headers.authentication = newToken;
    return req;
})

// Chech for axios auth errors.
lbo.interceptors.response.use(async req => {
    
})

// Async function to refresh token.
async function refreshToken(token) {

}