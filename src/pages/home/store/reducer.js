import { fromJS } from 'immutable'; 
import { CHANGE_HOME_DATA, ADD_ARTICLE_DATA } from './constants';

const defaultStore = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1
});

export default (state = defaultStore, action) => {
    switch(action.type) {
        case CHANGE_HOME_DATA:  
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            });
        case ADD_ARTICLE_DATA:  
            return state.merge({
                'articleList': state.get('articleList').concat(action.articleList),
                'articlePage': action.nextPage
            });
        default:
            return state;
    }  
}