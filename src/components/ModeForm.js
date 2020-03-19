import React, { Component } from "react";
class ModeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      realTimeChecking: false,
      sValue: false,
      pValue: false,
      dValue: false,
      fValue: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const prevState = this.state;
    console.log("event ", event);
    console.log("event.target.name ", event.target.name);
    switch (event.target.name) {
      case "sValue":
        this.setState(prevState => ({ sValue: !prevState.sValue }));
        break;
      case "pValue":
        this.setState(prevState => ({ pValue: !prevState.pValue }));
        break;
      case "dValue":
        this.setState(prevState => ({ dValue: !prevState.dValue }));
        break;
      case "fValue":
        this.setState(prevState => ({ fValue: !prevState.fValue }));
        break;
      case "realTimeChecking":
        this.setState(prevState => ({
          realTimeChecking: !prevState.realTimeChecking
        }));
        break;

      default:
        break;
    }
    //this.setState({ value: false });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("submit clicked ");
  }

  render() {
    return (
      <form>
        <div className="form-check">
          <label>
            <input
              type="checkbox"
              name="realTimeChecking"
              value="Real Time Checking Value String"
              onChange={this.handleChange}
              checked={this.state.realTimeChecking}
              className="form-check-input"
            />
            Real Time Checking
          </label>
        </div>

        <div className="form-check">
          <label>
            <input
              type="checkbox"
              name="sValue"
              value="S_groups_Value_String"
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
              name="pValue"
              value="P_groups_Value_String"
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
              name="dValue"
              value="D_groups_Value_String"
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
              name="fValue"
              value="F_groups_Value_String"
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
            type="submit"
            onSubmit={this.handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default ModeForm;
