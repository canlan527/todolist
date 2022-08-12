import React, { Component } from "react";
import { CSSTransition,TransitionGroup } from 'react-transition-group';

import './styles.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []      
    };
  }

  handleAddItem = () => {
    this.setState((prevState) => ({
      list: [...prevState.list, 'item']
    }))
  };

  render() {
    return (
      <>
      <TransitionGroup>
      {
        this.state.list.map((item,index) => {
          return (
            <CSSTransition
              timeout={1000}
              classNames="fade"
              appear={true}
              key={index}
            > 
              <div>{item}</div>
            </CSSTransition>
            
          )
        })
      }
      </TransitionGroup>

        {/* <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames="fade"
          appear={true}
          unmountOnExit
        >
          <div>hello react-animate</div>
        </CSSTransition> */}

        <button onClick={this.handleAddItem}>add item</button>
      </>
    );
  }
}
