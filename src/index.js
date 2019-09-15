import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'materialize-css/dist/css/materialize.min.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



// import React from 'react'
// import ReactDOM from 'react-dom'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import App from './App'
// import registerServiceWorker from './registerServiceWorker'
// import './index.css'
// import 'materialize-css/dist/css/materialize.min.css'

// ReactDOM.render(
//   // <Provider store={ store() }>
//   <Router>
// 			<Switch>
// 				<Route path='/' component={ App } />
// 			</Switch>
// 		</Router>,
// 	// </Provider>,
// 	document.getElementById('root')
//   )
//   registerServiceWorker()