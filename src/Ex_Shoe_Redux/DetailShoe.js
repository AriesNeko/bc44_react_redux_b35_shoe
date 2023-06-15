import React, { Component } from "react";
import { connect } from "react-redux";

class DetailShoe extends Component {
  render() {
    let { name, price, quantity, shortDescription, image } = this.props.detail;
    return (
      <div className="m-2">
        <h4>SHOE DETAIL</h4>
        <table class="table table-light table-striped table-bordered">
          <thead className="text-center">
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Image</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">{name}</td>
              <td>{price}</td>
              <td>{quantity}</td>
              <td>
                <img style={{ width: 50 }} src={image} alt="" />
              </td>
              <td>{shortDescription}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    detail: state.shoeReducer.detailShoe,
  };
};

export default connect(mapStateToProps)(DetailShoe);
