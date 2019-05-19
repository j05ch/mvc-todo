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

    url = process.env.API_URL ? process.env.API_URL : 'http://localhost:3000';

    async deleteTaskList(id: number): Promise<any> {
        const res = await fetch(`${this.url}/task-lists/${id}`, {
            method: 'DELETE'
        });
        return await res.json()
            .then(() => this.props.fetchTaskLists());
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
                            className="btn btn-dark"
                            onClick={(e) => {
                                e.stopPropagation();
                                this.deleteTaskList(taskList.id);
                            }}>
                            Delete
                        </button>
                    </p>)
            }
            <TaskListInputField fetchTaskLists={this.props.fetchTaskLists} />
        </>
    }
}
