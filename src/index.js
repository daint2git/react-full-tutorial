import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// //import Template from './template/Template';
// import App from './redux-thunk/app';
// import rootReducer from './redux-thunk/reducers';

// const store = createStore(rootReducer, 
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(thunk));
// const ReduxApp = () => (
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
// render(<ReduxApp />, document.getElementById('app'));

import Root from './HOC/Root'

render(<Root />, document.getElementById('app'));