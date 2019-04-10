import * as React from 'react';

export default class ControlButtons extends React.Component<{}, {}> {
    render(): React.ReactNode {
        return <span><button>Done</button><button>Delete</button></span>
    }
};
