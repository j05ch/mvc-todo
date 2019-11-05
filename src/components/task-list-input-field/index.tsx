import React, { useState } from 'react';
import './styles.css';

interface Props {
    fetchTaskLists: () => void
}

const TaskListInputField: React.FunctionComponent<Props> = (props: Props) => {

    const [taskListValue, setTaskListValue] = useState<string>('');

    const url: string = process.env.API_URL ? process.env.API_URL : 'http://localhost:3000';

    async function addTaskList(): Promise<any> {
        const res = await fetch(`${url}/task-lists`, {
            method: 'POST',
            body: JSON.stringify({
                title: taskListValue
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        await props.fetchTaskLists();
        return await res.json();
    }

    function handleChange(event: any) {
        const target = event.target;
        const value = target.value;
        setTaskListValue(value);
    }

    function handleSubmit(event: any) {
        addTaskList();
        setTaskListValue('');
        event.preventDefault();
    }

    return <form onSubmit={(e) => handleSubmit(e)}>
        <input className="input-field"
               name="taskListValue"
               type="text" value={taskListValue}
               onChange={(e) => handleChange(e)}
               placeholder="Task list"
        />
        <input className="submit-btn btn btn-primary"
               type="submit"
               value="Add list"
        />
    </form>
};

export default TaskListInputField;
