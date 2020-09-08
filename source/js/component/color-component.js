import AbstractComponent from "./abstract-component";

const createColorTemplate = (colors) => colors.map((it) => {
  return (
    `<tr>
      <td class="table__id">${it.id}</td>
      <td class="table__name">${it.name}</td>
      <td class="table__year">${it.year}</td>
      <td class="table__color">${it.color}</td>
      <td class="table__pantone">${it.pantoneValue}</td>
    </tr>`
  );
}).join(``);

const createColorsTemplate = (colors) => {
  console.log(colors)
  return (
    `<table class="table">
      <tr>
        <th class="table__id">ID</th>
        <th class="table__name">Name</th>
        <th class="table__year">Year</th>
        <th class="table__color">Color</th>
        <th class="table__pantone">Pantone value</th>
      </tr>
      ${createColorTemplate(colors)}`
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
