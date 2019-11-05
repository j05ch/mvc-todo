import React, { useState } from 'react';
import './styles.css';

interface Props {
    taskListId: number,
    fetchTasks: (id: number) => void
}

const TaskInputField: React.FunctionComponent<Props> = (props: Props) => {

    const [taskValue, setTaskValue] = useState<string>('');
    const [taskDescription, setTaskDescription] = useState<string>('');

    const url: string = process.env.API_URL ? process.env.API_URL : 'http://localhost:3000';

    async function addTask(): Promise<any> {
        const res = await fetch(`${url}/task-lists/${props.taskListId}/tasks/`, {
            method: 'POST',
            body: JSON.stringify({
                title: taskValue,
                description: taskDescription,
                status: 'open'
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        props.fetchTasks(props.taskListId);
        return await res.json();
    }

    function handleChange(event: any) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        if (name === 'taskValue')
            setTaskValue(value);
        if (name === 'taskDescription')
            setTaskDescription(value);
    }

    function handleSubmit(event: any) {
        addTask();
        setTaskValue('');
        setTaskDescription('');
        event.preventDefault();
    }

    return <form onSubmit={(e) => handleSubmit(e)}>
        <input className="input-field"
               name="taskValue"
               type="text"
               value={taskValue}
               onChange={(e) => handleChange(e)}
               placeholder="Task"
        />
        <input className="input-field"
               name="taskDescription"
               type="text"
               value={taskDescription}
               onChange={(e) => handleChange(e)}
               placeholder="Description"
        />
        <input className="submit-btn btn btn-primary"
               type="submit"
               value="Add task"
        />
    </form>
};

export default TaskInputField;
