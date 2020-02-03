import React from "react";
import { connect } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style';

/*
无状态组件 Header
*/
const Header = (props) => {
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
                        in={props.focused}
                        timeout={200}
                        classNames="fuck"
                    >
                        <NavSearch 
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocus} 
                            onBlur={props.handleInputBlur}
                        >
                        </NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe6e4;</i>
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

/*
属性
 */
const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
}
/*
方法
 */
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = {
                type: 'search_focus'
            };
            dispatch(action);
        },
        handleInputBlur() {
            const action = {
                type: 'search_blur'
            };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
