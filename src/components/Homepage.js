import React, {Component} from 'react';
import TaskListApi from '../services/TaskListsAPI'

class Homepage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            taskLists: null,
        };
    }

    async componentDidMount() {
        const taskLists = await (TaskListApi.getAll());
        this.setState({
            taskLists,
        });

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.taskLists === null && <p>Loading Task Lists...</p>}
                    {
                        this.state.taskLists && this.state.taskLists.map(taskList => (
                            <div key={taskList.id} className="col-sm-12">
                                <div className="card mb-3">
                                    <h4 className="card-header">{taskList.name}</h4>
                                    <ul className="list-group list-group-flush">
                                    {
                                        taskList.tasks.map(task => (
                                            <li key={task.id} className="list-group-item">{task.title}</li>
                                        ))
                                    }
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Homepage;