import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';

// 异步模块加载
import dynamic from 'dva/dynamic'

function RouterConfig({ history, app }) {
  
  const IndexPage = dynamic({
    app,
    component: () => import('./pages/AAA'),
      models: () => [
      import('./models/products'),
    ],
  });

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        {/* <Route exact path="/users" component={UsersPage} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;