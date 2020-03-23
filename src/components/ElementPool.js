import React, { Component } from "react";
import DragElement from "./DragElement";
import { groups } from "./groups";

class ElementPool extends Component {
  state = {
    s: true,
    p: true,
    d: true,
    f: true
  };

  createSelectElements() {
    const sCheckBox = document.getElementById("sGroupId");
    console.log(sCheckBox);
    let list = [];
    groups.s.forEach(el => list.push(el));
    groups.p.forEach(el => list.push(el));
    groups.d.forEach(el => list.push(el));
    groups.f.forEach(el => list.push(el));
    return list;
  }

  render() {
    let elementList = this.createSelectElements();
    // elementList.concat(groups.s, groups.p, groups.d, groups.f);
    console.log(elementList);
    return (
      <div className="element-pool">
        {/* getting around ugly line that is dragged with the top element */}
        <p> </p>

        {/* Getting all the elements  */}
        {elementList.map(id => (
          <DragElement showName={true} num={id} key={id} />
        ))}
      </div>
    );
  }
}

export default ElementPool;
