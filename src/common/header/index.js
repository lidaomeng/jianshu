import {HeaderWrapper, Logo} from './style';
import React, {Component} from "react";

class Header extends Component{
    render() {
        return (
            <HeaderWrapper>
                <Logo />
            </HeaderWrapper>
        )
    }
}

export default Header;
