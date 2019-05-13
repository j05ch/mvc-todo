import * as React from 'react';
import './styles.css';

interface Props {
    fetchTaskLists: () => void
}

interface State {
    taskListValue?: string,
}

export default class TaskListInputField extends React.Component<Props, State> {
    readonly state = {
        taskListValue: ''
    };

    async addTaskList(): Promise<any> {
        const res = await fetch('https://mvc-todo-api.herokuapp.com/task-lists', {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.taskListValue
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        await this.props.fetchTaskLists();
        return await res.json();
    }

    handleChange(event: any) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    handleSubmit(event: any) {
        this.addTaskList();
        this.setState({
            taskListValue: ''
        });
        event.preventDefault();
    }

    render(): React.ReactNode {
        return <form onSubmit={(e) => this.handleSubmit(e)}>
            <input className="input-field"
                   name="taskListValue"
                   type="text" value={this.state.taskListValue}
                   onChange={(e) => this.handleChange(e)}
                   placeholder="Task list"
            />
            <input className="submit-btn btn btn-primary"
                   type="submit"
                   value="Add list"
            />
        </form>
    }
};
