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
              checked={this.props.activeGroups[0]}
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
              checked={this.props.activeGroups[1]}
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
              checked={this.props.activeGroups[2]}
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
              checked={this.props.activeGroups[3]}
              className="form-check-input"
            />
            F Groups
          </label>
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
