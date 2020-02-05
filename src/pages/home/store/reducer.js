import { fromJS } from 'immutable'; 

const defaultStore = fromJS({
    topicList: [{
        id: 1,
        title: '哪吒闹海',
        imgUrl: 'https://bkimg.cdn.bcebos.com/pic/0e2442a7d933c895f7186c2dd21373f082020005?x-bce-process=image/crop,x_0,y_0,w_351,h_494/resize,m_lfit,h_780,limit_1/quality,q_70'
    },{
        id: 2,
        title: '大闹天宫',
        imgUrl: 'https://bkimg.cdn.bcebos.com/pic/7a899e510fb30f24a38c2647cf95d143ad4b0364?x-bce-process=image/resize,m_lfit,w_500,h_500,limit_1'
    },{
        id: 3,
        title: '哪吒闹海',
        imgUrl: 'https://bkimg.cdn.bcebos.com/pic/0e2442a7d933c895f7186c2dd21373f082020005?x-bce-process=image/crop,x_0,y_0,w_351,h_494/resize,m_lfit,h_780,limit_1/quality,q_70'
    },{
        id: 4,
        title: '大闹天宫',
        imgUrl: 'https://bkimg.cdn.bcebos.com/pic/7a899e510fb30f24a38c2647cf95d143ad4b0364?x-bce-process=image/resize,m_lfit,w_500,h_500,limit_1'
    },{
        id: 5,
        title: '哪吒闹海',
        imgUrl: 'https://bkimg.cdn.bcebos.com/pic/0e2442a7d933c895f7186c2dd21373f082020005?x-bce-process=image/crop,x_0,y_0,w_351,h_494/resize,m_lfit,h_780,limit_1/quality,q_70'
    },{
        id: 6,
        title: '大闹天宫',
        imgUrl: 'https://bkimg.cdn.bcebos.com/pic/7a899e510fb30f24a38c2647cf95d143ad4b0364?x-bce-process=image/resize,m_lfit,w_500,h_500,limit_1'
    },{
        id: 7,
        title: '哪吒闹海',
        imgUrl: 'https://bkimg.cdn.bcebos.com/pic/0e2442a7d933c895f7186c2dd21373f082020005?x-bce-process=image/crop,x_0,y_0,w_351,h_494/resize,m_lfit,h_780,limit_1/quality,q_70'
    },{
        id: 8,
        title: '大闹天宫',
        imgUrl: 'https://bkimg.cdn.bcebos.com/pic/7a899e510fb30f24a38c2647cf95d143ad4b0364?x-bce-process=image/resize,m_lfit,w_500,h_500,limit_1'
    }]
});

export default (state = defaultStore, action) => {
    switch(action.type) {
        default:
        return state;
    }  
}