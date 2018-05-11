import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Loadable from 'react-loadable';
// import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav'
import Table1 from './components/Table1'
// import Table2 from './components/Table2'
// 弃用自定义的异步组件加载方式
// import Async from './components/Async';
// const Table2 = Async(() => import(/* webpackChunkName: 'table2' */'./components/Table2'))
// react-loadable 可以保证路由切换异步组件的动画的正常执行
const Table2 = Loadable({
  loader: () => import(/* webpackChunkName: 'table2' */'./components/Table2'),
  loading: () => <div>Loading...</div>
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <hr/>
          table2 含完整内容
          <Route render={ ({location}) => {
           return <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
              <Switch location={location}>
                <Route path="/table1" component={Table1} />
                <Route path="/table2" component={Table2} />
              </Switch>
            </CSSTransition>
          </TransitionGroup> 
          }}>

          </Route>
          
        </div>
      </Router>
    );
  }
}

export default App;
