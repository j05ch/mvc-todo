import * as React from 'react';
import Task from "../task";

export default class TaskList extends React.Component<{}, {}> {
    render(): React.ReactNode {
        return <div>
            <p>Tasks</p>
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
        </div>;
    }
}
