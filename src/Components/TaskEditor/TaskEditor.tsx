import React, { useState, useEffect } from "react";
import { task } from "../../Library/Interfaces";
import { makeColourCode, makeID } from "../../Library/Helpers";

interface props {
    date: string;
    formData: task | undefined;
    handleSubmit: (newTask: task) => void;
}

const TaskEditor: React.FC<props> = ({ date, formData, handleSubmit }) => {
    const nearestFive = (dateString: string) => {
        const coeff = 1000 * 60 * 5;
        const date = new Date(dateString);
        const rounded = new Date(Math.ceil(date.getTime() / coeff) * coeff);
        return new Date(rounded).toUTCString().slice(17, 22);
    };

    const increaseMinsBy15 = (time: string, number: number) => {
        // needs conditionals for when time hits 00
        let newArr = [];
        const [splitStringHours, splitStringMins] = time.split(":");
        const interval = parseInt(splitStringMins) + number;
        const toString = interval.toLocaleString();
        newArr.push(splitStringHours, toString);
        return newArr.join(":");
    };

    const [taskInput, setTaskInput] = useState(
        formData
            ? formData
            : (): task => {
                  return {
                      id: makeID(),
                      name: "",
                      description: "",
                      endDate: new Date(date).toISOString().substr(0, 10),
                      startTime: nearestFive(date),
                      endTime: "12:00",
                      color: makeColourCode(),
                  };
              }
    );

    useEffect(() => {
        setTaskInput({
            ...taskInput,
            endDate: new Date(date).toISOString().substr(0, 10),
            startTime: nearestFive(date),
        });
    }, [date]);

    return (
        <form className="add-task-form">
            <div className="title-description-container">
                <label className="title-input" htmlFor="">
                    Title:
                    <input
                        value={taskInput.name}
                        type="text"
                        name="title"
                        placeholder="Title"
                        onChange={(e) => {
                            setTaskInput({
                                ...taskInput,
                                name: e.target.value,
                            });
                        }}
                    />
                </label>
                <label className="description-input" htmlFor="">
                    Description:
                    <textarea
                        value={taskInput.description}
                        name="description"
                        placeholder="Description"
                        onChange={(e) =>
                            setTaskInput({
                                ...taskInput,
                                description: e.target.value,
                            })
                        }
                    />
                </label>
            </div>
            <div className="type-input-container">
                <label htmlFor="">
                    Date:
                    <input
                        value={taskInput.endDate}
                        type="date"
                        name="endDate"
                        onChange={(e) => {
                            setTaskInput({
                                ...taskInput,
                                endDate: e.target.value,
                            });
                        }}
                    />
                </label>
                <label htmlFor="">
                    Start Time:
                    <input
                        value={taskInput.startTime}
                        type="time"
                        name="startTime"
                        onChange={(e) => {
                            setTaskInput({
                                ...taskInput,
                                startTime: e.target.value,
                                // fix bug here
                                endTime: increaseMinsBy15(
                                    taskInput.startTime,
                                    15
                                ),
                            });
                        }}
                    />
                </label>
                <label htmlFor="">
                    End Time:
                    <input
                        value={taskInput.endTime}
                        type="time"
                        name="endTime"
                        onChange={(e) => {
                            setTaskInput({
                                ...taskInput,
                                endTime: e.target.value,
                            });
                        }}
                    />
                </label>
            </div>
            <button
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    handleSubmit(taskInput);
                    setTaskInput({
                        id: makeID(),
                        name: "",
                        description: "",
                        endDate: taskInput.endDate,
                        startTime: nearestFive(date),
                        endTime: "12:00",
                        color: makeColourCode(),
                    });
                }}
            >
                Save
            </button>
        </form>
    );
};

export default TaskEditor;
