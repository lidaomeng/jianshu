import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import DownloadApp from './component/DownloadApp';
import ViewAll from './component/ViewAll';
import { actionCreators } from './store'

class Home extends PureComponent{
    render() {
        const { showScroll } = this.props;
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
                {
                    showScroll ? (<BackTop onClick={this.handleScrollTop}>
                                    <i className={'iconfont'}>&#xe6a4;</i>
                                </BackTop>) : null
                }
                
            </HomeWrapper>
        )
    }

    /**
     * 挂载组件
     */
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    /**
     * 卸载组件
     */
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }

    /**
     * 回到顶部
     */
    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    /**
     * 绑定事件
     */
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }
}

const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 200) {
            dispatch(actionCreators.toggleScrollShow(true));
        } else {
            dispatch(actionCreators.toggleScrollShow(false));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
