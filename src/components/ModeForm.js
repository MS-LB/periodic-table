import React, { Component } from "react";
import { groups } from "./groups";

class ModeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightHints: true,
      sValue: true,
      pValue: true,
      dValue: true,
      fValue: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    switch (event.target.name) {
      case "sGroup":
        this.setState(prevState => ({ sValue: !prevState.sValue }));
        break;
      case "pGroup":
        this.setState(prevState => ({ pValue: !prevState.pValue }));
        break;
      case "dGroup":
        this.setState(prevState => ({ dValue: !prevState.dValue }));
        break;
      case "fGroup":
        this.setState(prevState => ({ fValue: !prevState.fValue }));
        break;
      case "highlightHints":
        this.setState(prevState => ({
          highlightHints: !prevState.highlightHints
        }));
        break;

      default:
        break;
    }
    //this.setState({ value: false });
  }

  handleSubmit() {
    console.log("Submit clicked ");
    // For each group that is active loop over them and check num vs symbol
  }

  handleReset() {
    console.log("Reset clicked ");
    // Loop over each group and delete the name and symbol
    console.log(groups.s);
    console.log(groups.p);
    console.log(groups.d);
    console.log(groups.f);
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
              checked={this.state.highlightHints}
              className="form-check-input"
            />
            Highlight Hints
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
              checked={this.state.sValue}
              className="form-check-input"
            />
            S Groups
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
              checked={this.state.pValue}
              className="form-check-input"
            />
            P groups
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
              checked={this.state.dValue}
              className="form-check-input"
            />
            D groups
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
              checked={this.state.fValue}
              className="form-check-input"
            />
            F Groups
          </label>
        </div>

        <div className="form-group">
          <button
            className="btn btn-primary mt-2"
            type="button"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
          <button
            className="btn btn-primary mt-2"
            type="button"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    );
  }
}

export default ModeForm;
