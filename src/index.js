import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AboutUs from './aboutUs';
import Tell from './tell';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter,  Router} from 'react-router-dom';
import NavFour from './Nav/Four';

const routes=(

<BrowserRouter>
<div>
 <Route path="/" component={App} />
 <Route path="/about" component={AboutUs} />
 <Route path='/tell' component={Tell} />
 <Route path="/Nav/Four" component={NavFour} />
 </div>
</BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
