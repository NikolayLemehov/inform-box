import {polyfills} from './utils/polyfills';
import API from "./api";
import ColorsModel from "./models/colors-model";
import ColorController from "./controllers/color-controller";

polyfills();
const mainEl = document.querySelector(`main`);
const AUTHORIZATION = `Basic 6PZAz5uh8iB4RIAL336X`;
const END_POINT = `https://reqres.in/api/unknown?per_page=12`;
const api = new API(END_POINT, AUTHORIZATION);
const colorsModel = new ColorsModel();
const colorController = new ColorController(mainEl, colorsModel);

api.getColors().then((colorAdapterModels) => {
  console.log(`main`, colorAdapterModels);
  colorsModel.setColors(colorAdapterModels);
  colorController.render();
});
