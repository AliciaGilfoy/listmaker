import { generateId } from "../utils.js";




export default class List {
  constructor(data) {
    this.listName = data.listName
    this.listItems = data.listItems || []
    this.id = data.id || generateId()
  }

  get ListItems() {
    let template = ""
    this.listItems.forEach(item => {
      template += item.template(this.id)
    })
    return template
  }


  get Template() {
    return `
    <div class="col-12 col-md-3 bg-dark list">
    <h5 class="my-2"><u>${this.listName}</u></h5>
    <button type="button" class="close-button text-danger" onclick="app.listController.deleteList('${this.id}')"><i class="fas fa-trash-alt"></i></button>
    <div id="listItem">
    ${this.ListItems}
    </div>
    <form class="" onsubmit="app.listController.newListItem(event, '${this.id}')" id="list-item-form">
      <div class="form-group new-list-item-form">
        <input type="text" class="form-control" id="listItem" placeholder="List some stuff here...">
        <button type="submit" class="btn btn-success ml-1">Add</button>
      </div>
    </form>
  </div>

`


  }

  //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}
