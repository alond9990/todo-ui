import React, {Component} from 'react';
import Task from './Task'

class TaskList extends Component {

    render() {
        return (
            <div className="col-sm-12">
                <div className="card mb-3">
                    <h4 className="card-header">{this.props.tasklist.name}</h4>
                    <ul className="list-group list-group-flush">
                    {
                        this.props.tasklist.tasks.map(task => (
                           <Task task={task} />
                        ))
                    }
                    </ul>
                </div>
            </div>
        )
    }
}

export default TaskList;