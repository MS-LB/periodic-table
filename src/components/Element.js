import React, { Component } from "react";
import { elements } from "./_data";

export default class Element extends Component {
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
    let { num, showName, symbolId, nameId, active } = this.props;
    // console.log(symbolId);
    let element = elements[num];

    // console.log("active " + active);
    // console.log("show name " + showName);
    // if (!active && showName) {
    //   showName = false;
    // }
    // console.log("show name2 " + showName);

    let styles = {
      // this is the normal color #8eb1e7
      backgroundColor: "#cdddf4"
    };
    return (
      <div
        title={showName && active ? element.name : "Hidden Element"}
        data-name={element.name}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.openInfo}
        // className={`element element-${num} ${element.category} ${
        //   this.state.hover ? "active" : ""
        // }`}
        className={`element element-${num} ${this.state.hover ? "active" : ""}`}
        // style={active ? null : "background-color:black"}
        style={active ? null : styles}
      >
        {/* Hide the symbol and name */}
        {showName && active ? (
          <div id={symbolId} className="symbol">
            {element.symbol}
          </div>
        ) : (
          <div id={symbolId} className="symbol">
            {" "}
          </div>
        )}
        {showName && active ? (
          <div id={nameId} className="element-name">
            {element.name}
          </div>
        ) : (
          <div id={nameId} className="element-name">
            {" "}
          </div>
        )}

        {/* <div className="symbol">{element.symbol}</div> */}
        {/* <div className="element-name">{element.name}</div> */}
      </div>
    );
  }
}
