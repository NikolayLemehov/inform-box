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
    TEXT_ALIGN: true,
  },
  name: {
    NAME: `name`,
    TEXT: `Name`,
    TEXT_ALIGN: false,
  },
  year: {
    NAME: `year`,
    TEXT: `Year`,
    TEXT_ALIGN: true,
  },
  color: {
    NAME: `color`,
    TEXT: `Color`,
    TEXT_ALIGN: false,
  },
  pantone: {
    NAME: `pantone`,
    TEXT: `Pantone value`,
    TEXT_ALIGN: false,
  },
}

const storeId = {
  COLUMN_VISIBILITY: `column_visibility`,
};

export {columnVisibility, storeId, column};
