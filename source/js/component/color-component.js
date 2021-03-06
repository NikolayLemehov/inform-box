import AbstractComponent from "./abstract-component";
import {column} from "../utils/variables";

const createColorsTemplate = (colors, columnVisibility) => {
  const isAllColumnVisible = Object.entries(columnVisibility).every((it) => (it[1] === true || it[0] === `isSaved`));
  const createColorTemplate = (colors) => colors.map((color) => {
    return (
      `<tr>
        ${columnVisibility.id ? `<td class="table__id text-align-right">${color.id}</td>` : ``}
        ${columnVisibility.name ? `<td class="table__name">${color.name}</td>` : ``}
        ${columnVisibility.year ? `<td class="table__year text-align-right">${color.year}</td>` : ``}
        ${columnVisibility.color ?
          `<td class="table__color">
            <span class="table__color-example" style="background-color: ${color.color}"></span>
            <span class="table__color-text">${color.color}</span>
          </td>` : ``}
        ${columnVisibility.pantone ? `<td class="table__pantone">${color.pantone}</td>` : ``}
      </tr>`
    );
  }).join(``);

  return (
    `<section class="color-section">
      <h1>Pantone colors</h1>
      <button class="color-section__btn-reset btn-reset" type="button" ${isAllColumnVisible ? `disabled` : ``}>
        <svg width="20" height="20">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/sprite.svg#icon-refresh"></use>
        </svg>
        <span>Reset</span>
      </button>
      <table class="color-section__table table">
        <tr>
          ${Object.values(column).reduce((acc, it) => {
            acc += `${columnVisibility[it.NAME] ?
              `<th class="table__${it.NAME}${it.TEXT_ALIGN ? ' text-align-right' : ' text-align-left'}">
                <label class="">
                  <input type="checkbox" name="hide-${it.NAME}" checked>
                  <span>&nbsp;${it.TEXT}</span>
                </label>
              </th>` : ``}`
            return acc;
          }, ``)}
        </tr>
        ${createColorTemplate(colors)}
      </table>
    </section>`
  );
};

export default class ColorComponent extends AbstractComponent {
  constructor(colors, columnVisibility) {
    super();
    this._colors = colors;
    this._columnVisibility = columnVisibility;
    this._resetHandler = null;
    this._hideIdColumnHandler = null;
    this._hideNameColumnHandler = null;
    this._hideYearColumnHandler = null;
    this._hideColorColumnHandler = null;
    this._hidePantoneColumnHandler = null;
  }

  getTemplate() {
    return createColorsTemplate(this._colors, this._columnVisibility);
  }

  recoveryListeners() {
    this.setResetHandler(this._resetHandler);
    this.setHideIdColumnHandler(this._hideIdColumnHandler)
    this.setHideNameColumnHandler(this._hideNameColumnHandler)
    this.setHideYearColumnHandler(this._hideYearColumnHandler)
    this.setHideColorColumnHandler(this._hideColorColumnHandler)
    this.setHidePantoneColumnHandler(this._hidePantoneColumnHandler)
  }

  setResetHandler(handler) {
    const btn = this.getElement().querySelector(`.color-section__btn-reset`);
    btn.addEventListener(`click`, handler);
    btn.addEventListener(`mousedown`, () => {
      btn.addEventListener(`focus`, () => {
        btn.blur();
      });
    });
    this._resetHandler = handler;
  }

  setHideIdColumnHandler(handler) {
    const idInput = this.getElement().querySelector(`th.table__id input`);
    if (!idInput) {
      return;
    }
    idInput.addEventListener(`change`, handler);
    this._hideIdColumnHandler = handler;
  }

  setHideNameColumnHandler(handler) {
    const nameInput = this.getElement().querySelector(`th.table__name input`);
    if (!nameInput) {
      return;
    }
    nameInput.addEventListener(`change`, handler);
    this._hideNameColumnHandler = handler;
  }

  setHideYearColumnHandler(handler) {
    const yearInput = this.getElement().querySelector(`th.table__year input`);
    if (!yearInput) {
      return;
    }
    yearInput.addEventListener(`change`, handler);
    this._hideYearColumnHandler = handler;
  }

  setHideColorColumnHandler(handler) {
    const colorInput = this.getElement().querySelector(`th.table__color input`);
    if (!colorInput) {
      return;
    }
    colorInput.addEventListener(`change`, handler);
    this._hideColorColumnHandler = handler;
  }

  setHidePantoneColumnHandler(handler) {
    const pantoneInput = this.getElement().querySelector(`th.table__pantone input`);
    if (!pantoneInput) {
      return;
    }
    pantoneInput.addEventListener(`change`, handler);
    this._hidePantoneColumnHandler = handler;
  }
}
