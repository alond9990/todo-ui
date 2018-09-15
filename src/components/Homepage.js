import React, {Component} from 'react';
import TaskListApi from '../services/TaskListsAPI'
import UsersApi from '../services/UsersAPI'
import TaskList from './TaskList'
import NewTaskList from './NewTaskList'

class Homepage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            taskLists: null,
            users: null
        };
    }

    async componentDidMount() {
        const taskLists = await (TaskListApi.getAll());
        const users = await (UsersApi.getAll());
        this.setState({
            taskLists,
            users
        });

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.taskLists === null && <p>Loading Task Lists...</p>}
                    {this.state.taskLists && this.state.taskLists.length === 0 && <p>You Have No Tasklists...</p>}
                    <NewTaskList />
                    {
                        this.state.taskLists && this.state.taskLists.map(taskList => (
                           <TaskList key={taskList.id} tasklist={taskList} users={this.state.users} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Homepage;