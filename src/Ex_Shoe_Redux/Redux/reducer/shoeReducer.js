import { shoeArr } from "../../dataShoe";
import {
  BUY_SHOE,
  CHANGE_QUANTITY,
  DELETE,
  VIEW_DETAIL,
} from "../constant/shoeConstant";

let initialState = {
  shoeArr: shoeArr,
  detailShoe: shoeArr[0],
  cart: [],
};

export const shoeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case VIEW_DETAIL: {
      // payload: chứa object shoe
      state.detailShoe = payload;
      return { ...state };
    }

    case DELETE: {
      // payload: chứa idShoe
      let cloneCart = state.cart.filter((item) => {
        return item.id !== payload;
      });
      return { ...state, cart: cloneCart };
    }

    case BUY_SHOE: {
      // payload là object shoe
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => item.id == payload.id);
      if (index == -1) {
        let newShoe = { ...payload, quantity: 1 };
        cloneCart.push(newShoe);
      } else {
        cloneCart[index].quantity = cloneCart[index].quantity + 1;
      }
      return { ...state, cart: cloneCart };
    }

    case CHANGE_QUANTITY: {
      // payload là {shoe, option}
      let { shoe, option } = payload;
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => item.id === shoe);
      cloneCart[index].quantity = cloneCart[index].quantity + option;
      if (cloneCart[index].quantity == 0) {
        cloneCart.splice(index, 1);
      }
      return { ...state, cart: cloneCart };
    }
    default:
      return state;
  }
};
