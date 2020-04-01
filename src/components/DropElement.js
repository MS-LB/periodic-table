import React from "react";
import { useDrop } from "react-dnd";
import Element from "./Element";

/**
 * Wrapper Component for elements in the periodic table.
 * They are initally all "hidden elements" - The names and symbols are hidden
 */
const DropElement = props => {
  const { showName, num, active } = props;
  const dropSymbolId = "symbol-drop-" + num;
  const dropNameId = "name-drop-" + num;
  const element = (
    <Element
      showName={showName}
      num={num}
      symbolId={dropSymbolId}
      nameId={dropNameId}
      active={active}
    />
  );

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "element",
    drop: () => ({ num: num, showName: showName, element: element }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  return (
    <div ref={drop} className={`element element-${num}`}>
      {element}
    </div>
  );
};
export default DropElement;
