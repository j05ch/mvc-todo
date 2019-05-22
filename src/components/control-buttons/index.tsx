import * as React from 'react';

interface Props {
    checkTask: () => void,
    buttonText: string,
    deleteTask: () => void
}

const ControlButtons: React.FunctionComponent<Props> = (props: Props) => {
    return <span>
            <button className="btn btn-dark" onClick={props.checkTask}>{props.buttonText}</button>
            <button className="btn btn-dark" onClick={props.deleteTask}>Delete</button>
        </span>
};

export default ControlButtons;
