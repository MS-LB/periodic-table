import React, { Component } from "react";
import { elements } from "./_data";

/**
 *
 */
export default class Element extends Component {
  state = {
    hover: false,
    showName: false
  };

  onMouseEnter = event => {
    this.setState({ hover: false });
  };

  onMouseLeave = event => {
    this.setState({ hover: false });
  };

  render() {
    let { num, showName, symbolId, nameId, active } = this.props;
    let element = elements[num];

    let styles = {
      // Normal color #8eb1e7
      backgroundColor: "#cdddf4"
    };

    return (
      // Display all element boxes (Drag and Drop elements)
      // Hide all info for the target elements (the Drop elements)

      // This is the outer wrapper of the element
      <div
        title={showName && active ? element.name : "Hidden Element"}
        data-name={element.name}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        className={`element element-${num} ${this.state.hover ? "active" : ""}`}
        style={active ? null : styles}
      >
        {/* Element Symbol
         * If active and showName are true the symbol is displayed.
         * Otherwise it is blank.
         */}
        {showName && active ? (
          <div id={symbolId} className="symbol">
            {element.symbol}
          </div>
        ) : (
          <div id={symbolId} className="symbol">
            {" "}
          </div>
        )}

        {/* Element Name
         * If active and showName are true the name is displayed.
         * Otherwise it is blank.
         */}
        {showName && active ? (
          <div id={nameId} className="element-name">
            {element.name}
          </div>
        ) : (
          <div id={nameId} className="element-name">
            {" "}
          </div>
        )}
      </div>
    );
  }
}
