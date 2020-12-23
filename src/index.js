import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux";
// import reducer from './reducers/counter';
// 改进 5-1
import rootReducer from "./reducers"
import { Provider } from "react-redux";



// Learning useState with object
// import UseStateObj from './components/useStateObj';

// 创建Store仓库
// const store = createStore(reducer);
// 改进 5-2
const store = createStore(rootReducer);
// 监听store数据变化
// store.subscribe(() => {
//   console.log("state: ", store.getState());
// });

// const render = () => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App 
//         onIncrement={() => {store.dispatch({type: "INCREMENT"})}}
//         onDecrement={() => {store.dispatch({type: "DECREMENT"})}}
//         counter={store.getState()}
//       />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }

// // 第一次加载渲染
// render();

// // 监听数据变化, 重新渲染
// store.subscribe(render);


ReactDOM.render(
  <Provider store={ store }>
    <App />
    {/* <UseStateObj /> */}
  </Provider>,
  document.getElementById('root'));