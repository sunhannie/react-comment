// import React from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import CommentInput from './components/CommentInput';

// ReactDOM.render(
//   <CommentInput/>,
//   document.getElementById('root')
// );

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CommentApp from './containers/CommentApp'
import commentsReducer from './reducers/comments'
import './index.css'

const store = createStore(commentsReducer)

ReactDOM.render(
  <Provider store={store}>
    <CommentApp />
  </Provider>,
  document.getElementById('root')
);
