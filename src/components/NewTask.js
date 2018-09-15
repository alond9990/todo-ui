import React, {Component} from 'react';
import TaskAPI from '../services/TasksAPI'

class NewTask extends Component {

    constructor(props) {
        super(props);

        this.state = {
            disabled: false,
            title: ''
        };
    }

    updateTitle(value) {
        this.setState({
            title: value,
        });
    }

    async submit() {
        this.setState({
            disabled: true,
        });

        await TaskAPI.create({
            "title": this.state.title,
            "taskListId": this.props.tasklistid
        });

        this.setState({
            disabled: false,
        });
    }

    render() {
        return (
            <form className="row">
                <div className="form-group col-sm-4 no-margin-bottom">
                    <input type="text" className="form-control"
                           placeholder="Task Title..." id="newTaskInput"
                           disabled={this.state.disabled}
                           onChange={(e) => {this.updateTitle(e.target.value)}} />
                </div>
                <div className="form-group col-sm-2 no-margin-bottom">
                    <button type="submit" className="btn btn-success"
                            disabled={this.state.disabled || !this.state.title}
                            onClick={() => {this.submit()}}>Add Task</button>
                </div>
            </form>
        )
    }
}

export default NewTask;