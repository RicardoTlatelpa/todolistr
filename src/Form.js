import React, { Component } from "react";
import "./Form.css";
import uuid from "uuid/v4";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      important: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  handleCheck(event) {
    this.setState({ [event.target.name]: !this.state.important });
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="checkbox"
          name="important"
          value={this.state.checkbox}
          onChange={this.handleCheck}
        />
        Important?
        <button className="Form-button">Click me! </button>
      </form>
    );
  }
}

export default Form;
