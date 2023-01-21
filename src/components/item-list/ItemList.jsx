import React, { Component } from "react";
import Item from "../item";

export default class ItemList extends Component {
  render() {
    const { items } = this.props;
    return (
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <Item item={item}></Item>
            </li>
          );
        })}
      </ul>
    );
  }
}
