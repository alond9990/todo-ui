import React, {Component} from 'react';
import TaskListAPI from '../services/TaskListsAPI';

class NewTaskList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            disabled: false,
            name: ''
        };
    }

    updateName(value) {
        this.setState({
            name: value,
        });
    }

    async submit() {
        this.setState({
            disabled: true,
        });

        await TaskListAPI.create({
            "name": this.state.title
        });

        this.setState({
            disabled: false,
        });
    }

    render() {
        return (
            <div className="col-sm-12 mb-5">
                <form className="row">
                    <div className="form-group col-sm-4 no-margin-bottom">
                        <input type="text" className="form-control"
                               placeholder="Task List Name..." id="newTaskListNameInput"
                               disabled={this.state.disabled}
                               onChange={(e) => {this.updateName(e.target.value)}} />
                    </div>
                    <div className="form-group col-sm-2 no-margin-bottom">
                        <button type="submit" className="btn btn-success"
                                disabled={this.state.disabled || !this.state.title}
                                onClick={() => {this.submit()}}>Add Task List</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewTaskList;