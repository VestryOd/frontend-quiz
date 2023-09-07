import moment from "moment";
import { navLinkTypes } from "@/constants/configs";

const defineNavLinkIconName = (linkSrc) => {
  const elem = navLinkTypes.find(el => linkSrc.indexOf(el.path) !== -1);
  return elem ? elem.icon : '';
};

const calculateDatesDifference = datePoint => {
  const moment1 = moment(datePoint);
  const moment2 = moment();
  return Math.abs(moment1.diff(moment2, 'days'));
};

const getRandomFromSet = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomSetIndexes = (min, max, count) => {
  const res = new Set();
  let counter = count;
  while (counter) {
    const random = getRandomFromSet(min, max);
    if (res.has(random)) break;
    res.add(random);
    counter--;
  }
  return Array.from(res.values());
}

const getRandomItemsByIndexes = (array, indexesArray) => {
  const res = [];
  indexesArray.forEach(el => {
    res.push(array[el]);
  })
  return res;
}

export {
  defineNavLinkIconName,
  calculateDatesDifference,
  getRandomFromSet,
  getRandomSetIndexes,
  getRandomItemsByIndexes
};
