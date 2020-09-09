const columnVisibility = {
  id: true,
  name: true,
  year: true,
  color: true,
  pantone: true,
  isSaved: false,
};

const column = {
  id: {
    NAME: `id`,
    TEXT: `ID`,
  },
  name: {
    NAME: `name`,
    TEXT: `Name`,
  },
  year: {
    NAME: `year`,
    TEXT: `Year`,
  },
  color: {
    NAME: `color`,
    TEXT: `Color`,
  },
  pantone: {
    NAME: `pantone`,
    TEXT: `Pantone value`,
  },
}

const storeId = {
  COLUMN_VISIBILITY: `column_visibility`,
};

export {columnVisibility, storeId, column};
