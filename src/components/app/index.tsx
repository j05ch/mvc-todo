import * as React from 'react';
import TaskPicker from '../task-picker';
import TaskListPicker from '../task-list-picker';
import './styles.css';

export default class extends React.Component {
    render(): React.ReactNode {
        return <div className="container">
            <div className="task-list-picker"><TaskListPicker taskLists={taskListsMock} /></div>
            <div className="task-picker"><TaskPicker tasks={tasksMock1} /></div>
        </div>

    }
}

const tasksMock1 = [
    {
        "id": 1,
        "title": "Wohnzimmer",
        "description": "saugen",
        "status": "no",
        "createdAt": "2019-04-10T13:12:12.417Z",
        "updatedAt": "2019-04-10T13:12:12.417Z",
        "taskListId": 1
    },
    {
        "id": 2,
        "title": "Schlafzimmer",
        "description": "lüften",
        "status": "no",
        "createdAt": "2019-04-10T13:12:29.656Z",
        "updatedAt": "2019-04-10T13:12:29.656Z",
        "taskListId": 1
    }
];

const tasksMock2 = [];

const taskListsMock = [
    {
        "id": 1,
        "title": "Putzen",
        "createdAt": "2019-04-10T13:11:15.946Z",
        "updatedAt": "2019-04-10T13:11:15.946Z"
    },
    {
        "id": 2,
        "title": "Einkaufen",
        "createdAt": "2019-04-10T13:23:47.249Z",
        "updatedAt": "2019-04-10T13:23:47.249Z"
    }
];
