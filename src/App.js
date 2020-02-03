import React, {Component} from 'react';
import {GlobalStyled} from './style';
import {GlobalStyled2} from './statics/iconfont/iconfont';
import { Provider } from 'react-redux';
import store from './store';

import Header from './common/header'

class App extends Component{
  render() {
    return (
        <Provider store={store}>
            <GlobalStyled />
            <GlobalStyled2 />
            <Header />
        </Provider>
    )
  }
}


export default App;
