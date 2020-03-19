import React, { Component } from "react";
import { elements } from "./_data";

export default class DropElement extends Component {
  state = {
    hover: false,
    showName: false
  };

  openInfo = event => {
    // this.props.showInfo(this.props.num);
  };

  onMouseEnter = event => {
    // How to print the name of the bin we are droping into
    // console.log(elements[this.props.num].name);
    this.setState({ hover: false });
  };

  onMouseLeave = event => {
    this.setState({ hover: false });
  };

  render() {
    // let showName = this.props.showName;
    let { num, showName } = this.props;
    let element = elements[num];
    return (
      <div
        title={element.name}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.openInfo}
        // className={`element element-${num} ${element.category} ${
        //   this.state.hover ? "active" : ""
        // }`}
        className={`element element-${num} ${this.state.hover ? "active" : ""}`}
      >
        {/* Hide the symbol and name */}
        {showName ? (
          <div className="symbol">{element.symbol}</div>
        ) : (
          <div className="symbol"> </div>
        )}
        {showName ? (
          <div className="element-name">{element.name}</div>
        ) : (
          <div className="element-name"> </div>
        )}

        {/* <div className="symbol">{element.symbol}</div> */}
        {/* <div className="element-name">{element.name}</div> */}
      </div>
    );
  }
}
