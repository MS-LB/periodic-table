import React, { Component } from "react";
import { elements } from "./_data";
import { useDrag } from "react-dnd";
import Element from "./Element";

// Use this hook in a funtional component
// import { useDrag } from "react-dnd";
// const [{ isDragging }, drag] = useDrag({
//     item: { num },
//     end: (item, monitor) => {
//       const dropResult = monitor.getDropResult();
//       if (item && dropResult) {
//         alert(`You dropped ${item.name} into ${dropResult.name}!`);
//       }
//     },
//     collect: monitor => ({
//       isDragging: monitor.isDragging()
//     })
//   });
//

const DragElement = ({ num }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { num, type: "box" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped ${item.num} into ${dropResult.name}!`);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={drag} style={{ opacity }}>
      <Element showName={true} num={num} />
    </div>
  );
};
export default DragElement;
