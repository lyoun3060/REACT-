import React, { Component } from "react";

class Toggle extends Component {
  constructor(props) {
    super(props);

    this.state = { isToggleOn: true };
    //this를 사용할 수 있음
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "켜짐" : "꺼짐"}
        </button>
      </div>
    );
  }
}

export default Toggle;
