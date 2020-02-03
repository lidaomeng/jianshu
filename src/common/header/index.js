import React, {Component} from "react";
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


class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            focused: false
        };

        this.onInputFocus = this.onInputFocus.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
    }

    render() {
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
                            in={this.state.focused}
                            timeout={200}
                            classNames="fuck"
                        >
                            <NavSearch 
                                className={this.state.focused ? 'focused' : ''}
                                onFocus={this.onInputFocus} 
                                onBlur={this.onInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe6e4;</i>
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

    onInputFocus() {
        this.setState({
            focused: true
        })
    }

    onInputBlur() {
        this.setState({
            focused: false
        })
    }
}

export default Header;
