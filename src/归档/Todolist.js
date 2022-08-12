import React, { Component } from "react";
import TodoItem from "./TodoItem";
import axios from 'axios'
import "./style.css";

class Todolist extends Component {
  constructor(props) {
    super(props);
    // console.log(props) // {}
    this.state = {
      inputValue: "",
      list: [],
    };
  }

  componentWillMount() {
    console.log('parent componentWillMount')
  }

  componentDidMount() {
    console.log('parent componentDidMount')
    // 获取数据 ·
    axios.get('https://www.fastmock.site/mock/4b7e198761174a9e71c5eaf58263b72b/v1/api/todolist').then(res => {
      console.log(res)
      this.setState(() => ({
        list: [...res.data]
      }))
    })
    
  }

  handleInputChange(e) {
    const value = this.inputRef.value;
    this.setState(() => ({
      inputValue: value,
    }));
  }
  handleSubmit = () => {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: "",
    }), () => {
      console.log(this.ulRef.children.length)
    });
    
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: "",
    // });
  };

  handleItemDel = (index) => {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list };
    });
  };

  getTodolist = () => {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={item}
          content={item}
          index={index}
          delFn={this.handleItemDel.bind(this)}
        />
      );
    });
  };

  shouldComponentUpdate = () => {
    console.log('parent shouldComponentUpdate')
    return true;
  }

  componentWillUpdate() {
    console.log('parent componentWillUpdate')
  }
  componentDidUpdate(prevProps, prevState) { 
    console.log('parent componentDidUpdate', prevState.inputValue,prevState.list)
  } 

  render() {
    console.log('parent render')
    return (
      <>
        <div>
          <label htmlFor="input">输入内容</label>
          <input
            type="text"
            id="input"
            className="input"
            value={this.state.inputValue}
            ref={(dom) => {this.inputRef = dom}}
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleSubmit} className="btn">
            提交
          </button>
        </div>
        <ul ref={(dom) => {this.ulRef = dom}}>{this.getTodolist()}</ul>
      </>
    );
  }

  componentWillUnmount() {
    console.log('parent componentWillUnmount')
  }
}

export default Todolist;
