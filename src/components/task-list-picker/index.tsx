import * as React from 'react';
import './styles.css';
import TaskListInputField from "../task-list-input-field";

export interface TaskList {
    id: number,
    title: string,
    createdAt: string,
    updatedAt: string
}

interface Props {
    taskLists: Array<TaskList>,
    chooseList: (id: number) => void,
    chosenList: number,
    fetchTaskLists: () => void
}

export default class TaskListPicker extends React.Component<Props, {}> {

    async deleteTaskList(id: number): Promise<any> {
        const res = await fetch(`https://mvc-todo-api.herokuapp.com/task-lists/${id}`, {
            method: 'DELETE'
        });
        this.props.chooseList(0);
        await this.props.fetchTaskLists();
        return await res.json();
    }

    render(): React.ReactNode {
        return <>
            <h2>List</h2>
            {
                this.props.taskLists.map((taskList: TaskList) =>
                    <p key={taskList.id}
                       className={taskList.id === this.props.chosenList ? 'chosen-list' : ''}
                       onClick={
                           () => {
                               this.props.chooseList(taskList.id)
                           }
                       }>
                        {taskList.title}
                        <button
                            onClick={() => this.deleteTaskList(taskList.id)}>
                            Delete
                        </button>
                    </p>)
            }
            <TaskListInputField fetchTaskLists={this.props.fetchTaskLists} />
        </>
    }
}
