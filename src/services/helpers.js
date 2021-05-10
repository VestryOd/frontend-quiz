import { navLinkTypes } from "../constants";

const defineNavLinkIconName = (linkSrc) => {
  console.log('--SRC', linkSrc);
  const elem = navLinkTypes.find(el => linkSrc.indexOf(el.path) !== -1);
  console.log('--index', elem);
  return elem ? elem.icon : '';
};

export {
  defineNavLinkIconName,
};