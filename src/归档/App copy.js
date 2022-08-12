import React, { Component } from "react";
import { CSSTransition } from 'react-transition-group';

import './styles.css';
// import './style.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  handleToggle = () => {
    this.setState({
      show: this.state.show ? false : true,
    });
    console.log(this.state.show)
  };

  render() {
    return (
      <>
        {/* <div className={this.state.show ? "show" : "hide"}>hello</div> */}

        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames="fade"
          appear={true}
          unmountOnExit
          // onEnter={(el) => el.style.color = "purple"}
        >
          <div>hello react-animate</div>
        </CSSTransition>

        <button onClick={this.handleToggle}>toggle</button>
      </>
    );
  }
}
