import React, { Component } from "react";
import { useDrop } from "react-dnd";
import Element from "./Element";

const style = {
  // height: "12rem",
  // width: "12rem",
  // marginRight: "1.5rem",
  // marginBottom: "1.5rem",
  // color: "white",
  // padding: "1rem",
  // textAlign: "center",
  // fontSize: "1rem",
  // lineHeight: "normal",
  // float: "left"
};

const DropElement = props => {
  const { showName, num } = props;
  const dropSymbolId = "symbol-drop-" + num;
  const dropNameId = "name-drop-" + num;
  const element = (
    <Element
      showName={showName}
      num={num}
      symbolId={dropSymbolId}
      nameId={dropNameId}
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
      {/* <Element showName={showName} num={num} /> */}
      {element}
    </div>
  );
};
export default DropElement;
