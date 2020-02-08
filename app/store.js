import List from "./Models/List.js";
import Item from "./Models/Items.js";

let _state = {
  /** @type {List[]} */
  lists: [],
  /** @type {Item []} */
};

//NOTE You should not need to change the code from this point down

//NOTE this method will get the lists from local storage at the start of the app
function _loadState() {
  try {
    let data = JSON.parse(localStorage.getItem("ListMaker"))
    _state.lists = data.lists.map(l => {
      let list = new List(l)
      list.listItems = list.listItems.map(i => new Item(i))
      return list
    })
  } catch (e) {

  }
}



_loadState();

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  //NOTE call saveState everytime you change the state in any way
  saveState() {
    localStorage.setItem("ListMaker", JSON.stringify(_state));
  }
}

const store = new Store();
export default store;
