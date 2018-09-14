import React, {Component} from 'react';

class Homepage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            taskLists: null,
        };
    }

    async componentDidMount() {
        const taskLists = [{"id": 1, "name": "test test"}]; //todo
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
                                <div className="card text-white bg-success mb-3">
                                    <div className="card-body">
                                        <h4 className="card-title">{taskList.name}</h4>
                                        <p className="card-text">enter tasks here</p>
                                    </div>
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