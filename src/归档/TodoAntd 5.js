import React, { Component } from "react";
import store from './store'
import {getInputValueAction, getAddItemAction,deleteItemAction} from './store/actionCreator'
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Input, Button, List } from "antd";

export default class TodoAntd extends Component {
  constructor(prop) {
    super(prop);
    this.state = store.getState();
    store.subscribe(() => this.setState(store.getState()))
  }

  handleInputChange = (e) => {
    const action = getInputValueAction(e.target.value)
    store.dispatch(action)
  }

  handleClick = () => {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleItemClick = (index) => {
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
  render() {
    return (
      <>
        <div style={{ margin: "10px" }}>
          <Input
            onChange={this.handleInputChange}
            value={this.state.inputValue}
            placeholder="todo info"
            style={{ width: "300px", marginRight: "10px" }}
          ></Input>
          <Button onClick={this.handleClick} type="primary">提交</Button>
          <div style={{ margin: "10px 10px 0 0 ", width: "400px" }}>
            <List
              bordered
              dataSource={this.state.list}
              renderItem={(item,index) => <List.Item onClick={this.handleItemClick.bind(this, index)}>{item}</List.Item>}
            />
          </div>
        </div>
      </>
    );
  }
}
