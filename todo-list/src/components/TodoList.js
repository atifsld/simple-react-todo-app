import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
    render() {
        const {items} = this.props
        return (
            <div>
                <h5 className = "text-center">Your Tasks</h5>
                {items.map(item=> <TodoItem 
                                    key={item.id} 
                                    item = {item.item} 
                                    handleDelete = {() => this.props.handleDelete(item.id)}
                                    handleEdit = {() => this.props.handleEdit(item.id)}
                                    />)}
                <span onClick = {this.props.clearItems}>
                <button className = "btn btn-block btn-danger mt-3 text-capitalize">Clear Items</button>
                </span>
            </div>
        )
    }
}

export default TodoList