import React, { useState, useEffect } from 'react';
import TaskPicker, { TaskItem } from '../task-picker';
import TaskListPicker, { TaskList } from '../task-list-picker';
import './styles.css';

const App: React.FunctionComponent<{}> = () => {

    const [tasks, setTasks] = useState<Array<TaskItem>>([]);
    const [chosenList, setChosenList] = useState<number>(0);
    const [taskLists, setTaskLists] = useState<Array<TaskList>>([]);

    const url: string = process.env.API_URL ? process.env.API_URL : 'http://localhost:3000';

    async function chooseList(id: number): Promise<void> {
        await fetchTasks(id);
        await setChosenList(id);
    }

    async function fetchTaskLists(): Promise<void> {
        const res = await fetch(`${url}/task-lists`);
        const json = await res.json();
        setChosenList(0);
        setTaskLists(json);
    }

    async function fetchTasks(id: number): Promise<void> {
        const res = await fetch(`${url}/task-lists/${id}/tasks`);
        const json = await res.json();
        setTasks(json);
    }

    useEffect(() => {
        fetchTaskLists();
    },[]);

    return <div className="container">
        <div className="task-list-picker">
            <TaskListPicker taskLists={taskLists} chooseList={chooseList}
                            chosenList={chosenList} fetchTaskLists={fetchTaskLists} />
        </div>
        <div className="task-picker">
            <TaskPicker tasks={tasks} taskListId={chosenList}
                        fetchTasks={fetchTasks} />
        </div>
    </div>
};

export default App;
