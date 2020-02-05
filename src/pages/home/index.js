import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import DownloadApp from './component/DownloadApp';
import ViewAll from './component/ViewAll';

class Home extends Component{
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580909702185&di=d7a2114b5231e5810b48c4efe36f044d&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20181002%2F21%2F1538488618-LcrsoPFKDQ.jpg" alt="banner"/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <DownloadApp />
                    <Writer />
                    <ViewAll />
                </HomeRight>
            </HomeWrapper>
        )
    }

    /**
     * 钩子
     */
    componentDidMount() {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            console.log("result", result);
            
            const action = {
                type: 'change_home_data',
                topicList: result.topicList,
                articleList: result.articleList,
                recommendList: result.recommendList
            }
            this.props.changeHomeData(action);
        }).catch(() => {
            console.log("/api/home.json 网络请求错误");
        });
    }
}

const mapDispatchToProps = (dispatch) => ({
    changeHomeData(action) {
        dispatch(action);
    }
});

export default connect(null, mapDispatchToProps)(Home);
