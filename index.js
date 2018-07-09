import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import FormBox from './FormBox';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Router>
    <Route exact path="/app" component={App} />
  </Router>,
  rootElement
);
registerServiceWorker();
