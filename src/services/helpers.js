import moment from "moment";
import { navLinkTypes } from "../constants/configs";

const defineNavLinkIconName = (linkSrc) => {
  const elem = navLinkTypes.find(el => linkSrc.indexOf(el.path) !== -1);
  return elem ? elem.icon : '';
};

const calculateDatesDifference = datePoint => {
  const moment1 = moment(datePoint);
  const moment2 = moment();
  return Math.abs(moment1.diff(moment2, 'days'));
};

export {
  defineNavLinkIconName,
  calculateDatesDifference,
};
