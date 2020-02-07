import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
    LoginWrapper,
    Main,
    Title,
    LoginContainer,
    Input,
    Button,
    MoreLogin
} from './style';

import weibo from '../../statics/image/weibo.png';
import wechat from '../../statics/image/wechat.png';
import qq from '../../statics/image/qq.png';

class Login extends PureComponent{
    render() {
        return (
            <LoginWrapper>
                <Main>
                    <Title>
                        <Link to='/login' className='active'>登录</Link><b>&sdot;</b><Link to='/register'>注册</Link>
                    </Title>
                    <LoginContainer>
                        <Input>
                            <input placeholder='手机号或邮箱' className='first'></input> 
                            <i className={'iconfont'}>&#xe67f;</i>
                        </Input>
                        <Input>
                            <input placeholder='密码' className='second'></input> 
                            <i className={'iconfont'}>&#xe608;</i>
                        </Input>
                        <Button>登录</Button>
                        <MoreLogin>
                            <h6>社交帐号登录</h6>
                            <ul>
                                <li><a href='#'><img src={weibo} alt='' /></a></li>
                                <li><a href='#'><img src={wechat} alt='' /></a></li>
                                <li><a href='#'><img src={qq} alt='' /></a></li>
                            </ul>
                        </MoreLogin>
                    </LoginContainer>
                </Main>
            </LoginWrapper>
        )
    }
}

const mapState = (state) => ({
});

const mapDispatch = (dispatch) => ({   
});

export default connect(mapState, mapDispatch)(Login);
