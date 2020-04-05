import React, {Component} from 'react';
import './App.css';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

import 'bootstrap/dist/css/bootstrap.min.css'
import {v4 as uuid} from 'uuid'

class App extends Component {
  state={
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  }
  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
    console.log("Change")
  }


  
  handleSubmit= (e) => {
    e.preventDefault()
    const newItem = {
      id: this.state.id,
      item: this.state.item
    }
    const updatedItems = [
      ...this.state.items,
      newItem
    ]
    this.setState ({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false
    })
    console.log("Submit")
    console.log(updatedItems)
  }


  handleDelete = (id) => {
    console.log("Delete")
    const newItems = this.state.items.filter((item) => item.id !== id)
    this.setState({
      items: newItems
    })
  }



  handleEdit = (id) => {
    const selectedItem = this.state.items.find(item => id === item.id)
    this.handleDelete(id);
    console.log("Edit")
    console.log(selectedItem)
    this.setState({
      editItem: !this.state.editItem,
      item: selectedItem.item
    })
  }

  clearItems = () => {
    this.setState({
      items: []
    })
  }
  render() {
    return (
      <div className = "container">
        <div className = "row">
          <div className = "col-10 mx-auto col-md-8 mt-4">
            <h3 className = "text-capitalize text-center">React Todo List</h3>
            <TodoInput 
              editItem = {this.state.editItem}
              item = {this.state.item} 
              handleChange = {this.handleChange}
              handleSubmit = {this.handleSubmit}/>
            <TodoList 
              items = {this.state.items}
              handleEdit = {this.handleEdit}
              handleDelete = {this.handleDelete}
              clearItems = {this.clearItems}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
