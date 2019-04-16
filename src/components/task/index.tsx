import * as React from 'react';
import { TaskItem } from '../task-picker';
import ControlButtons from '../control-buttons';
import './styles.css';

interface Props {
    task: TaskItem
}

interface State {
    isChecked: boolean
}

export default class Task extends React.Component<Props, State> {

    readonly state = {
        isChecked: false
    };

    switchChecked() {
        this.setState({isChecked: !this.state.isChecked});
    }

    render(): React.ReactNode {
        const nameStyles: string = this.state.isChecked ? 'name checked' : 'name';
        const descriptionStyles: string = this.state.isChecked ? 'description checked' : 'description';

        return <div>
                <span className={nameStyles}>
                    {this.props.task.title} <ControlButtons checkTask={() => this.switchChecked()} />
                </span>
            <p>
                <span className={descriptionStyles}>
                    {this.props.task.description}
                </span>
            </p>
        </div>
    }
};
