import ColorComponent from "../component/color-component";
import {renderElement} from "../utils/render";

export default class ColorController {
  constructor(container, colorsModel, store) {
    this._container = container;
    this._colorsModel = colorsModel;
    this._store = store;
    this._colorComponent = null;
    this._columnVisibility = store.getColumnVisibility();
  }

  render() {
    this._colorComponent = new ColorComponent(this._colorsModel.getColors(), this._columnVisibility);
    renderElement(this._container, this._colorComponent);

    this._colorComponent.setResetHandler((evt) => {
      evt.preventDefault();
      Object.keys(this._columnVisibility).forEach((it) => {
        this._columnVisibility[it] = true;
      });
      this._store.setColumnVisibility(this._columnVisibility);
      this._colorComponent.rerender();
    })

    this._colorComponent.setHideIdColumnHandler((evt) => {
      evt.preventDefault();
      if (!evt.target.checked) {
        return;
      }
      this._columnVisibility.id = false;
      this._store.setColumnVisibility(this._columnVisibility);
      this._colorComponent.rerender();
    })

    this._colorComponent.setHideIdColumnHandler((evt) => {
      evt.preventDefault();
      if (!evt.target.checked) {
        return;
      }
      this._columnVisibility.id = false;
      this._store.setColumnVisibility(this._columnVisibility);
      this._colorComponent.rerender();
    })

    this._colorComponent.setHideNameColumnHandler((evt) => {
      evt.preventDefault();
      if (!evt.target.checked) {
        return;
      }
      this._columnVisibility.name = false;
      this._store.setColumnVisibility(this._columnVisibility);
      this._colorComponent.rerender();
    })

    this._colorComponent.setHideYearColumnHandler((evt) => {
      evt.preventDefault();
      if (!evt.target.checked) {
        return;
      }
      this._columnVisibility.year = false;
      this._store.setColumnVisibility(this._columnVisibility);
      this._colorComponent.rerender();
    })

    this._colorComponent.setHideColorColumnHandler((evt) => {
      evt.preventDefault();
      if (!evt.target.checked) {
        return;
      }
      this._columnVisibility.color = false;
      this._store.setColumnVisibility(this._columnVisibility);
      this._colorComponent.rerender();
    })

    this._colorComponent.setHidePantoneColumnHandler((evt) => {
      evt.preventDefault();
      if (!evt.target.checked) {
        return;
      }
      this._columnVisibility.pantone = false;
      this._store.setColumnVisibility(this._columnVisibility);
      this._colorComponent.rerender();
    })
  }
}
