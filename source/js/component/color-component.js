import AbstractComponent from "./abstract-component";
import {columnVisibility} from "../utils/variables";

const createColorTemplate = (colors) => colors.map((it) => {
  return (
    `<tr>
      ${columnVisibility.ID ? `<td class="table__id">${it.id}</td>` : ``}
      ${columnVisibility.NAME ? `<td class="table__name">${it.name}</td>` : ``}
      ${columnVisibility.YEAR ? `<td class="table__year">${it.year}</td>` : ``}
      ${columnVisibility.COLOR ? `<td class="table__color">${it.color}</td>` : ``}
      ${columnVisibility.PANTONE ? `<td class="table__pantone">${it.pantoneValue}</td>` : ``}
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
          ${columnVisibility.ID ? `<th class="table__id">ID</th>` : ``}
          ${columnVisibility.NAME ? `<th class="table__name">Name</th>` : ``}
          ${columnVisibility.YEAR ? `<th class="table__year">Year</th>` : ``}
          ${columnVisibility.COLOR ? `<th class="table__color">Color</th>` : ``}
          ${columnVisibility.PANTONE ? `<th class="table__pantone">Pantone value</th>` : ``}
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
  }

  getTemplate() {
    return createColorsTemplate(this._colors);
  }
}
