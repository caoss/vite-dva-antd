import App from './App.jsx'
import dva from 'dva';
// import model_product from './models/products';
// import model_aaa from './models/aaa';

// 创建应用
console.log( 'dva',dva  )
console.log( '-----env' , import.meta.env) ;

const app = dva();
// 注册视图
app.router(App);

// app.model( model_product );
// app.model( model_aaa );

// 启动应用
app.start('#root');

// dva对react-有版本要求


// import router from "./router"
// app.router(router);
