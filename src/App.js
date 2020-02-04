import React, {Component} from 'react';
import {GlobalStyled} from './style';
import {GlobalStyled2} from './statics/iconfont/iconfont';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';

import Header from './common/header'

class App extends Component{
  render() {
    return (
        <Provider store={store}>
            <div>
              <GlobalStyled />
              <GlobalStyled2 />
              <Header />

              <BrowserRouter>
                <div>
                  <Route path='/' exact render={() => <div>home</div>}></Route>
                  <Route path='/detail' exact render={() => <div>detail</div>}></Route>
                </div>
              </BrowserRouter>
            </div>
        </Provider>
    )
  }
}


export default App;
