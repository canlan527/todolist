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

  shouldComponentUpdate(nextProps, nextState) {
    // console.log('child shouldComponentUpdate')
    if(nextProps.content === this.props.content) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    console.log('child render')
    const { content } = this.props;
    return <div onClick={this.handleDel}>{this.props.content || this.props.empty}</div>;
  }
}

TodoItem.propTypes = {
  content: PropTypes.string.isRequired,
  delFn: PropTypes.func.isRequired,
}
