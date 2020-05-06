import React from 'react';
import ReactDOM from 'react-dom';
import './static/index.css';
import App from './component/App';
import * as serviceWorker from './serviceWorker';


// TODO Create a light mode
// TODO Create a container class/variable that contains the structure of the eduction and experience containers to remove duplication
// TODO Remove the navbar and sidebar logic from the App container, for abstraction and to minimize code on the app page
// TODO Add a logging system
// TODO Implement a testing system
// TODO Remove hard code values where possible 
// TODO Fix: Logo does not resize properly in mobile view
// TODO Side bar takes up the whole screen




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
