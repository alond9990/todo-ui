import React, {Component} from 'react';

class Task extends Component {

    componentWillMount() {
        const label_id = 'task-label-' + this.props.task.id;
        let task_done = this.props.task.done;
        this.setState(
            {
                label_id: label_id,
                task_done: task_done
            });
    }

    render() {
        return (
            <li className="list-group-item">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input"
                           id={this.state.label_id}
                           checked={this.state.task_done}/>
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