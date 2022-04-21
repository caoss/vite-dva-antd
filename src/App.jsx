import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CCC from "./pages/CCC";
import dynamic from 'dva/dynamic'

console.log( 'react',React)   
// 路由器，例如<BrowserRouter>和<HashRouter>
// 路由匹配器，例如<Route>和<Switch>
// 和导航，例如<Link>、<NavLink>和<Redirect>

export default function BasicExample({app}) {
  console.log( '-----env' , import.meta.env) ;

  // model分为全局的和局部的
  const Home = dynamic({
    app,
    component: () => import('./pages/Home'),
      models: () => [
      import('./models/products'),
      import('./models/aaa'),
      import('./models/bbb'),
    ],
  });
  const BBB = dynamic({
    app,
    component: () => import('./pages/BBB'),
      models: () => [
      import('./models/bbb'),
    ],
  });

  return (
    <Router>
      <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/bbb">
              <BBB />
            </Route>
            <Route path="/ccc">
              <CCC />
            </Route>
          </Switch>
    </Router>
  );
}
