import React, {Component} from 'react';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';

class Home extends Component{
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="https://bkimg.cdn.bcebos.com/pic/48540923dd54564eda408285bbde9c82d1584f60?x-bce-process=image/crop,x_0,y_6,w_550,h_363/watermark,g_7,image_d2F0ZXIvYmFpa2U4MA==,xp_5,yp_5" alt="banner"/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;
