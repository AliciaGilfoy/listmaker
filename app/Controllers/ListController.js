import _listService from "../Services/ListService.js";
import _store from "../store.js"

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let lists = _store.State.lists
  let listElem = document.getElementById("listDisplay")
  let template = ""

  lists.forEach(list => {
    template += list.Template
  })

  listElem.innerHTML = template
}



//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  addList(event) {
    event.preventDefault();
    let formData = event.target;
    let newList = {
      listName: formData.listName.value
    }
    _listService.addList(newList)
    formData.reset()
    _drawLists()
  }

  newListItem(event, ListId) {
    event.preventDefault();
    let formData = event.target;
    let newItem = {
      itemName: formData.listItem.value
    }
    _listService.newListItem(newItem, ListId)
    _drawLists()
  }

  completeItem(itemName, listId, itemId) {
    _listService.completeItem(itemName, listId, itemId)
    _drawCompletedLists()
    _drawLists()
  }



  deleteList(id) {
    _listService.deleteList(id)
    _drawLists()
  }

  deleteItem(listId, itemId) {
    _listService.deleteItem(listId, itemId)
    _drawLists()
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
