import React, { Component } from "react";

class ModeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightHints: props.hintsOn,
      s: props.activeGroups[0],
      p: props.activeGroups[1],
      d: props.activeGroups[2],
      f: props.activeGroups[3],
      reset: props.reset,
      submit: props.submit
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
  }

  //Handlers are in parent component (App)
  handleChange(event) {
    this.props.optionHandler(event.target.name);
  }
  submitHandler() {
    this.props.submitHandler();
  }

  resetHandler() {
    console.log("Reset clicked ");
    // Loop over each group and delete the name and symbol
    // console.log(groups.s);
    // console.log(groups.p);
    // console.log(groups.d);
    // console.log(groups.f);
    this.props.resetHandler();
  }

  render() {
    return (
      <form>
        <div className="form-check">
          <label>
            <input
              type="checkbox"
              name="highlightHints"
              value="highlightHints"
              onChange={this.handleChange}
              checked={this.props.hintsOn}
              className="form-check-input"
            />
            Hints
            <span className="info-icon">
              &#9432;
              <span className="tooltiptext">
                Hints: Elements in incorrect locations will have red text
                <br />
                <br />
                Blocks: Enable or disable various sections of the periodic table
              </span>
            </span>
          </label>
        </div>

        <div className="form-check">
          <label>
            <input
              type="checkbox"
              name="sGroup"
              id="sGroupId"
              value="sGroup"
              onChange={this.handleChange}
              checked={this.props.activeGroups[0]}
              className="form-check-input"
            />
            S Block
          </label>
        </div>

        <div className="form-check">
          <label>
            <input
              type="checkbox"
              name="pGroup"
              id="pGroupId"
              value="pGroup"
              onChange={this.handleChange}
              checked={this.props.activeGroups[1]}
              className="form-check-input"
            />
            P Block
          </label>
        </div>

        <div className="form-check">
          <label>
            <input
              type="checkbox"
              name="dGroup"
              id="dGroupId"
              value="dGroup"
              onChange={this.handleChange}
              checked={this.props.activeGroups[2]}
              className="form-check-input"
            />
            D Block
          </label>
        </div>

        <div className="form-check">
          <label>
            <input
              type="checkbox"
              name="fGroup"
              id="fGroupId"
              value="fGroup"
              onChange={this.handleChange}
              checked={this.props.activeGroups[3]}
              className="form-check-input"
            />
            F Block
          </label>
        </div>

        <div>
          {this.props.submit ? (
            <div id="score-box">Score: {this.props.score}</div>
          ) : null}
        </div>

        <div className="form-group">
          <button
            className="btn btn-primary mt-2"
            type="button"
            onClick={this.submitHandler}
          >
            Submit
          </button>
          <button
            className="btn btn-primary mt-2"
            type="button"
            onClick={this.resetHandler}
          >
            Reset
          </button>
        </div>
      </form>
    );
  }
}

export default ModeForm;
