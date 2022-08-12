import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, List, Button } from "antd";
import { changeInputValueAction, addItemAction,deleteItemAction } from "./store/actionCreator";
import "antd/dist/antd.css";

const data = [1, 2, 3];

export class TodoAntd extends Component {
  render() {
    return (
      <div>
        <Input
          value={this.props.inputValue}
          placeholder="todo info"
          style={{ width: "300px", margin: "10px" }}
          onChange={this.props.handleChange}
        ></Input>
        <Button type="primary" onClick={this.props.handleClick}>
          提交
        </Button>
        <div>
          <List
            style={{ width: "400px", marginLeft: "10px" }}
            size="large"
            bordered
            dataSource={this.props.list}
            renderItem={(item, index) => <List.Item onClick={() => this.props.handleDelete(index)}>{item}</List.Item>}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    inputValue: state.inputValue,
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange(e) {
      const action = changeInputValueAction(e.target.value);
      dispatch(action);
    },
    handleClick() {
      const action = addItemAction();
      dispatch(action);
    },
    handleDelete(index) {
      const action = deleteItemAction(index);
      dispatch(action)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoAntd);
