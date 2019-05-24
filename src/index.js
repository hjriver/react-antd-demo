import '@babel/polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './router';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'mobx-react'
import {LocaleProvider} from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
// import store from './store'

// import { HashRouter } from "react-router-dom";

ReactDOM.render(
// <BrowserRouter>
//     <AppRouter />
// </BrowserRouter>
<BrowserRouter>
  <AppRouter/>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA - PWA serviceWorker.unregister();
