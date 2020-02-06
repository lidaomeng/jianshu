import axios from 'axios';
import { fromJS } from 'immutable'; 
import { CHANGE_HOME_DATA, ADD_ARTICLE_DATA, TOGGLE_SHOW_SCROLL } from './constants';

const changeHomeData = (result) => ({
    type: CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

const addArticleData = (list, nextPage) => ({
    type: ADD_ARTICLE_DATA,
    articleList: fromJS(list),
    nextPage
})

/**
 * 获取首页信息
 */
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;            
            dispatch(changeHomeData(result));
        }).catch(() => {
            console.log("/api/home.json 网络请求错误");
        })
    }
}

/**
 * 获取更多文章
 * @param {*} page 
 */
export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const list = res.data.data;
            dispatch(addArticleData(list, page + 1));
        }).catch(() => {
            console.log("/api/homeList.json 网络请求错误");
        })
    }
}

/**
 * 是否显示【Back-Top】
 */
export const toggleScrollShow = (show) => ({
    type: TOGGLE_SHOW_SCROLL,
    show
})