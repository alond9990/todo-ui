import React, {Component} from 'react';
import Task from './Task'
import NewTask from './NewTask'
import authClient from '../services/auth';

class TaskList extends Component {

    render() {
        return (
            <div className="col-sm-12 mb-5">
                <div className="card">
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
                    {
                        // only admins can add new tasks
                        this.props.tasklist.admins.indexOf(authClient.getUser().id) !== -1 ?
                        <div className="card-footer text-muted">
                            <NewTask tasklistid={this.props.tasklist.id}/>
                        </div> : ''
                    }
                </div>
            </div>
        )
    }
}

export default TaskList;