import React, { Component } from "react";
import Listitem from "./Listitem";
import Form from "./Form";

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{}]
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem(item) {
    this.setState(state => ({ list: [...state.list, item] }));
  }

  removeItem(id) {
    this.setState({ list: this.state.list.filter(i => i.id !== id) });
  }

  generateItems() {
    return (
      <ul>
        {this.state.list.map(item => (
          <Listitem
            key={item.id}
            id={item.id}
            value={item.name}
            importance={item.important}
            veryImportant={item.veryImportant}
            class={
              item.important
                ? "listitem-item"
                : item.veryImportant
                ? "listitem-vimportant"
                : "listitem-nonitem"
            }
            remove={this.removeItem}
          />
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h1> Things to do... </h1>

        {this.generateItems()}
        <Form addItem={this.addItem} />
      </div>
    );
  }
}

export default Todolist;
