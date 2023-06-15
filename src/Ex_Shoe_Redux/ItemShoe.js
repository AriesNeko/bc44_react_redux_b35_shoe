import React, { Component } from "react";
import { connect } from "react-redux";
import { BUY_SHOE, VIEW_DETAIL } from "./Redux/constant/shoeConstant";
import { viewDetailAction } from "./Redux/action/shoeAction";

class ItemShoe extends Component {
  render() {
    let { data, handleView, handleAddCart } = this.props;
    let { image, name } = data;
    return (
      <div className="col-3 p-0">
        <div className="card text-left h-100 w-100">
          <img className="card-img-top" src={image} alt="shoe" />
          <div className="card-body text-center p-0">
            <h5 className="card-title">{name}</h5>
          </div>
          <button
            onClick={() => {
              handleView(data);
            }}
            className="btn btn-info"
          >
            View detail
          </button>
          <button
            onClick={() => {
              handleAddCart(data);
            }}
            className="btn btn-warning"
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleView: (shoe) => {
      dispatch(viewDetailAction(shoe));
    },
    handleAddCart: (shoe) => {
      let action = {
        type: BUY_SHOE,
        payload: shoe,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(ItemShoe);
