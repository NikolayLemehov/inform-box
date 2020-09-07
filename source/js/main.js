import {polyfills} from './utils/polyfills';
import API from "./api";

polyfills();
const AUTHORIZATION = `Basic 6PZAz5uh8iB4RIAL336X`;
const END_POINT = `https://reqres.in/api/unknown?per_page=12`;
const api = new API(END_POINT, AUTHORIZATION);
api.getPoints().then((eventAdapterModels) => {
  console.log(`main`, eventAdapterModels);
  return eventAdapterModels;
});
