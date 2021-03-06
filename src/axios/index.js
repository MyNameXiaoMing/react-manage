/**
 * Created by hao.cheng on 2017/4/16.
 */
import axios from 'axios';
import { get } from './tools';
import * as config from './config';
import http from '../http/baseurl.js'


export const getPros = () => axios.post(http.url+'/goods/select', {
    title: "title",
    brand: "brand",
    currentPrice: "currentPrice",
    hot:"hot",
    offset: 0,
    limit: 30
   
}).then(function (response) {
    return response.data;

}).catch(function (error) {
    console.log(error);

});

export const getUserlist = () => axios.post(http.url+'/userlist', {
    username: "username",
    telephone: "telephone",
    email: "email",
    register_time:"register_time",
    offset: 0,
    limit: 30
   
}).then(function (response) {
    return response.data;

}).catch(function (error) {
    console.log(error);

});


export const npmDependencies = () => axios.get('./npm.json').then(res => res.data).catch(err => console.log(err));

export const weibo = () => axios.get('./weibo.json').then(res => res.data).catch(err => console.log(err));

const GIT_OAUTH = 'https://github.com/login/oauth';
export const gitOauthLogin = () => axios.get(`${GIT_OAUTH}/authorize?client_id=792cdcd244e98dcd2dee&redirect_uri=http://localhost:3006/&scope=user&state=reactAdmin`);
export const gitOauthToken = code => axios.post('https://cors-anywhere.herokuapp.com/' + GIT_OAUTH + '/access_token', {...{client_id: '792cdcd244e98dcd2dee',
    client_secret: '81c4ff9df390d482b7c8b214a55cf24bf1f53059', redirect_uri: 'http://localhost:3006/', state: 'reactAdmin'}, code: code}, {headers: {Accept: 'application/json'}})
    .then(res => res.data).catch(err => console.log(err));
export const gitOauthInfo = access_token => axios({
    method: 'get',
    url: 'https://api.github.com/user?access_token=' + access_token,
}).then(res => res.data).catch(err => console.log(err));

// easy-mock数据交互
// 管理员权限获取
export const admin = () => get({url: config.MOCK_AUTH_ADMIN});

// 访问权限获取
export const guest = () => get({url: config.MOCK_AUTH_VISITOR});