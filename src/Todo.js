import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdited: false,
      name: ""
    };
  }
  
  render() {
    let result;
    if (this.state.isEdited) {
      result = (
        <div>
          <form>
            <input type="text" />
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <button> Edit</button>
        </div>
      );
    }

    return result;
  }
}

export default Todo;
