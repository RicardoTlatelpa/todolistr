import React, { Component } from "react";
import "./Form.css";
import uuid from "uuid/v4";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      important: false,
      veryImportant: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleVeryImportant = this.handleVeryImportant.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.name !== "") {
      this.props.addItem({ ...this.state, id: uuid() });
      this.setState({ name: "" });
    } else {
      console.log("Sike you woulda thought");
    }
    console.log(this.state);
  }
  handleVeryImportant(event) {
    this.setState({ [event.target.name]: !this.state.veryImportant });
  }
  handleCheck(event) {
    this.setState({ [event.target.name]: !this.state.important });
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="Form">
        <input
          className="Form-input-display"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          className="Form-input"
          type="checkbox"
          name="important"
          value={this.state.checkbox}
          onChange={this.handleCheck}
        />
        Important?
        <input
          className="Form-input"
          type="checkbox"
          name="veryImportant"
          value={this.state.veryImportant}
          onChange={this.handleVeryImportant}
        />
        Very Important(For 아름 Only)
        <button className="Form-button">Click me! </button>
      </form>
    );
  }
}

export default Form;
