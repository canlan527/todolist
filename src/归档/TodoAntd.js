import React, { Component } from "react";
import store from "./store";
import {
  getInputValueAction,
  getAddItemAction,
  deleteItemAction,
  getInitlist
} from "./store/actionCreator";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import TodoAntdUI from "./TodoAntdUI";


export default class TodoAntd extends Component {
  constructor(prop) {
    super(prop);
    this.state = store.getState();
    store.subscribe(() => this.setState(store.getState()));
  }

  componentDidMount() {
    const action = getInitlist();
    store.dispatch(action);
  }

  handleInputChange = (e) => {
    const action = getInputValueAction(e.target.value);
    store.dispatch(action);
  };

  handleClick = () => {
    const action = getAddItemAction();
    store.dispatch(action);
  };

  handleItemClick = (index) => {
    const action = deleteItemAction(index);
    store.dispatch(action);
  };
  render() {
    return (
      <>
        <TodoAntdUI
          inputValue={this.state.inputValue}
          list={this.state.list}
          handleInputChange={this.handleInputChange}
          handleClick={this.handleClick}
          handleItemClick={this.handleItemClick}
        ></TodoAntdUI>
      </>
    );
  }
}
