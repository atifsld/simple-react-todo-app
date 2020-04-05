import React, { Component } from 'react'

class TodoInput extends Component {
    render() {
        return (
            <div className="card card-body my-3">
                <form onSubmit = {this.props.handleSubmit}>
                    <div className = "input-group text bg-pimary text-white">
                        <input 
                            type = "text" 
                            value = {this.props.item} 
                            onChange = {this.props.handleChange} 
                            className="form-control" 
                            placeholder="Add a todo item!"/>
                    </div>
                    <button type="submit" className = "btn btn-block btn-primary mt-3 text-capitalize">
                        {this.props.editItem? "Update Item": "Add Item"}
                    </button>
                </form>
            </div>
        )   
    }
}

export default TodoInput