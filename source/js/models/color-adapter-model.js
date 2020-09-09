import {upperCaseFirst} from "../utils/utils";

export default class ColorAdapterModel {
  constructor(endData) {
    this.id = endData[`id`];
    this.name = upperCaseFirst(endData[`name`]);
    this.year = endData[`year`];
    this.color = endData[`color`];
    this.pantone = endData[`pantone_value`];
  }

  static parseColor(endData) {
    return new ColorAdapterModel(endData);
  }

  static parseColors(endData) {
    return endData.map(ColorAdapterModel.parseColor);
  }
}
