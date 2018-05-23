import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

export { default } from './SearchBar'
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
