import React, {Component} from 'react';
import Task from './Task'
import NewTask from './NewTask'

class TaskList extends Component {

    render() {
        return (
            <div className="col-sm-12">
                <div className="card mb-3">
                    <h4 className="card-header">
                        {this.props.tasklist.name}
                    </h4>
                    <ul className="list-group list-group-flush">
                    {
                        this.props.tasklist.tasks.map(task => (
                           <Task task={task} />
                        ))
                    }
                    </ul>
                    <div className="card-footer text-muted">
                        <NewTask tasklistid={this.props.tasklist.id}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskList;