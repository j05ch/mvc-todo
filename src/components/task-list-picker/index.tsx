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

const TaskListPicker: React.FunctionComponent<Props> = (props: Props) => {

    const url: string = process.env.API_URL ? process.env.API_URL : 'http://localhost:3000';

    async function deleteTaskList(id: number): Promise<any> {
        const res = await fetch(`${url}/task-lists/${id}`, {
            method: 'DELETE'
        });
        return await res.json()
            .then(() => props.fetchTaskLists());
    }

    return <>
        <h2>List</h2>
        {
            props.taskLists.map((taskList: TaskList) =>
                <p key={taskList.id}
                   className={taskList.id === props.chosenList ? 'chosen-list' : ''}
                   onClick={
                       () => {
                           props.chooseList(taskList.id)
                       }
                   }>
                    {taskList.title}
                    <button
                        className="btn btn-dark"
                        onClick={(e) => {
                            e.stopPropagation();
                            deleteTaskList(taskList.id);
                        }}>
                        Delete
                    </button>
                </p>)
        }
        <TaskListInputField fetchTaskLists={props.fetchTaskLists} />
    </>
};

export default TaskListPicker;
