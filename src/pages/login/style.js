import styled from 'styled-components';

export const Template = styled.div`
`;

export const LoginWrapper = styled.div`
    position: relative;
    height: 100%;
    min-height: 780px;
    background: #f1f1f1;
`;

export const Main = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    width: 300px;
    background-color: #fff;
    padding: 50px 50px 30px;
    margin: 60px auto;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    border-radius: 4px;
`;

export const Title = styled.h4`
    width: 100%;
    margin-bottom: 50px;
    font-size: 18px;
    line-height: 19px;
    font-weight: 400;
    text-align: center;
    a,b{
        display: inline-block;
        color: #969696;
        padding: 10px;
    }
    .active{
        color: #ea6f5a;
        border-bottom: 2px solid #ea6f5a;
    }
`;

export const LoginContainer = styled.div`
    width: 100%;
    font-size: 14px;
`;

export const Input = styled.div`
    input{
        display: inline-block;
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        border-bottom: none;
        padding: 4px 12px 4px 35px;
        border: 1px solid #c8c8c8;
        background-color: hsla(0,0%,71%,.1);
        
    }
    .first{
        border-radius: 4px 4px 0 0;
    }
    .second{
        border-radius: 0 0 4px 4px;
    }
    .iconfont{
        display: inline-block;
        margin-left: -100%;
        padding-left: 10px;
    }
`;

export const Button = styled.button`
    display: block;
    width: 100%;
    margin-top: 50px;
    font-size: 18px;
    padding: 9px 18px;
    border-radius: 25px;
    color: #fff;
    background: #3194d0;
    cursor: pointer;
`;

export const MoreLogin = styled.div`
    margin-top: 50px;
    h6{
        position: relative;
        font-size: 12px;
        color: #b5b5b5;
        text-align: center;
        margin-bottom: 10px;
    }
    h6:before, h6:after{
        position: absolute;
        top: 5px;
        content: "";
        width: 60px;
        border-top: 1px solid #b5b5b5;
    }
    h6:before{
        left: 30px;
    }
    h6:after{
        right: 30px;
    }
    ul{
        margin:0px auto 10px;
        text-align: center;
        li{
            margin: 0 15px;
            display: inline-block;
            a{
                display: block;
                height: 50px;
                height: 50px;
                line-height: 50px;
                img{
                    display: block;
                    height: 30px;
                }
            }
        }
    }
`;