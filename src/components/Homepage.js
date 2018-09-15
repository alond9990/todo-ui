import React, {Component} from 'react';
import TaskListApi from '../services/TaskListsAPI'
import TaskList from './TaskList'

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
                    {this.state.taskLists && this.state.taskLists.length === 0 && <p>You Have No Tasklists...</p>}
                    {
                        this.state.taskLists && this.state.taskLists.map(taskList => (
                           <TaskList tasklist={taskList} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Homepage;