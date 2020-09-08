import ColorComponent from "../component/color-component";
import {renderElement} from "../utils/render";

export default class ColorController {
  constructor(container, colorsModel) {
    this._container = container;
    this._colorsModel = colorsModel;
    this._colorComponent = {};
  }

  render() {
    this._colorComponent = new ColorComponent(this._colorsModel.getColors());
    renderElement(this._container, this._colorComponent);
  }
}
