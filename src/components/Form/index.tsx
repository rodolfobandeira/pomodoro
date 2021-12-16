import React, { useState } from 'react';
import { ITask } from '../../types/task';
import Button from '../Button'
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>> 
}

function Form({ setTasks }: Props) {
    const [task, setTask] = useState("");
    const [time, setTime] = useState("00");

    function addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setTasks(oldTasks => 
            [
                ...oldTasks,
                {
                    task,
                    time,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ]
        )
        setTask("")
        setTime("25")
    }

    return (
        <form onSubmit={addTask}>
        <div className="item-form" key="item-task">
            <p>
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="task"
                >
                    Add a new task
                </label>
            </p>
            <p>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="task"
                id="task"
                value={task}
                onChange={event => setTask(event.target.value)}
                placeholder="What is your task?"
                required
            />
            </p>
        </div>

        <div className="item-form" key="item-time">
            <p>
                <label
                    htmlFor="time"
                    className="block text-gray-700 text-sm font-bold mb-2"
                >
                    Time (Minutes)
                </label>
            </p>
            <p>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    step="1"
                    name="time"
                    id="time"
                    min="01"
                    max="59"
                    placeholder="25"
                    value={time}
                    onChange={event => setTime(event.target.value)}
                    required
                />
            </p>
        </div>
        <Button
            type="submit"
            text="Add"
        />
    </form >
    )
}

export default Form
