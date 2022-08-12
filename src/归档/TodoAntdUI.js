// 无状态组件
import React, { Component } from "react";
import { Input, Button, List } from "antd";

const TodoAntdUI = (props) => {
  return  (
  <div style={{ margin: "10px" }}>
        <Input
          onChange={props.handleInputChange}
          value={props.inputValue}
          placeholder="todo info"
          style={{ width: "300px", marginRight: "10px" }}
        ></Input>
        <Button onClick={props.handleClick} type="primary">
          提交
        </Button>
        <div style={{ margin: "10px 10px 0 0 ", width: "400px" }}>
          <List
            bordered
            dataSource={props.list}
            renderItem={(item, index) => (
              <List.Item
                onClick={() => {
                  props.handleItemClick(index);
                }}
              >
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>  
  )
}
export default TodoAntdUI