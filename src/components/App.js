import React, { Component } from "react";
import DropElement from "./DropElement";
import ModeForm from "./ModeForm";
import ElementPool from "./ElementPool";
import { DndProvider } from "react-dnd";
import TouchBackend from "react-dnd-touch-backend";
import { groups } from "./groups";

document.title = "The Periodic Table of Elements";

class App extends Component {
  constructor(props) {
    super(props);
    this.optionHandler = this.optionHandler.bind(this);
  }

  state = {
    s: true,
    p: true,
    d: true,
    f: true,
    hintsOn: true,
    reset: false,
    submit: false,
    score: 0
  };

  /**
   * Calculates the number of Elements in their correct locations
   */
  calculateCorrectElements = () => {
    let numberCorrect = 0;
    let tableNode = document.getElementById("table");
    console.log(tableNode);
    let children = tableNode.childNodes;
    children.forEach(element => {
      if (
        element.childNodes[0].childNodes[1].innerHTML ===
        element.childNodes[0].title
      ) {
        numberCorrect += 1;
      } else {
        element.childNodes[0].style = "background-color: orange";
      }
    });
    return numberCorrect;
  };

  /**
   * Updates the score
   */
  submitHandler = () => {
    // For each group that is active loop over them and check num vs symbol
    let numberCorrect = this.calculateCorrectElements();
    this.setState({ submit: true, score: numberCorrect });
  };

  /**
   * Clears all
   */
  groupReset = group => {
    let tableNode = document.getElementById("table");
    console.log(tableNode);
    let children = tableNode.childNodes;

    let nonActiveGroupNumbers = [];

    nonActiveGroupNumbers = this.appendToList(
      true,
      group,
      nonActiveGroupNumbers
    );

    children.forEach(element => {
      let currentNumber = parseInt(element.className.split("-")[1]);
      if (nonActiveGroupNumbers.includes(currentNumber)) {
        if (element.childNodes[0].childNodes[1].innerHTML !== "") {
          element.childNodes[0].childNodes[0].innerHTML = "";
          element.childNodes[0].childNodes[1].innerHTML = "";
        }
        element.childNodes[0].style = "background-color: #cdddf4";
        console.log("color changed");
      }
    });

    // this.setState({ submit: false, score: 0 });
  };

  // Fix background color for non-active groups after submit&reset:
  // Active     :  #8eb1e7
  // non-Active : "#cdddf4"
  resetGroupColor = () => {
    if (!this.state.s) this.groupReset(groups.s);
    if (!this.state.p) this.groupReset(groups.p);
    if (!this.state.d) this.groupReset(groups.d);
    if (!this.state.f) this.groupReset(groups.f);
  };

  resetHandler = () => {
    let tableNode = document.getElementById("table");
    console.log(tableNode);
    let children = tableNode.childNodes;

    children.forEach(element => {
      if (element.childNodes[0].childNodes[1].innerHTML !== "") {
        element.childNodes[0].childNodes[0].innerHTML = "";
        element.childNodes[0].childNodes[1].innerHTML = "";
      }

      // Clear the color change in wrong locations
      element.childNodes[0].style = "background-color: #8eb1e7";
    });

    // Reset the non-active groups
    this.resetGroupColor();
    // this.optionHandler(s);
    // this.optionHandler(p);
    // this.optionHandler(s);
    // this.optionHandler(s);

    this.setState({ submit: false, score: 0 });
  };

  optionHandler = name => {
    console.log("name ", name);
    console.log("name ", this.state);
    switch (name) {
      case "sGroup":
        this.groupReset(groups.s);
        this.setState(prevState => ({ s: !prevState.s }));
        break;
      case "pGroup":
        this.groupReset(groups.p);
        this.setState(prevState => ({ p: !prevState.p }));
        break;
      case "dGroup":
        this.groupReset(groups.d);
        this.setState(prevState => ({ d: !prevState.d }));
        break;
      case "fGroup":
        this.groupReset(groups.f);
        this.setState(prevState => ({ f: !prevState.f }));
        break;
      case "highlightHints":
        this.setState(prevState => ({
          hintsOn: !prevState.hintsOn
        }));
        break;
      default:
        break;
    }
  };

  options = {
    enableMouseEvents: true
  };

  appendToList(groupState, group, list) {
    if (groupState) {
      console.log(groups.s);
      group.forEach(i => {
        list.push(i);
      });
    }
    return list;
  }

  createDropList = () => {
    // Creating a list to render the correct element boxes in the periodic table
    let dropElementList = [];
    // The table follows a standard format therefore the elements must be created in the correct order
    let bounds = [1, 57, 72, 89, 104, 119, 58, 71, 90, 103];
    let active = [];
    active = this.appendToList(this.state.s, groups.s, active);
    active = this.appendToList(this.state.p, groups.p, active);
    active = this.appendToList(this.state.d, groups.d, active);
    active = this.appendToList(this.state.f, groups.f, active);

    /* 
    1 to 57
    Lanthanoids split  72 to 89
    Actinoids split  104 to 119
    Lanthenoids  58 to 71 
    Actionoids   90 to 103 
    */

    let lower = 0;
    let upper = 1;
    while (upper < bounds.length) {
      for (let i = bounds[lower]; i <= bounds[upper]; i++) {
        let dropElementProps = { num: i, active: false };

        if (active.includes(i)) {
          dropElementProps.active = true;
        }
        dropElementList.push(dropElementProps);
      }
      lower += 2;
      upper += 2;
    }
    return dropElementList;
  };

  render() {
    // make variables to render the elements in the correct order

    let dropElementList = this.createDropList();

    return (
      <div className="wrapper">
        <header>
          <div className="header-info">
            <h1>The Periodic Table of Elements Game</h1>
            <p>
              by{" "}
              <a href="https://scheid.dev" target="noopener noreferrer">
                Michael Scheid
              </a>{" "}
              /{" "}
              <a
                href="https://github.com/MS-LB/periodic-table"
                target="noopener noreferrer"
              >
                Source Code
              </a>
              <br />
              Project forked from-The Periodic Table of Elements by{" "}
              <a href="https://tamalweb.com" target="noopener noreferrer">
                Tamal Anwar
              </a>{" "}
              /{" "}
              <a
                href="https://github.com/TamalAnwar/periodic-table"
                target="noopener noreferrer"
              >
                Source Code
              </a>
            </p>
          </div>
          <section className="side-info">
            <ModeForm
              optionHandler={this.optionHandler}
              activeGroups={[
                this.state.s,
                this.state.p,
                this.state.d,
                this.state.f
              ]}
              hintsOn={this.state.hintsOn}
              submit={this.state.submit}
              reset={this.state.reset}
              submitHandler={this.submitHandler}
              resetHandler={this.resetHandler}
              score={this.state.score}
            />
          </section>
        </header>

        <section>
          {/* <DndProvider backend={Backend}> */}
          <DndProvider backend={TouchBackend} options={this.options}>
            <div id="table" className="main-group">
              {dropElementList.map(dropElementProps => (
                <DropElement
                  num={dropElementProps.num}
                  key={dropElementProps.num}
                  active={dropElementProps.active}
                  showName={false}
                />
              ))}
            </div>
            <div className="secondary-group">
              <ElementPool
                optionHandler={this.optionHandler}
                activeGroups={[
                  this.state.s,
                  this.state.p,
                  this.state.d,
                  this.state.f
                ]}
                hintsOn={this.state.hintsOn}
              />
            </div>
          </DndProvider>
        </section>
      </div>
    );
  }
}

export default App;
