import { VIEW_DETAIL } from "../constant/shoeConstant";

// action creator
export let viewDetailAction = (shoe) => {
  return {
    type: VIEW_DETAIL,
    payload: shoe,
  };
};
