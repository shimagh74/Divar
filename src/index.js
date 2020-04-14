import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./store/reducer/reducer";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";


const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>


    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
