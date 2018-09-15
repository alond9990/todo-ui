import React, {Component} from 'react';
import TaskListsAPI from '../services/TaskListsAPI'

class UpdateUsersToTasklist extends Component {

    constructor(props) {
        super(props);

        this.state = {
            disabled: false,
            existingUsers: this.props.tasklist.users.concat(this.props.tasklist.admins),
            selectedUsers: []
        };
    }

    updateSelectedUsers(e) {
        let options = e.target.options;
        let value = [];
        for (let i = 0, len = options.length; i < len; i++) {
            if (options[i].selected) {
                let userId = parseInt(e.target.options[i].value, 10);
                value.push(userId);
            }
        }
        this.setState({
            selectedUsers: value
        });
    }

    async submit() {
        this.setState({
            disabled: true,
        });

        await TaskListsAPI.updateUsers(this.props.tasklist.id ,
            {"user_ids": this.state.selectedUsers});

        this.setState({
            disabled: false,
        });
    }

    render() {
        return (
            <form className="row">
                <div className="form-group col-sm-4 no-margin-bottom">
                    <select multiple className="form-control" id="newUsersInput"
                            placeholder="Authorized Users..."
                            disabled={this.state.disabled}
                            onChange={(e) => {this.updateSelectedUsers(e)}}
                            defaultValue={this.state.existingUsers}>
                        {
                            this.props.users && this.props.users.map(user => (
                                <option key={user.id} value={user.id}>
                                    {user.username}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div className="form-group col-sm-2 no-margin-bottom">
                    <button type="submit" className="btn btn-success"
                            disabled={this.state.disabled || this.state.selectedUsers.length === 0}
                            onClick={() => {this.submit()}}>Update Users</button>
                </div>
            </form>
        )
    }
}

export default UpdateUsersToTasklist;