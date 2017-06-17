import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import registerServiceWorker from './registerServiceWorker';
import './css/main.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
