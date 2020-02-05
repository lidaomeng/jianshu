import axios from 'axios';
import { CHANGE_HOME_DATA } from './constants'

const changeHomeData = (result) => ({
    type: CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

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