import * as React from 'react';
import './styles.css';

export interface TaskList {
    id: number,
    title: string,
    createdAt: string,
    updatedAt: string
}

interface Props {
    taskLists: Array<TaskList>,
    chooseList: (id: number) => void,
    chosenList: number
}

export default class TaskListPicker extends React.Component<Props, {}> {
    render(): React.ReactNode {
        return <div>
            <h2>List</h2>
            {
                this.props.taskLists.map(taskList =>
                    <p
                        className={taskList.id === this.props.chosenList ? 'chosen-list' : ''}
                        onClick={() => {this.props.chooseList(taskList.id)}}>{taskList.title}
                    </p>)
            }
        </div>
    }
}
