import React, { Component } from "react";
import { connect } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { actionCreators } from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem
} from './style';


class Header extends Component{
    getListArea() {
        const { focused, list, mouseIn, page, totalPage } = this.props;

        const newList = list.toJS();
        const pageList = [];

        if (newList.length > 0) {
            /**
             * 此处有bug
             */
            for (let i = (page-1)*5; i < page*5; i++) {
                if (typeof(newList[i]) == 'undefined') {
                    break;
                }
                
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={this.props.handleMouseEnter}
                    onMouseLeave={this.props.handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => this.props.handleChangePage(page, totalPage)}>换一批</SearchInfoSwitch>
                    </SearchInfoTitle> 
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }

    render() {
        const { focused, handleInputFocus, handleInputBlur } = this.props;
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className={'left active'}>首页</NavItem>
                    <NavItem className={'left'}>下载App</NavItem>
                    <NavItem className={'right'}>登录</NavItem>
                    <NavItem className={'right'}>
                        <i className={'iconfont'}>&#xe636;</i>
                    </NavItem>
                    {/* 
                    focus动画
                     */}
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="fuck"
                        >
                            <NavSearch 
                                className={focused ? 'focused' : ''}
                                onFocus={handleInputFocus} 
                                onBlur={handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe6e4;</i>
                        {/* 热门搜索 */}
                        {this.getListArea()}
                    </SearchWrapper>   
                    
                </Nav>
                <Addition>
                    <Button className={'writing'}>
                        <i className={'iconfont'}>&#xe6e5;</i>
                        &nbsp;写文章
                    </Button>
                    <Button className={'reg'}>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

/*
属性
 */
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
}
/*
方法
 */
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.getItemList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage) { 
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }     
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
