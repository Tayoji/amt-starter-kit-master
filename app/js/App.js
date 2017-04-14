import React from 'react';
import {
  render,
} from 'react-dom';
import {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory,
  withRouter,
} from 'react-router';

import '../style/app.scss';
class App extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  render() {

    return (
      <div id="container">
        <img className="background" src="../i/backimage.png"/>
        <div className="body">
          <img className="word" src="../i/word.png"/>
          <div className="inputs">
            <div>
              <input placeholder="请输入手机号码"/>
            </div>
            <div>
              <input style={{width:"calc(100% - 114px)"}} placeholder="请输入验证码"/>
              <button className="code">发送验证码</button>
            </div>
            <div>
              <input placeholder="设置登录密码"/>
            </div>
            <div className="buttombuts">
              <button className="reg">注册</button>
              <div>
                <button className="ggh">关注公众号</button>
                <button className="app">下载App</button>
              </div>
            </div>
          </div>
          <img className="payicon" src="../i/payicon.png"/>
        </div>
      </div>
    );
  }
}


// withRouter HoC
// @see https://github.com/reactjs/react-router/blob/0616f6e14337f68d3ce9f758aa73f83a255d6db3/upgrade-guides/v2.4.0.md#v240-upgrade-guide
const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  render(routes, document.getElementById('root'));
});
