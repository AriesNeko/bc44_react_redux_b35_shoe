import React, { Component } from "react";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";
import Cart from "./Cart";

export default class Ex_Shoe_Redux extends Component {
  render() {
    return (
      <div className="m-3">
        <div className="bg-light p-3 rounded">
          <div className="row">
            <Cart />
            <ListShoe />
          </div>
        </div>
        <br />
        <DetailShoe />
      </div>
    );
  }
}
