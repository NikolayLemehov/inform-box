import {polyfills} from './utils/polyfills';
import API from "./api/api";
import Store from "./api/store";
import ColorsModel from "./models/colors-model";
import ColorController from "./controllers/color-controller";

polyfills();
const STORE_PREFIX = `inform-box-localstorage`;
const STORE_VER = `v1`;
const STORE_NAME = `${STORE_PREFIX}-${STORE_VER}`;

const AUTHORIZATION = `Basic 6PZAz5uh8iB4RIAL336X`;
const END_POINT = `https://reqres.in/api/unknown?per_page=12`;

const api = new API(END_POINT, AUTHORIZATION);
const store = new Store(STORE_NAME, window.localStorage);
const colorContainer = document.querySelector(`.js-include-color`);
const colorsModel = new ColorsModel();
const colorController = new ColorController(colorContainer, colorsModel, store);

api.getColors().then((colorAdapterModels) => {
  colorsModel.setColors(colorAdapterModels);
  colorController.render();
});
