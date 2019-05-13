import * as React from 'react';

interface Props {
    checkTask: () => void,
    buttonText: string,
    deleteTask: () => void
}

export default class ControlButtons extends React.Component<Props, {}> {
    render(): React.ReactNode {
        return <span>
            <button className="btn btn-dark" onClick={this.props.checkTask}>{this.props.buttonText}</button>
            <button className="btn btn-dark" onClick={this.props.deleteTask}>Delete</button>
        </span>
    }
};
