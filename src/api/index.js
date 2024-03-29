import moment from "moment";
import { datesFormatToSave, daysDifferenceCount, lastSaveDatePoint, GET, SAVE } from "@/constants";
import { calculateDatesDifference, getRandomItemsByIndexes, getRandomSetIndexes } from "@/services/helpers";

const getLocalData = source => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
  return fetch(`./data/${source}.json`, { headers })
    .then((res) => {
     return res.json();
    })
    .catch(e => {
      console.log(`Cannot open local data for reason: ${e}`);
      return {};
    })
};

const storageService = (operation, request, data) => {
  switch (operation) {
    case SAVE:
      localStorage.setItem(request, JSON.stringify(data));
      break;
    case GET:
      return JSON.parse(localStorage.getItem(request))
    default:
      break;
  }
}

const apiService = async (req) => {
  const lastSavePoint = localStorage.getItem(lastSaveDatePoint);
  if (!lastSavePoint) {
    storageService(SAVE, lastSaveDatePoint, moment().format(datesFormatToSave));
    const data = await getLocalData(req);
    storageService(SAVE, req, data);
    return data;
  }
  const dateDiff = calculateDatesDifference(lastSavePoint);
  if (dateDiff < daysDifferenceCount) {
    return storageService(GET, req);
  } else {
    const data = await getLocalData(req);
    storageService(SAVE, req, data);
    return data;
  }
};

const getRandomSuit = async ({ discipline, quantity }) => {
  const result = {};
  const disciplineData = await apiService('javascript')
  for await (const item of discipline) {
    const indexesSet = getRandomSetIndexes(0, disciplineData[item].length, quantity);
    result[item] = getRandomItemsByIndexes(disciplineData[item], indexesSet);
  }
  return result;
}

export {
  apiService,
  getRandomSuit
}
