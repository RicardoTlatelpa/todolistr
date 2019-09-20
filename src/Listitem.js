import React, { Component } from "react";
import "./Listitem.css";

class Listitem extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove(event) {
    this.props.remove(this.props.id);
  }

  render() {
    return (
      <React.Fragment>
        <li className={this.props.class}>
          {this.props.value}
          {this.props.value === undefined ? (
            ""
          ) : (
            <button onClick={this.handleRemove}> Remove</button>
          )}
        </li>
      </React.Fragment>
    );
  }
}
export default Listitem;
//{this.props.value === undefined ? null: <Todo/>}
