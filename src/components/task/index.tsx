import * as React from 'react';
import { TaskItem } from '../task-picker';
import ControlButtons from '../control-buttons';

interface Props {
    task: TaskItem
}

export default class Task extends React.Component<Props, {}> {
    render(): React.ReactNode {
        return <div>
            <p><span>{this.props.task.title} <ControlButtons /></span></p>
            <p>{this.props.task.description}</p>
        </div>
    }
};
