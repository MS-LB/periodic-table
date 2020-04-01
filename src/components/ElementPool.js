import React, { Component } from "react";
import DragElement from "./DragElement";
import { groups } from "./groups";

/**
 *  This component holds all the elements that need to be dragged to the correct locations
 *  The element list is created by looking at the active sections of the periodic table.
 *  The active elements are shuffled before they are created
 */
class ElementPool extends Component {
  state = {
    s: this.props.activeGroups[0],
    p: this.props.activeGroups[1],
    d: this.props.activeGroups[2],
    f: this.props.activeGroups[3]
  };

  /**
   * JavaScript implementation of the Durstenfeld shuffle, an optimized version of Fisher-Yates
   * Laurens Holst & ashleedawg
   * https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
   */
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  /**
   * This function simply checks which group is active to create an array
   * The array holds the element numbers of all active elements
   * @returns {Array} All active elements
   */
  createSelectElements() {
    let list = [];
    if (this.props.activeGroups[0]) {
      groups.s.forEach(el => list.push(el));
    }
    if (this.props.activeGroups[1]) {
      groups.p.forEach(el => list.push(el));
    }
    if (this.props.activeGroups[2]) {
      groups.d.forEach(el => list.push(el));
    }
    if (this.props.activeGroups[3]) {
      groups.f.forEach(el => list.push(el));
    }

    this.shuffleArray(list);
    return list;
  }

  render() {
    let elementList = this.createSelectElements();
    return (
      <div className="element-pool">
        {/* Getting all the elements  */}
        {elementList.map(id => (
          <DragElement
            showName={true}
            num={id}
            key={id}
            hintsOn={this.props.hintsOn}
            activeGroups={this.props.activeGroups}
          />
        ))}
      </div>
    );
  }
}

export default ElementPool;
