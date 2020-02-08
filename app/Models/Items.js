import { generateId } from "../utils.js";

export default class Item {
  constructor(data) {
    this.itemName = data.itemName
    this.id = data.id || generateId()
  }

  template(listId) {
    return `
    <div class="col-12 added-item">
    <button type="button" class="remove-item" onclick="app.listController.deleteItem('${listId}','${this.id}')"><i
    class="fas fa-times-circle"></i></button>
    <h6>${this.itemName}</h6>
    </div>
`}


}



