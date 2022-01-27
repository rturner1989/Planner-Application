import React, { useState } from "react";
import { task } from "../../Library/Interfaces";
import { makeColourCode, makeID } from "../../Library/Helpers";
import { increaseMinsBy15, nearestFive } from "../../Library/DateTime";
import CSS from "csstype";

interface props {
    date: string;
    formData: task | undefined;
    handleSubmit: (newTask: task) => void;
    style: CSS.Properties;
}

const TaskEditor: React.FC<props> = ({
    date,
    formData,
    handleSubmit,
    style,
}) => {
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
                      endTime: increaseMinsBy15(date, 30),
                      color: makeColourCode(),
                  };
              }
    );

    return (
        <form
            className="add-task-form"
            action="#"
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(taskInput);
                setTaskInput({
                    id: makeID(),
                    name: "",
                    description: "",
                    endDate: taskInput.endDate,
                    startTime: nearestFive(new Date().toUTCString()),
                    endTime: increaseMinsBy15(new Date().toUTCString(), 30),
                    color: makeColourCode(),
                });
            }}
        >
            <div className="input-container">
                <div className="title-description-container">
                    <label className="title-input-label" htmlFor="title-input">
                        Title:
                        <input
                            id="title-input"
                            className="title-input"
                            value={taskInput.name}
                            type="text"
                            name="title"
                            placeholder="Title"
                            required
                            onChange={(e) => {
                                setTaskInput({
                                    ...taskInput,
                                    name: e.target.value,
                                });
                            }}
                        />
                    </label>
                    <label
                        className="description-input-label"
                        htmlFor="description-input"
                    >
                        Description:
                        <textarea
                            id="description-input"
                            className="description-input"
                            value={taskInput.description}
                            name="description"
                            placeholder="Description"
                            required
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
                    <label htmlFor="date-input">
                        Date:
                        <input
                            id="date-input"
                            className="date-input"
                            value={taskInput.endDate}
                            type="date"
                            name="endDate"
                            required
                            onChange={(e) => {
                                setTaskInput({
                                    ...taskInput,
                                    endDate: e.target.value,
                                });
                            }}
                        />
                    </label>
                    <div className="time-input">
                        <label htmlFor="time-input-from">
                            From:
                            <input
                                id="time-input-from"
                                className="time-input-from"
                                value={taskInput.startTime}
                                type="time"
                                name="startTime"
                                required
                                onChange={(e) => {
                                    setTaskInput({
                                        ...taskInput,
                                        startTime: e.target.value,
                                    });
                                }}
                            />
                        </label>
                        <label htmlFor="time-input-to">
                            Until:
                            <input
                                id="time-input-to"
                                className="time-input-to"
                                value={taskInput.endTime}
                                type="time"
                                name="endTime"
                                required
                                onChange={(e) => {
                                    setTaskInput({
                                        ...taskInput,
                                        endTime: e.target.value,
                                    });
                                }}
                            />
                        </label>
                    </div>
                </div>
            </div>
            <div
                className="submit-btn-container"
                style={{
                    borderTop: style.borderTop,
                }}
            >
                <button
                    className="submit-btn"
                    style={{
                        color: style.color,
                    }}
                    type="submit"
                >
                    Save Task
                </button>
            </div>
        </form>
    );
};

export default TaskEditor;
