import React, { Component } from "react";
import { List, Input, Button } from "antd";
import axios from "axios";
import { connect } from "react-redux";
import {
  changeInputValueAction,
  addItemAction,
  deleteItemAction,
  getTodoList,
} from "./store/actionCreators";
import "antd/dist/antd.css";

const data = [1, 2, 3];

export class TodoAntd extends Component {
  componentDidMount() {
    this.props.fetchList();
  }

  render() {
    const { inputValue, list, handleInputChange, handleClick, handleDelete } =
      this.props;
    return (
      <div>
        <Input
          value={inputValue}
          onChange={handleInputChange}
          style={{ width: "300px", margin: "10px" }}
          placeholder="todo info"
        ></Input>
        <Button onClick={handleClick} type="primary">
          提交
        </Button>
        <div>
          <List
            style={{ width: "400px", marginLeft: "10px" }}
            size="large"
            bordered
            dataSource={list}
            renderItem={(item, index) => (
              <List.Item onClick={() => handleDelete(index)}>{item}</List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
  list: state.list,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputChange(e) {
    const action = changeInputValueAction(e.target.value);
    dispatch(action);
  },
  handleClick() {
    const action = addItemAction();
    dispatch(action);
  },
  handleDelete(index) {
    const action = deleteItemAction(index);
    dispatch(action);
  },
  fetchList() {
    const action = getTodoList();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoAntd);
