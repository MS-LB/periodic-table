import React from "react";
import { useDrag } from "react-dnd";
import Element from "./Element";
import { elements } from "./_data";

const DragElement = props => {
  const { showName, num } = props;

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

        let symbol = document.getElementById("symbol-drop-" + dropResult.num);
        let name = document.getElementById("name-drop-" + dropResult.num);
        let hint = document.getElementsByName("highlightHints")[0];
        if (hint.checked) {
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
      />
    </div>
  );
};
export default DragElement;
