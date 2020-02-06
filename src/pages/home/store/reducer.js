import { fromJS } from 'immutable'; 
import { CHANGE_HOME_DATA, ADD_ARTICLE_DATA, TOGGLE_SHOW_SCROLL } from './constants';

const defaultStore = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
});

/**
 * 显示首页
 * @param {数据} state 
 * @param {行为} action 
 */
const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
    });
}

/**
 * 滑动增加显示文章
 * @param {*} state 
 * @param {*} action 
 */
const addArticleData = (state, action) => {
    return state.merge({
        'articleList': state.get('articleList').concat(action.articleList),
        'articlePage': action.nextPage
    });
}


/**
 * 专门处理接收到的action
 */
export default (state = defaultStore, action) => {
    switch(action.type) {
        case CHANGE_HOME_DATA:  
            return changeHomeData(state, action);
        case ADD_ARTICLE_DATA:  
            return addArticleData(state, action);
        case TOGGLE_SHOW_SCROLL:  
            return state.set('showScroll', action.show);
        default:
            return state;
    }  
}