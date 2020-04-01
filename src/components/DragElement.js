import React from "react";
import { useDrag } from "react-dnd";
import Element from "./Element";
import { elements } from "./_data";
import { groups } from "./groups";
import { createActiveElementsList } from "./common";

/**
 * This is a wrapper component around the Element component
 * This component is the child of the ElementPool
 * It contains a wrapper that allows for drag functionality
 */
const DragElement = props => {
  const { showName, num, hintsOn, activeGroups } = props;

  // Set varables for the getting element number after dragging and dropping
  const dragSymbolId = "symbol-drop-" + num;
  const dragNameId = "name-drop-" + num;
  const [{ isDragging }, drag] = useDrag({
    item: { num, type: "element" },
    end: (item, monitor) => {
      /* 
        This function runs after the element is dropped
       */
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        let dragElement = elements[num];
        let dropElement = elements[dropResult.num];

        let activeElements = createActiveElementsList(
          props.activeGroups,
          groups
        );

        let elementIsActive = activeElements.includes(dropResult.num);

        // If the dropElement is not active then exit the function without changing anything
        if (!elementIsActive) return;

        let symbol = document.getElementById("symbol-drop-" + dropResult.num);
        let name = document.getElementById("name-drop-" + dropResult.num);

        if (props.hintsOn) {
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
