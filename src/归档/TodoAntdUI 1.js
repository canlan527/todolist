import React, { Component } from "react";
import { Input, Button, List } from "antd";

export default class TodoAntdUI extends Component {
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <Input
          onChange={this.props.handleInputChange}
          value={this.props.inputValue}
          placeholder="todo info"
          style={{ width: "300px", marginRight: "10px" }}
        ></Input>
        <Button onClick={this.props.handleClick} type="primary">
          提交
        </Button>
        <div style={{ margin: "10px 10px 0 0 ", width: "400px" }}>
          <List
            bordered
            dataSource={this.props.list}
            renderItem={(item, index) => (
              <List.Item
                onClick={(index) => {
                  this.props.handleItemClick(index);
                }}
              >
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}
