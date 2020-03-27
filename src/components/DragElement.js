import React from "react";
import { useDrag } from "react-dnd";
import Element from "./Element";
import { elements } from "./_data";
import { groups } from "./groups";

//todo make util. same fun in app.js
function appendToList(groupState, group, list) {
  if (groupState) {
    console.log(groups.s);
    group.forEach(i => {
      list.push(i);
    });
  }
  return list;
}

// todo make util. (almost) same fun in app.js
function isActive(num, activeGroups) {
  let active = [];
  active = appendToList(activeGroups[0], groups.s, active);
  active = appendToList(activeGroups[1], groups.p, active);
  active = appendToList(activeGroups[2], groups.d, active);
  active = appendToList(activeGroups[3], groups.f, active);
  return active.includes(num);
}

const DragElement = props => {
  const { showName, num, hintsOn, activeGroups } = props;

  // set varables for the getting
  const dragSymbolId = "symbol-drop-" + num;
  const dragNameId = "name-drop-" + num;
  const [{ isDragging }, drag] = useDrag({
    item: { num, type: "element" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        let dragElement = elements[num];
        let dropElement = elements[dropResult.num];

        //
        //console.log(`You dropped ${item.num} into ${dropResult.num}!`);
        //console.log(`Drop num ${dropResult.num} `);
        let elementIsActive = isActive(dropResult.num, activeGroups);
        console.log("elementIsActive   " + elementIsActive);
        if (!elementIsActive) return;

        let symbol = document.getElementById("symbol-drop-" + dropResult.num);
        let name = document.getElementById("name-drop-" + dropResult.num);
        let hint = document.getElementsByName("highlightHints")[0];
        console.log("hintsOn prop in DragElement: ", hintsOn);
        console.log("hint getElementsByName in DragElement: ", hint.checked);

        if (hint.checked) {
          console.log("symbol.style.color   " + symbol.style.color);

          if (dropElement.number === dragElement.number) {
            symbol.style = "color: black";
            name.style = "color: black";
          } else {
            symbol.style = "color: red";
            name.style = "color: red";
          }
        } else {
          symbol.style = "color: black";
          name.style = "color: black";
        }
        symbol.innerText = dragElement.symbol;
        name.innerText = dragElement.name;
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={drag} style={{ opacity }}>
      <Element
        showName={showName}
        num={num}
        symbolId={dragSymbolId}
        nameId={dragNameId}
        active={true}
      />
    </div>
  );
};
export default DragElement;
