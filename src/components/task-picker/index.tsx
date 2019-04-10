import * as React from 'react';
import Task from '../task';

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
    tasks: Array<TaskItem>
}

export default class TaskPicker extends React.Component<Props, {}> {
    render(): React.ReactNode {
        return <div className="task-picker">
            <h2>Task</h2>
            {
                this.props.tasks.map(task => <Task task={task} />)
            }
        </div>
    }
}
