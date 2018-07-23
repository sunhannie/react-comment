import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentInput from '../components/CommentInput'
import { addComment } from '../reducers/comments'
import PropTypes from 'prop-types'

class CommentInputContainer extends Component {
  static propTypes = {
    comments: PropTypes.array,
    onSubmit: PropTypes.func
  }
//  this.state仅包含username对象，比如：{username: "asfRTssafadf"}
  constructor () {
    super()
    this.state = { username: '' }
    console.log(this.props);
  }

  componentWillMount () {
    this._loadUsername()
  }

  _loadUsername () {
    const username = localStorage.getItem('username')
    if (username) {
      this.setState({ username })
    }
  }
// 函数中不穿username变量，从哪里传过来呢？从CommentInput.js中获得
  _saveUsername (username) {
    localStorage.setItem('username', username)
  }

// comment是从CommentInput.js中获得，onSubmit函数中包含参数，所以会传到CommentInput组件中的onSubmit属性后面的函数中
// 怎么把多个localStorage合并起来的呢？通过mapStateToProps合并起来的，看下此原理
  handleSubmitComment (comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    const { comments } = this.props
    // console.log(comment);
    const newComments = [...comments, comment]
    localStorage.setItem('comments', JSON.stringify(newComments))
    // localStorage.setItem('comments', JSON.stringify(comments))
    if (this.props.onSubmit) {
      this.props.onSubmit(comment)
    }
  }

  render () {
    //this.props为 {comments: Array(4), onSubmit: ƒ}
    
    return (
      <CommentInput
        username={this.state.username}
        onUserNameInputBlur={this._saveUsername.bind(this)}
        onSubmit={this.handleSubmitComment.bind(this)} />
    )
  }
}

// 把返回的值全部通过 `props` 方式传递给此组件。这个state参数最后是在connect中是获取store.getState()
const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}

// 当onSubmit会触发addComment，comment在CommentInput.js中可以知道是包含username、content、createdTime的对象，然后通过addComment传到reducer
// 
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (comment) => {
      dispatch(addComment(comment))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentInputContainer)

// export default CommentInputContainer

// 用户操作，最终应归到reducer中对应的函数。