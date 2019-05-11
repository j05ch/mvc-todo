import * as React from 'react';
import TaskPicker, { TaskItem } from '../task-picker';
import TaskListPicker, { TaskList } from '../task-list-picker';
import './styles.css';

interface State {
    tasks: Array<TaskItem>,
    chosenList: number,
    taskLists: Array<TaskList>
}

export default class App extends React.Component<{}, State> {

    readonly state = {
        tasks: [],
        chosenList: 0,
        taskLists: []
    };

    async chooseList(id: number): Promise<void> {
        await this.fetchTasks(id);
        await this.setState({chosenList: id})
    }

    async fetchTaskLists(): Promise<void> {
        const res = await fetch('https://mvc-todo-api.herokuapp.com/task-lists');
        const json = await res.json();
        this.setState({chosenList: 0});
        this.setState({taskLists: json});
    }

    async fetchTasks(id: number): Promise<void> {
        const res = await fetch(`https://mvc-todo-api.herokuapp.com/task-lists/${id}/tasks`);
        const json = await res.json();
        this.setState({tasks: json});
    }

    componentDidMount(): void {
        this.fetchTaskLists();
    }

    render(): React.ReactNode {
        const tasks = this.state.tasks;
        return <div className="container">
            <div className="task-list-picker">
                <TaskListPicker taskLists={this.state.taskLists} chooseList={this.chooseList.bind(this)}
                                chosenList={this.state.chosenList} fetchTaskLists={this.fetchTaskLists.bind(this)} />
            </div>
            <div className="task-picker">
                <TaskPicker tasks={tasks} taskListId={this.state.chosenList} fetchTasks={this.fetchTasks.bind(this)} />
            </div>
        </div>
    }
}
