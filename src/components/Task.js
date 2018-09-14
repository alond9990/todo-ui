import React, {Component} from 'react';

class Task extends Component {

    render() {
        return (
            <li className="list-group-item">{this.props.task.title}</li>
        )
    }
}

export default Task;