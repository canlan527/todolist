import React, { Component } from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Input, Button, List } from "antd";

const data = ['jxz','wsx']

export default class TodoAntd extends Component {

  render() {
    return (
      <>
        <div style={{ margin: "10px" }}>
          <Input
            placeholder="todo info"
            style={{ width: "300px", marginRight: "10px" }}
          ></Input>
          <Button type="primary">提交</Button>
          <div style={{ margin: "10px 10px 0 0 ", width: "400px" }}>
            <List
              bordered
              dataSource={data}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </div>
        </div>
      </>
    );
  }
}
