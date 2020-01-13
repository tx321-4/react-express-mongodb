import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {counter, addGUN, removeGUN, addGunAsync} from './index.redux'
import * as serviceWorker from './serviceWorker';

const store = createStore(counter, applyMiddleware(thunk))
function render() {
  ReactDOM.render(<App store={store} addGUN={addGUN} removeGUN={removeGUN} />, document.getElementById('root'));

}
render();

store.subscribe(render)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
