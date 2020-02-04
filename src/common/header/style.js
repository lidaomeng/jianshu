import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 58px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 945px;
    height: 58px;
    margin: 0 auto;
    // background: pink;
`;

export const NavItem = styled.div`
    line-height: 58px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active{
        color: #ea6f5a;
    }
    &.iconfont{
        margin-right: 10px;
    }
`;

export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .iconfont{
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 50%;
        &.focused{
            background: #bfa;
        }
    }   
`;

/*
搜索框
*/
export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 58px;
    // height: 100px;
    padding: 0 20px;
    width: 260px;
    border-radius: 10px;
    box-shadow: 0 0 8px rgba(0,0,0,.2)
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.div`
    float: right;
    font-size: 13px;
`;

export const SearchInfoList = styled.div`
    overflow: hidden;
`;

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    line-height: 20px;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 15px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    border: none;
    outline: none;
    border-radius: 19px;
    margin-top: 10px;
    margin-left: 20px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    font-size: 14px;
    background: #eee;
    color: #666;
    &::placeholder{
        color: #999;
    }
    &.focused {
        width: 260px;
    }
    &.fuck-enter{
        transition: all .2s ease-out
    }
    &.fuck-enter-active{
        width: 260px;
    }
    &.fuck-exit{
        transition: all .2s ease-out
    }
    &.fuck-exit-active{
        width: 160px;
    }
`;
export const Addition = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 56px;
`;
export const Button = styled.div`
    float: right;
    line-height: 38px;
    border: 1px solid #ea6f5a;
    border-radius: 19px;
    margin-top: 9px;
    margin-right: 12px;
    padding: 0 20px;
    font-size: 15px;
    &.reg{
        color: #ea6f5a;
    }
    &.writing{
        color: #fff;
        background: #ea6f5a;
    }
`;
