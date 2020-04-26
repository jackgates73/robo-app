import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app.js';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import {robots} from './robots';
import './index.css'

ReactDOM.render(
	<div>
 		<App robots={robots}/>
  	</div>,
   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
