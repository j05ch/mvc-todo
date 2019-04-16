import * as React from 'react';
import TaskPicker, { TaskItem } from '../task-picker';
import TaskListPicker, { TaskList } from '../task-list-picker';
import './styles.css';

interface State {
    tasks: Array<TaskItem>,
    chosenList: number,
    taskLists: any
}

export default class App extends React.Component<{}, State> {

    readonly state = {
        tasks: [],
        chosenList: 0,
        taskLists: []
    };

    chooseList(id: number) {
        if (id === 1) {
            this.setState(
                {
                    tasks: this.tasksMock1
                })
        } else if (id === 2) {
            this.setState({tasks: this.tasksMock2})
        }

        this.setState({chosenList: id})
    }

    fetchTaskLists(): Promise<JSON> {
        return fetch('https://mvc-todo-api.herokuapp.com/task-lists', { mode: 'no-cors'})
            .then(res => res.json());
    }

    componentDidMount(): void {
        this.setState({taskLists: this.fetchTaskLists()})
    }

    render(): React.ReactNode {
        const tasks = this.state.tasks;
        return <div className="container">
            <div className="task-list-picker">
                <TaskListPicker taskLists={this.taskListsMock} chooseList={this.chooseList.bind(this)}
                                chosenList={this.state.chosenList} />
            </div>
            <div className="task-picker">
                <TaskPicker tasks={tasks} />
            </div>
        </div>
    }

    // Mpcks:

    tasksMock1 = [
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

    tasksMock2 = [];

    taskListsMock = [
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

}
