import React, { PureComponent } from 'react';
import {GlobalStyled} from './style';
import {GlobalStyled2} from './statics/iconfont/iconfont';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store';
import Header from './common/header';
import Register from './pages/register';
import Login from './pages/login';

class App extends PureComponent{
  render() {
    return (
        <Provider store={store}>
            <div>
              <GlobalStyled />
              <GlobalStyled2 /> 
              <BrowserRouter>
                <div>
                  <Header />
                  <Route path='/' exact component={Home}></Route>
                  <Route path='/detail' exact component={Detail}></Route>

                  <Route path='/register' exact component={ Register }></Route>
                  <Route path='/login' exact component={ Login }></Route>
                </div>
              </BrowserRouter>
            </div>
        </Provider>
    )
  }
}


export default App;
