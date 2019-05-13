import * as React from 'react';
import './styles.css';

interface Props {
    tasklistId: number,
    fetchTasks: (id: number) => void
}

interface State {
    taskValue?: string,
    taskDescription?: string
}

export default class TaskInputField extends React.Component<Props, State> {
    readonly state = {
        taskValue: '',
        taskDescription: ''
    };

    async addTask(): Promise<any> {
        const res = await fetch(`https://mvc-todo-api.herokuapp.com/task-lists/${this.props.tasklistId}/tasks/`, {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.taskValue,
                description: this.state.taskDescription,
                status: 'no'
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        this.props.fetchTasks(this.props.tasklistId);
        return await res.json();
    }

    handleChange(event: any) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    handleSubmit(event: any) {
        this.addTask();
        this.setState({
            taskValue: '',
            taskDescription: ''
        });
        event.preventDefault();
    }

    render(): React.ReactNode {
        return <form onSubmit={(e) => this.handleSubmit(e)}>
            <input className="input-field"
                   name="taskValue"
                   type="text"
                   value={this.state.taskValue}
                   onChange={(e) => this.handleChange(e)}
                   placeholder="Task"
            />
            <input className="input-field"
                   name="taskDescription"
                   type="text"
                   value={this.state.taskDescription}
                   onChange={(e) => this.handleChange(e)}
                   placeholder="Description"
            />
            <input className="submit-btn btn btn-primary"
                   type="submit"
                   value="Add task"
            />
        </form>
    }
};
