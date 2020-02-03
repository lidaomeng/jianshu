import React, {Component, Fragment} from 'react';
import {GlobalStyled} from './style';
import {GlobalStyled2} from './statics/iconfont/iconfont';

import Header from './common/header'

class App extends Component{
  render() {
    return (
        <Fragment>
            <GlobalStyled />
            <GlobalStyled2 />
            <Header />
        </Fragment>
    )
  }
}


export default App;
