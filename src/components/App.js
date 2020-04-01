import React, { Component } from "react";
import DropElement from "./DropElement";
import ModeForm from "./ModeForm";
import ElementPool from "./ElementPool";
import { DndProvider } from "react-dnd";
import TouchBackend from "react-dnd-touch-backend";
import { groups } from "./groups";
import { elements } from "./_data";
import { appendToList, createActiveElementsList } from "./common";

document.title = "The Periodic Table of Elements";

/**
 * This is the root component that also contains much of the logic
 *
 * Direct Child components: ModeForm, DropElement, ElementPool
 *
 * Logic or functionally this component contains:
 * Submit, Reset and checkbox changes
 *
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    // this.createActiveElementsList = this.createActiveElementsList.bind(this);
  }

  /**
   * Maintain the score as well as checkbox and button booleans
   */
  state = {
    activeGroups: [true, true, true, true],
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
   * Also display changes the background color of incorrect answers
   */
  calculateCorrectElements = () => {
    let numberCorrect = 0;
    let tableNode = document.getElementById("table");

    let children = tableNode.childNodes;

    let active = createActiveElementsList(this.state.activeGroups, groups);

    for (let i = 0; i < children.length; i++) {
      let element = children[i];

      let elementNumber = parseInt(
        element.childNodes[0].childNodes[1].id.split("-")[2]
      );

      // Skip non active groups
      if (!active.includes(elementNumber)) {
        continue;
      }

      if (
        element.childNodes[0].childNodes[1].innerHTML ===
        elements[elementNumber].name
      ) {
        numberCorrect += 1;
      } else {
        element.childNodes[0].style = "background-color: orange";
        element.childNodes[0].childNodes[0].innerHTML =
          elements[elementNumber].symbol;
        element.childNodes[0].childNodes[1].innerHTML =
          elements[elementNumber].name;
      }
    }

    return numberCorrect;
  };

  /**
   * Updates the score
   */
  submitHandler = () => {
    let numberCorrect = this.calculateCorrectElements();
    this.setState({ submit: true, score: numberCorrect });
  };

  /**
   * Clears the name and symbol of groups of elements
   */
  groupReset = group => {
    let tableNode = document.getElementById("table");
    let children = tableNode.childNodes;

    let nonActiveGroupNumbers = [];

    nonActiveGroupNumbers = appendToList(true, groups, nonActiveGroupNumbers);

    children.forEach(element => {
      let currentNumber = parseInt(element.className.split("-")[1]);
      if (nonActiveGroupNumbers.includes(currentNumber)) {
        if (element.childNodes[0].childNodes[1].innerHTML !== "") {
          element.childNodes[0].childNodes[0].innerHTML = "";
          element.childNodes[0].childNodes[1].innerHTML = "";
        }
        element.childNodes[0].style = "background-color: #cdddf4";
      }
    });
    this.setState({ submit: false, score: 0 });
  };

  /**
   * Intermediary function that to reset the non-active group colors
   */
  resetGroupColor = () => {
    if (!this.state.s) this.groupReset(groups.s);
    if (!this.state.p) this.groupReset(groups.p);
    if (!this.state.d) this.groupReset(groups.d);
    if (!this.state.f) this.groupReset(groups.f);

    if (!this.state.activeGroups[0]) this.groupReset(groups.s);
    if (!this.state.activeGroups[1]) this.groupReset(groups.p);
    if (!this.state.activeGroups[2]) this.groupReset(groups.d);
    if (!this.state.activeGroups[3]) this.groupReset(groups.f);
  };

  /**
   * This function changes the periodic table back to the original state
   */
  resetHandler = () => {
    let tableNode = document.getElementById("table");
    let children = tableNode.childNodes;

    children.forEach(element => {
      if (element.childNodes[0].childNodes[1].innerHTML !== "") {
        element.childNodes[0].childNodes[0].innerHTML = "";
        element.childNodes[0].childNodes[1].innerHTML = "";
      }
      // Clear the color change in wrong locations
      element.childNodes[0].style = "background-color: #8eb1e7";
    });

    this.resetGroupColor();
    this.setState({ submit: false, score: 0 });
  };

  /**
   * This function changes the state of the group or hints based on the checkbox selected
   * @param {string} name -name of the checkbox that was clicked
   * Outcome:
   * 1. The state is updated
   * 2. The group is cleared
   */
  handleCheckboxChange = name => {
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

  /**
   * Returns a list to render the correct element boxes in the periodic table
   * @returns {Array} element numbers in the correct order based on table contruction
   */
  createDropList = () => {
    let dropElementList = [];

    /* The table follows a standard format therefore the elements 
       must be created in the correct order.
      1 to 57
      Lanthanoids split  72 to 89
      Actinoids split  104 to 119
      Lanthenoids  58 to 71 
      Actionoids   90 to 103 
    */
    let bounds = [1, 57, 72, 89, 104, 119, 58, 71, 90, 103];

    let active = createActiveElementsList(this.state.activeGroups, groups);

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
    let dropElementList = this.createDropList();
    return (
      <div className="wrapper">
        <header>
          <div className="header-info">
            <h1>The Periodic Table of Elements Game</h1>
            <p className="header-by-line">
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
              handleCheckboxChange={this.handleCheckboxChange}
              // activeGroups={[
              //   this.state.s,
              //   this.state.p,
              //   this.state.d,
              //   this.state.f
              // ]}
              activeGroups={this.state.activeGroups}
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
                handleCheckboxChange={this.handleCheckboxChange}
                // activeGroups={[
                //   this.state.s,
                //   this.state.p,
                //   this.state.d,
                //   this.state.f
                // ]}
                activeGroups={this.state.activeGroups}
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
