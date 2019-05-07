import * as React from 'react';

interface Props {
    tasklistId: number,
    fetchTasks: (id: number) => void
}

interface State {
    value: number
}

export default class TaskInputField extends React.Component<Props, State> {
    readonly state = {
        value: 0
    };

    async addTask(): Promise<any> {
        const res = await fetch(`https://mvc-todo-api.herokuapp.com/task-lists/${this.props.tasklistId}/tasks/`, {
            method: 'post'
        });
        this.props.fetchTasks(this.props.tasklistId);
        return await res.json();
    }

    handleChange(event: any) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event: any) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render(): React.ReactNode {
        return <form onSubmit={() => this.handleSubmit}>
            <label>
                Name:
                <input type="text" value={this.state.value} onChange={() => this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    }
};
