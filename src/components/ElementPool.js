import React, { Component } from "react";
import DragElement from "./DragElement";

class ElementPool extends Component {
  state = {
    element1: true,
    element2: true,
    element3: true,
    element4: true,
    element5: true
  };

  render() {
    return (
      <div className="element-pool">
        {/* getting around ugly line that is dragged with the top element */}
        <p> </p>

        {/* Getting all the elements  */}
        <DragElement showName={true} num="1" />
        <DragElement showName={true} num="2" />
        <DragElement showName={true} num="3" />
        <DragElement showName={true} num="4" />
        <DragElement showName={true} num="5" />
        <DragElement showName={true} num="10" />
      </div>
    );
  }
}

export default ElementPool;
