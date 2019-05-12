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

export default class TaskPicker extends React.Component<Props, {}> {
    render(): React.ReactNode {
        return <>
            <h2>Task</h2>
            {
                this.props.taskListId !== 0 && this.props.tasks.map(
                    task =>
                    <Task
                        task={task}
                        key={task.id}
                        taskId={task.id}
                        tasklistId={this.props.taskListId}
                        fetchTasks={this.props.fetchTasks}
                    />
                    )
            }
            {
                this.props.taskListId !== 0 && <TaskInputField
                    tasklistId={this.props.taskListId}
                    fetchTasks={this.props.fetchTasks}
                />
            }
        </>
    }
}
