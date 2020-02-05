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
    }],

    articleList: [{
        id: 1,
        imgUrl: '//upload-images.jianshu.io/upload_images/16003352-7d0f77465120a55b.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
        title: '情话攒了那许久，你确定不进来看看么',
        desc: '从各个地方看到的，于是攒下来， 闲来时看看，心情也瞬间美好起来。 1、 如果你非要拒绝我，请不要那么绝对。 因为你的一句“我没有那么喜欢你”， ...'
    },{
        id: 2,
        imgUrl: '//upload-images.jianshu.io/upload_images/16003352-7d0f77465120a55b.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
        title: '情话攒了那许久，你确定不进来看看么',
        desc: '从各个地方看到的，于是攒下来， 闲来时看看，心情也瞬间美好起来。 1、 如果你非要拒绝我，请不要那么绝对。 因为你的一句“我没有那么喜欢你”， ...'
    },{
        id: 3,
        imgUrl: '//upload-images.jianshu.io/upload_images/16003352-7d0f77465120a55b.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
        title: '情话攒了那许久，你确定不进来看看么',
        desc: '从各个地方看到的，于是攒下来， 闲来时看看，心情也瞬间美好起来。 1、 如果你非要拒绝我，请不要那么绝对。 因为你的一句“我没有那么喜欢你”， ...'
    },{
        id: 4,
        imgUrl: '//upload-images.jianshu.io/upload_images/16003352-7d0f77465120a55b.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
        title: '情话攒了那许久，你确定不进来看看么',
        desc: '从各个地方看到的，于是攒下来， 闲来时看看，心情也瞬间美好起来。 1、 如果你非要拒绝我，请不要那么绝对。 因为你的一句“我没有那么喜欢你”， ...'
    }]
});

export default (state = defaultStore, action) => {
    switch(action.type) {
        default:
        return state;
    }  
}