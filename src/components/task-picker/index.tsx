import * as React from 'react';
import Task from '../task';
import TaskInputField from "../task-input-field";

export interface TaskItem {
    id: number,
    title: string,
    description: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    taskListId: number
}

interface Props {
    tasks: Array<TaskItem>,
    taskListId: number,
    fetchTasks: (id: number) => void
}

const TaskPicker: React.FunctionComponent<Props> = (props: Props) => {
    return <>
        <h2>Task</h2>
        {
            props.taskListId !== 0 && props.tasks.map(
                task =>
                    <Task
                        task={task}
                        key={task.id}
                        taskId={task.id}
                        taskListId={props.taskListId}
                        fetchTasks={props.fetchTasks}
                    />
            )
        }
        {
            props.taskListId !== 0 && <TaskInputField
                taskListId={props.taskListId}
                fetchTasks={props.fetchTasks}
            />
        }
    </>
};

export default TaskPicker;
