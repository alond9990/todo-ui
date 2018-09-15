import React, {Component} from 'react';
import TaskAPI from "../services/TasksAPI";

class Task extends Component {

    constructor(props) {
        super(props);

        this.markTaskAsDone = this.markTaskAsDone.bind(this)
    }


    componentWillMount() {
        this.setState(
            {
                label_id: 'task-label-' + this.props.task.id,
                task_done: this.props.task.done
            });
    }

    componentWillReceiveProps(nextProps) {
        this.setState(
            {
                label_id: 'task-label-' + nextProps.task.id,
                task_done: nextProps.task.done
            });
    }

    async markTaskAsDone() {
        if (!this.state.task_done) {
            await TaskAPI.markAsDone(this.props.task.id);
            this.setState({
                task_done: true,
            });
        }
    }

    render() {
        return (
            <li className="list-group-item">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input"
                           id={this.state.label_id}
                           checked={this.state.task_done}
                           onChange={this.markTaskAsDone} />
                        <label className={'custom-control-label ' + (this.state.task_done ? "text-lt" : "")}
                               htmlFor={this.state.label_id}>
                            {this.props.task.title}
                        </label>
                </div>
            </li>
        )
    }
}

export default Task;