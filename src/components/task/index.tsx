import React, { useState } from 'react';
import { TaskItem } from '../task-picker';
import ControlButtons from '../control-buttons';
import './styles.css';

interface Props {
    task: TaskItem,
    taskId: number,
    taskListId: number,
    fetchTasks: (id: number) => void
}

const Task: React.FunctionComponent<Props> = (props: Props) => {

    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [buttonText, setButtonText] = useState<string>('Done');

    const url: string = process.env.API_URL ? process.env.API_URL : 'http://localhost:3000';

    function switchChecked(): void {
        setIsChecked(!isChecked);
        setButtonText(buttonText === 'Done' ? 'Redo' : 'Done');
    }

    async function deleteTask(): Promise<any> {
        const res = await fetch(`${url}/task-lists/${props.taskListId}/tasks/${props.taskId}`, {
            method: 'DELETE'
        });
        props.fetchTasks(props.taskListId);
        return await res.json();
    }

    const nameStyles: string = isChecked ? 'name checked' : 'name';
    const descriptionStyles: string = isChecked ? 'description checked' : 'description';

    return <div>
                <span className={nameStyles}>
                    {props.task.title} <ControlButtons checkTask={() => switchChecked()}
                                                            buttonText={buttonText}
                                                            deleteTask={() => deleteTask()}
                />
                </span>
        <p>
                <span className={descriptionStyles}>
                    {props.task.description}
                </span>
        </p>
    </div>
};

export default Task;
