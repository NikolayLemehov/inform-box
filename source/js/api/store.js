// import {StoreId} from './provider';
import {storeId} from "../utils/variables";
import {columnVisibility} from "../utils/variables";

export default class Store {
  constructor(storeKey, localStorage) {
    this._storeKey = storeKey;
    this._localStorage = localStorage;
    this._parsedStore = {
      [storeId.COLUMN_VISIBILITY]: {},
    };
  }

  getColumnVisibility() {
    try {
      this._parsedStore[storeId.COLUMN_VISIBILITY] = JSON.parse(this._localStorage.getItem(this._storeKey))[storeId.COLUMN_VISIBILITY];
      console.log(`try`)
      if (!this._parsedStore[storeId.COLUMN_VISIBILITY].isSaved) {
        columnVisibility.isSaved = true;
        this.setColumnVisibility(columnVisibility);
      }
      return this._parsedStore[storeId.COLUMN_VISIBILITY];
    } catch (err) {
      console.log(`error`)
      columnVisibility.isSaved = true;
      this.setColumnVisibility(columnVisibility);
      return columnVisibility;
    }
  }

  setColumnVisibility(columnVisibility) {
    this._parsedStore[storeId.COLUMN_VISIBILITY] = columnVisibility;
    this._copyToLocalStore();
  }

  _copyToLocalStore() {
    this._localStorage.setItem(this._storeKey, JSON.stringify(Object.assign({}, this._parsedStore)));
  }
}
