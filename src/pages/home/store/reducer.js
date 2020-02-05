import { fromJS } from 'immutable'; 

const defaultStore = fromJS({
    topicList: [],
    articleList: [],
    recommendList: []
});

export default (state = defaultStore, action) => {
    switch(action.type) {
        case 'change_home_data':
            console.log(action);
            
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            })
        default:
        return state;
    }  
}