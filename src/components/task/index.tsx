import * as React from 'react';
import { TaskItem } from '../task-picker';
import ControlButtons from '../control-buttons';
import './styles.css';

interface Props {
    task: TaskItem,
    taskId: number,
    tasklistId: number,
    fetchTasks: (id: number) => void
}

interface State {
    isChecked: boolean,
    buttonText: string
}

export default class Task extends React.Component<Props, State> {

    readonly state = {
        isChecked: false,
        buttonText: 'Done'
    };

    switchChecked(): void {
        this.setState({
                isChecked: !this.state.isChecked,
                buttonText: this.state.buttonText === 'Done' ? 'Redo' : 'Done'
            }
        );
    }

    async deleteTask(): Promise<any> {
        const res = await fetch(`https://mvc-todo-api.herokuapp.com/task-lists/${this.props.tasklistId}/tasks/${this.props.taskId}`, {
            method: 'DELETE'
        });
        this.props.fetchTasks(this.props.tasklistId);
        return await res.json();
    }

    render(): React.ReactNode {
        const nameStyles: string = this.state.isChecked ? 'name checked' : 'name';
        const descriptionStyles: string = this.state.isChecked ? 'description checked' : 'description';

        return <div>
                <span className={nameStyles}>
                    {this.props.task.title} <ControlButtons checkTask={() => this.switchChecked()}
                                                            buttonText={this.state.buttonText}
                                                            deleteTask={() => this.deleteTask()}
                />
                </span>
            <p>
                <span className={descriptionStyles}>
                    {this.props.task.description}
                </span>
            </p>
        </div>
    }
};
