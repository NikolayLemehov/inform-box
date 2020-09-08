export default class ColorAdapterModel {
  constructor(endData) {
    this.id = endData[`id`];
    this.name = endData[`name`];
    this.year = endData[`year`];
    this.color = endData[`color`];
    this.pantoneValue = endData[`pantone_value`];
  }

  static parseColor(endData) {
    return new ColorAdapterModel(endData);
  }

  static parseColors(endData) {
    return endData.map(ColorAdapterModel.parseColor);
  }
}
