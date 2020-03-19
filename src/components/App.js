import React, { Component, Fragment } from "react";
import { elements } from "./_data";
import DropElement from "./DropElement";
import ModeForm from "./ModeForm";
import ElementPool from "./ElementPool";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

document.title = "The Periodic Table of Elements";

class App extends Component {
  state = {
    showInfo: false,
    element: {}
  };

  showInfo = num => {
    this.setState({ showInfo: true, element: elements[num] });
  };

  closeInfo = () => {
    this.setState({ showInfo: false });
  };

  render() {
    let {
      name,
      summary,
      symbol,
      category,
      number,
      source,
      appearance,
      atomic_mass,
      molar_heat,
      density,
      melt,
      boil
    } = this.state.element;

    return (
      <div className="wrapper">
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

        <ModeForm />

        <DndProvider backend={Backend}>
          <div id="table">
            <DropElement showInfo={this.showInfo} num="1" />
            <DropElement showInfo={this.showInfo} num="2" />
            <DropElement showInfo={this.showInfo} num="3" />
            <DropElement showInfo={this.showInfo} num="4" />
            {/* Information Table */}
            {this.state.showInfo ? (
              <Fragment>
                <div id="element-box" className={`${category}`}>
                  <div className="number">{number}</div>
                  <div className="symbol">{symbol}</div>
                  <div className="element-name">{name}</div>
                </div>
                <div id="information">
                  <div
                    onClick={this.closeInfo}
                    className="close-button"
                    title="Close Info"
                  >
                    Close [&times;]
                  </div>
                  <div>
                    <h1 className="big_title">{name}</h1>
                    <span className={`cat_name ${category}`}>{category}</span>
                    {appearance ? (
                      <div className="appearance">
                        <strong>Appearance:</strong> {appearance}
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="atom_info">
                      <span>Atomic Mass: {atomic_mass} | </span>
                      <span>Density: {density}</span>
                      {molar_heat ? (
                        <span> | Molar Heat: {molar_heat}</span>
                      ) : (
                        ""
                      )}
                      {melt ? <span> | Melt: {melt}K</span> : ""}
                      {boil ? <span> | Boil: {boil}K</span> : ""}
                    </div>
                    <div>
                      {summary} ...{" "}
                      <a target="noopener noreferrer" href={source}>
                        Source
                      </a>
                    </div>
                  </div>
                </div>
              </Fragment>
            ) : (
              ""
            )}
            <DropElement showInfo={this.showInfo} num="5" />
            <DropElement showInfo={this.showInfo} num="6" />
            <DropElement showInfo={this.showInfo} num="7" />
            <DropElement showInfo={this.showInfo} num="8" />
            <DropElement showInfo={this.showInfo} num="9" />
            <DropElement showInfo={this.showInfo} num="10" />
            <DropElement showInfo={this.showInfo} num="11" />
            <DropElement showInfo={this.showInfo} num="12" />
            <DropElement showInfo={this.showInfo} num="13" />
            <DropElement showInfo={this.showInfo} num="14" />
            <DropElement showInfo={this.showInfo} num="15" />
            <DropElement showInfo={this.showInfo} num="16" />
            <DropElement showInfo={this.showInfo} num="17" />
            <DropElement showInfo={this.showInfo} num="18" />
            <DropElement showInfo={this.showInfo} num="19" />
            <DropElement showInfo={this.showInfo} num="20" />
            <DropElement showInfo={this.showInfo} num="21" />
            <DropElement showInfo={this.showInfo} num="22" />
            <DropElement showInfo={this.showInfo} num="23" />
            <DropElement showInfo={this.showInfo} num="24" />
            <DropElement showInfo={this.showInfo} num="25" />
            <DropElement showInfo={this.showInfo} num="26" />
            <DropElement showInfo={this.showInfo} num="27" />
            <DropElement showInfo={this.showInfo} num="28" />
            <DropElement showInfo={this.showInfo} num="29" />
            <DropElement showInfo={this.showInfo} num="30" />
            <DropElement showInfo={this.showInfo} num="31" />
            <DropElement showInfo={this.showInfo} num="32" />
            <DropElement showInfo={this.showInfo} num="33" />
            <DropElement showInfo={this.showInfo} num="34" />
            <DropElement showInfo={this.showInfo} num="35" />
            <DropElement showInfo={this.showInfo} num="36" />
            <DropElement showInfo={this.showInfo} num="37" />
            <DropElement showInfo={this.showInfo} num="38" />
            <DropElement showInfo={this.showInfo} num="39" />
            <DropElement showInfo={this.showInfo} num="40" />
            <DropElement showInfo={this.showInfo} num="41" />
            <DropElement showInfo={this.showInfo} num="42" />
            <DropElement showInfo={this.showInfo} num="43" />
            <DropElement showInfo={this.showInfo} num="44" />
            <DropElement showInfo={this.showInfo} num="45" />
            <DropElement showInfo={this.showInfo} num="46" />
            <DropElement showInfo={this.showInfo} num="47" />
            <DropElement showInfo={this.showInfo} num="48" />
            <DropElement showInfo={this.showInfo} num="49" />
            <DropElement showInfo={this.showInfo} num="50" />
            <DropElement showInfo={this.showInfo} num="51" />
            <DropElement showInfo={this.showInfo} num="52" />
            <DropElement showInfo={this.showInfo} num="53" />
            <DropElement showInfo={this.showInfo} num="54" />
            <DropElement showInfo={this.showInfo} num="55" />
            <DropElement showInfo={this.showInfo} num="56" />
            <DropElement showInfo={this.showInfo} num="57" />

            {/* Lanthanoids split */}
            <DropElement showInfo={this.showInfo} num="72" />
            <DropElement showInfo={this.showInfo} num="73" />
            <DropElement showInfo={this.showInfo} num="74" />
            <DropElement showInfo={this.showInfo} num="75" />
            <DropElement showInfo={this.showInfo} num="76" />
            <DropElement showInfo={this.showInfo} num="77" />
            <DropElement showInfo={this.showInfo} num="78" />
            <DropElement showInfo={this.showInfo} num="79" />
            <DropElement showInfo={this.showInfo} num="80" />
            <DropElement showInfo={this.showInfo} num="81" />
            <DropElement showInfo={this.showInfo} num="82" />
            <DropElement showInfo={this.showInfo} num="83" />
            <DropElement showInfo={this.showInfo} num="84" />
            <DropElement showInfo={this.showInfo} num="85" />
            <DropElement showInfo={this.showInfo} num="86" />
            <DropElement showInfo={this.showInfo} num="87" />
            <DropElement showInfo={this.showInfo} num="88" />
            <DropElement showInfo={this.showInfo} num="89" />
            {/* Actinoids split */}
            <DropElement showInfo={this.showInfo} num="104" />
            <DropElement showInfo={this.showInfo} num="105" />
            <DropElement showInfo={this.showInfo} num="106" />
            <DropElement showInfo={this.showInfo} num="107" />
            <DropElement showInfo={this.showInfo} num="108" />
            <DropElement showInfo={this.showInfo} num="109" />
            <DropElement showInfo={this.showInfo} num="110" />
            <DropElement showInfo={this.showInfo} num="111" />
            <DropElement showInfo={this.showInfo} num="112" />
            <DropElement showInfo={this.showInfo} num="113" />
            <DropElement showInfo={this.showInfo} num="114" />
            <DropElement showInfo={this.showInfo} num="115" />
            <DropElement showInfo={this.showInfo} num="116" />
            <DropElement showInfo={this.showInfo} num="117" />
            <DropElement showInfo={this.showInfo} num="118" />
            <DropElement showInfo={this.showInfo} num="119" />
            {/* Lanthenoids */}
            <DropElement showInfo={this.showInfo} num="58" />
            <DropElement showInfo={this.showInfo} num="59" />
            <DropElement showInfo={this.showInfo} num="60" />
            <DropElement showInfo={this.showInfo} num="61" />
            <DropElement showInfo={this.showInfo} num="62" />
            <DropElement showInfo={this.showInfo} num="63" />
            <DropElement showInfo={this.showInfo} num="64" />
            <DropElement showInfo={this.showInfo} num="65" />
            <DropElement showInfo={this.showInfo} num="66" />
            <DropElement showInfo={this.showInfo} num="67" />
            <DropElement showInfo={this.showInfo} num="68" />
            <DropElement showInfo={this.showInfo} num="69" />
            <DropElement showInfo={this.showInfo} num="70" />
            <DropElement showInfo={this.showInfo} num="71" />
            {/* Actionoids */}
            <DropElement showInfo={this.showInfo} num="90" />
            <DropElement showInfo={this.showInfo} num="91" />
            <DropElement showInfo={this.showInfo} num="92" />
            <DropElement showInfo={this.showInfo} num="93" />
            <DropElement showInfo={this.showInfo} num="94" />
            <DropElement showInfo={this.showInfo} num="95" />
            <DropElement showInfo={this.showInfo} num="96" />
            <DropElement showInfo={this.showInfo} num="97" />
            <DropElement showInfo={this.showInfo} num="98" />
            <DropElement showInfo={this.showInfo} num="99" />
            <DropElement showInfo={this.showInfo} num="100" />
            <DropElement showInfo={this.showInfo} num="101" />
            <DropElement showInfo={this.showInfo} num="102" />
            <DropElement showInfo={this.showInfo} num="103" />
          </div>
          <ElementPool />
        </DndProvider>
      </div>
    );
  }
}

export default App;
