
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CommentApp from './containers/CommentApp'
import commentsReducer from './reducers/comments'
import './index.css'

import CommentInput from './components/commentInput/commentInput'

const store = createStore(commentsReducer)

ReactDOM.render(
  <Provider store={store}>
    <div>
    <CommentApp />
    <CommentInput />
    </div>
  </Provider>,
  document.getElementById('root')
);
