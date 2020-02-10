import List from "../Models/List.js";
import _store from "../store.js";
import Item from "../Models/Items.js";


//Public
class ListService {
  deleteItem(listId, itemId) {
    let windowMessage = window.confirm("Are you sure you want to delete this item?")
    if (windowMessage === true) {
      let hereList = _store.State.lists.find(list => list.id === listId)
      let item = hereList.listItems.findIndex(item => item.id === itemId)
      hereList.listItems.splice(item, 1)
      _store.saveState()
    }
  }
  deleteList(id) {
    let windowMessage = window.confirm("Are you sure you want to delete this list?")
    if (windowMessage == true) {
      let lists = _store.State.lists.filter(list => list.id !== id)
      _store.State.lists = lists
      _store.saveState()
    }
  }



  newListItem(newItem, listId) {
    newItem = new Item(newItem)
    let list = _store.State.lists.find(list => list.id === listId)
    list.listItems.push(newItem)
    _store.saveState()
  }
  addList(newList) {
    newList = new List(newList)
    _store.State.lists.push(newList)
    _store.saveState()
  }
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const SERVICE = new ListService();
export default SERVICE;
