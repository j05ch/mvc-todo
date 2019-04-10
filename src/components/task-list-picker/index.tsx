import * as React from 'react';

interface TaskList {
    id: number,
    title: string,
    createdAt: string,
    updatedAt: string
}

interface Props {
    taskLists: Array<TaskList>;
}

export default class TaskListPicker extends React.Component<Props, {}> {
    render(): React.ReactNode {
        return <div>
            <h2>List</h2>
            {
                this.props.taskLists.map(taskList => <p>{taskList.title}</p>)
            }
        </div>
    }
}
