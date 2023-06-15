import React, { Component } from "react";
import ItemShoe from "./ItemShoe";
import { connect } from "react-redux";

class ListShoe extends Component {
  renderListShoe = () => {
    return this.props.listShoe.map((item) => {
      return <ItemShoe key={item.id} data={item} />;
    });
  };

  render() {
    return (
      <div className="row col-6 gap-1 justify-content-center">
        {this.renderListShoe()}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    listShoe: state.shoeReducer.shoeArr,
  };
};

export default connect(mapStateToProps)(ListShoe);
