import { navLinkTypes } from "../constants";

const defineNavLinkIconName = (linkSrc) => {
  const elem = navLinkTypes.find(el => linkSrc.indexOf(el.path) !== -1);
  return elem ? elem.icon : '';
};

export {
  defineNavLinkIconName,
};