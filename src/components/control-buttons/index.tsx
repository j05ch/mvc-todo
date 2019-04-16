import * as React from 'react';

interface Props {
    checkTask: () => void,
    // deleteTask: (e: any) => void
}

export default class ControlButtons extends React.Component<Props, {}> {
    render(): React.ReactNode {
        return <span>
            <button onClick={this.props.checkTask}>Done</button>
            {/*<button>Delete</button>*/}
        </span>
    }
};
