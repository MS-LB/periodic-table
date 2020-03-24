import React, { Component } from "react";
// import { elements } from "./_data";
import DropElement from "./DropElement";
import ModeForm from "./ModeForm";
import ElementPool from "./ElementPool";
import { DndProvider } from "react-dnd";
// import Backend from "react-dnd-html5-backend";
import TouchBackend from "react-dnd-touch-backend";
import { groups } from "./groups";

document.title = "The Periodic Table of Elements";

class App extends Component {
  constructor(props) {
    super(props);
    this.optionHandler = this.optionHandler.bind(this);
  }

  state = {
    // showInfo: false,
    //element: {},
    s: true,
    p: true,
    d: true,
    f: true,
    hintsOn: true,
    reset: false,
    submit: false
  };

  // showInfo = num => {
  //   this.setState({ showInfo: true, element: elements[num] });
  // };

  // closeInfo = () => {
  //   this.setState({ showInfo: false });
  // };

  submitHandler = () => {
    // For each group that is active loop over them and check num vs symbol
    let tableNode = document.getElementById("table");
    console.log(tableNode);
  };

  resetHandler = () => {
    //Loop over each group and delete the name and symbol
    // delete and render elements again
  };

  optionHandler = name => {
    console.log("name ", name);
    console.log("name ", this.state);
    switch (name) {
      case "sGroup":
        this.setState(prevState => ({ s: !prevState.s }));
        break;
      case "pGroup":
        this.setState(prevState => ({ p: !prevState.p }));
        break;
      case "dGroup":
        this.setState(prevState => ({ d: !prevState.d }));
        break;
      case "fGroup":
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

  render() {
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
            />
          </section>
        </header>

        <section>
          {/* <DndProvider backend={Backend}> */}
          <DndProvider backend={TouchBackend} options={this.options}>
            <div id="table" className="main-group">
              <DropElement num="1" />
              <DropElement num="2" />
              <DropElement num="3" />
              <DropElement num="4" />
              <DropElement num="5" />
              <DropElement num="6" />
              <DropElement num="7" />
              <DropElement num="8" />
              <DropElement num="9" />
              <DropElement num="10" />
              <DropElement num="11" />
              <DropElement num="12" />
              <DropElement num="13" />
              <DropElement num="14" />
              <DropElement num="15" />
              <DropElement num="16" />
              <DropElement num="17" />
              <DropElement num="18" />
              <DropElement num="19" />
              <DropElement num="20" />
              <DropElement num="21" />
              <DropElement num="22" />
              <DropElement num="23" />
              <DropElement num="24" />
              <DropElement num="25" />
              <DropElement num="26" />
              <DropElement num="27" />
              <DropElement num="28" />
              <DropElement num="29" />
              <DropElement num="30" />
              <DropElement num="31" />
              <DropElement num="32" />
              <DropElement num="33" />
              <DropElement num="34" />
              <DropElement num="35" />
              <DropElement num="36" />
              <DropElement num="37" />
              <DropElement num="38" />
              <DropElement num="39" />
              <DropElement num="40" />
              <DropElement num="41" />
              <DropElement num="42" />
              <DropElement num="43" />
              <DropElement num="44" />
              <DropElement num="45" />
              <DropElement num="46" />
              <DropElement num="47" />
              <DropElement num="48" />
              <DropElement num="49" />
              <DropElement num="50" />
              <DropElement num="51" />
              <DropElement num="52" />
              <DropElement num="53" />
              <DropElement num="54" />
              <DropElement num="55" />
              <DropElement num="56" />
              <DropElement num="57" />

              {/* Lanthanoids split */}
              <DropElement num="72" />
              <DropElement num="73" />
              <DropElement num="74" />
              <DropElement num="75" />
              <DropElement num="76" />
              <DropElement num="77" />
              <DropElement num="78" />
              <DropElement num="79" />
              <DropElement num="80" />
              <DropElement num="81" />
              <DropElement num="82" />
              <DropElement num="83" />
              <DropElement num="84" />
              <DropElement num="85" />
              <DropElement num="86" />
              <DropElement num="87" />
              <DropElement num="88" />
              <DropElement num="89" />
              {/* Actinoids split */}
              <DropElement num="104" />
              <DropElement num="105" />
              <DropElement num="106" />
              <DropElement num="107" />
              <DropElement num="108" />
              <DropElement num="109" />
              <DropElement num="110" />
              <DropElement num="111" />
              <DropElement num="112" />
              <DropElement num="113" />
              <DropElement num="114" />
              <DropElement num="115" />
              <DropElement num="116" />
              <DropElement num="117" />
              <DropElement num="118" />
              <DropElement num="119" />
              {/* Lanthenoids */}
              <DropElement num="58" />
              <DropElement num="59" />
              <DropElement num="60" />
              <DropElement num="61" />
              <DropElement num="62" />
              <DropElement num="63" />
              <DropElement num="64" />
              <DropElement num="65" />
              <DropElement num="66" />
              <DropElement num="67" />
              <DropElement num="68" />
              <DropElement num="69" />
              <DropElement num="70" />
              <DropElement num="71" />
              {/* Actionoids */}
              <DropElement num="90" />
              <DropElement num="91" />
              <DropElement num="92" />
              <DropElement num="93" />
              <DropElement num="94" />
              <DropElement num="95" />
              <DropElement num="96" />
              <DropElement num="97" />
              <DropElement num="98" />
              <DropElement num="99" />
              <DropElement num="100" />
              <DropElement num="101" />
              <DropElement num="102" />
              <DropElement num="103" />
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
