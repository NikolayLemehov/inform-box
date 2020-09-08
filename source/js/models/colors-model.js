export default class ColorsModel {
  constructor() {
    this._colorAdapterModels = [];
  }

  setColors(colorAdapterModels) {
    this._colorAdapterModels = Array.from(colorAdapterModels);
  }

  getColors() {
    return this._colorAdapterModels.slice();
  }
}
