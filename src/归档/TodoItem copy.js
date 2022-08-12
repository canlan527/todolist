import React, { Component } from "react";
import  PropTypes from "prop-types";

export default class TodoItem extends Component {
  constructor(props) {
    // console.log(props)
    super(props);
    this.handleDel = this.handleDel.bind(this);
  }

  static defaultProps = {
    empty: '没有安排'
  }

  handleDel() {
    const { delFn, index } = this.props;
    delFn && delFn(index);
  }

  // componentWillMount() {
  //   console.log('child componentWillMount')
  // }

  // componentDidMount() {
  //   console.log('child componentDidMount')
  // }


  // componentWillReceiveProps(nextProps) {
  //   console.log('child componentWillReceiveProps', nextProps);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log('child shouldComponentUpdate')
    if(nextProps.content === this.props.content) {
      return false;
    } else {
      return true;
    }
    // if(nextProps.content !== this.props.content) {
    //   return true;
    // } else {
    //   return false;
    // }
    // console.log(nextProps.content, this.props.content)
    // return true;
  }

  // componentWillUpdate() {
  //   console.log('child componentWillUpdate')
  // }

  
  render() {
    console.log('child render')
    const { content } = this.props;
    return <div onClick={this.handleDel}>{this.props.content || this.props.empty}</div>;
  }

  // componentDidUpdate() {
  //   console.log('child componentDidUpdate')
  // }

  // componentWillUnmount() {
  //   console.log('child componentWillUnmount')
  // }
}

TodoItem.propTypes = {
  content: PropTypes.string.isRequired,
  delFn: PropTypes.func.isRequired,
}
// 指定todoItem的默认值
// TodoItem.defaultProps = {
//   content: "没有安排",
// }