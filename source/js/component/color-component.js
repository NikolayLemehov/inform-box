import AbstractComponent from "./abstract-component";
import {columnVisibility} from "../utils/variables";

const createColorTemplate = (colors) => colors.map((it) => {
  return (
    `<tr>
      ${columnVisibility.id ? `<td class="table__id">${it.id}</td>` : ``}
      ${columnVisibility.name ? `<td class="table__name">${it.name}</td>` : ``}
      ${columnVisibility.year ? `<td class="table__year">${it.year}</td>` : ``}
      ${columnVisibility.color ? `<td class="table__color">${it.color}</td>` : ``}
      ${columnVisibility.pantone ? `<td class="table__pantone">${it.pantoneValue}</td>` : ``}
    </tr>`
  );
}).join(``);

const createColorsTemplate = (colors) => {
  return (
    `<section class="color-section">
      <h1>Pantone colors</h1>
      <button class="color-section__btn-reset" type="button">Reset</button>
      <table class="table">
        <tr>
          ${columnVisibility.id ? `<th class="table__id">ID</th>` : ``}
          ${columnVisibility.name ? `<th class="table__name">Name</th>` : ``}
          ${columnVisibility.year ? `<th class="table__year">Year</th>` : ``}
          ${columnVisibility.color ? `<th class="table__color">Color</th>` : ``}
          ${columnVisibility.pantone ? `<th class="table__pantone">Pantone value</th>` : ``}
        </tr>
        ${createColorTemplate(colors)}
      </table>
    </section>`
  );
};

export default class ColorComponent extends AbstractComponent {
  constructor(colors) {
    super();
    this._colors = colors;
    this._resetHandler = null;
  }

  getTemplate() {
    return createColorsTemplate(this._colors);
  }

  recoveryListeners() {
    this.setResetHandler(this._resetHandler);
  }

  setResetHandler(handler) {
    this.getElement().querySelector(`.color-section__btn-reset`).addEventListener(`click`, handler);
    this._resetHandler = handler;
  }
}
