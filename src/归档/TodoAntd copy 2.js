import React, { Component } from "react";
import store from "./store"; // 引入store
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Input, Button, List } from "antd";

export default class TodoAntd extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleSubscribe)
  }

  handleInputChange = (e) => {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action);
  }
  handleSubscribe = () => {
   this.setState(store.getState());
  }
  handleClick = () => {
    const action = {
      type: 'add_todo_item'
    }
    store.dispatch(action);
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
          <Button type="primary" onClick={this.handleClick}>提交</Button>
          <div style={{ margin: "10px 10px 0 0 ", width: "400px" }}>
            <List
              bordered
              dataSource={this.state.list}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </div>
        </div>
      </>
    );
  }
}
