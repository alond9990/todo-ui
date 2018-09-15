import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import authClient from '../services/auth'


class Homepage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateUsername(value) {
        this.setState({
            username: value,
        });
    }

    updatePassword(value) {
        this.setState({
            password: value,
        });
    }

    async handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            await authClient.signIn(username, password)
        }
    }

    render() {
        return (
            <div className="container">
                {
                    authClient.isAuthenticated() ?
                        <Redirect to={{ pathname: '/', state: { from: this.props.location } }} /> : ''
                }
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>Login</h2>
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div className={'form-group' + (this.state.submitted && !this.state.username ? ' has-error' : '')}>
                                <input type="text" className="form-control" placeholder="Username" id="usernameInput"
                                        onChange={(e) => {this.updateUsername(e.target.value)}} value={this.state.username} />
                                {this.state.submitted && !this.state.username &&
                                <div className="help-block">Username is required</div>
                                }
                            </div>
                            <div className={'form-group' + (this.state.submitted && !this.state.password ? ' has-error' : '')}>
                                <input type="password" className="form-control" placeholder="Password" id="passwordInput"
                                       onChange={(e) => {this.updatePassword(e.target.value)}} value={this.state.password} />
                                {this.state.submitted && !this.state.password &&
                                <div className="help-block">Password is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary">Login</button>
                                <Link to="/register" className="btn btn-link">Register</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;