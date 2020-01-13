// redux 在 index.js 中单独的使用

import {createStore} from 'redux';

//1. 新建store
// 通过reducer
// 根据老的 state 和action 生成新的state
function counter(state=0, action) {
  switch(action.type) {
    case 'Add_GUN':
      return state + 1;
    case 'REMOBE_GUN':
      return state -1;
    default:
      return 10
  }
}
// 1. 新疆store
const store = createStore(counter);

const init = store.getState()
console.log(init)

//定义事件方法
function listener(){
  const current = store.getState();
  console.log(`现在有机枪${current}把`)
}

//3 .监听事件
store.subscribe(listener)

// 2.派发事件 传递 aciton
store.dispatch({type: 'Add_GUN'});
store.dispatch({type: 'REMOVE_GUN'});