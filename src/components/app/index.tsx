import * as React from 'react';
import TaskList from "../task-list";
import TaskListPicker from "../task-list-picker";
import './styles.css';
import ControlButtons from "../control-buttons";

export default class extends React.Component {
    render(): React.ReactNode {
        return <div className="container">
            <div className="picker"><TaskListPicker /></div>
            <div className="list"><TaskList /></div>
            <ControlButtons/>
        </div>

    }
}
