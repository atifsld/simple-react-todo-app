import React, { Component } from 'react'
class TodoItem extends Component {
    render() {
        return (
            <li className="list-group-item d-flex justify-content-between my-2">
                <h6>{this.props.item}</h6>
                <div className = "todo-icon">
                    <span onClick = {this.props.handleEdit} className = "mx-2 text-success">
                        <i className = "fas fa-pen"></i>
                        <button className = "btn btn-success">Edit</button>
                    </span>
                    <span onClick = {this.props.handleDelete} className="ms-2 text-danger">
                        <button 
                            className = "btn btn-danger btn-xs" 
                            >Delete</button>
                    </span>
                </div>
            </li>
        )
    }
}

export default TodoItem