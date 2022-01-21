import React, { useState, useEffect } from "react";
import { task } from "../../Library/Interfaces";
import { makeColourCode, makeID } from "../../Library/Helpers";
import { increaseMinsBy15, nearestFive } from "../../Library/DateTime";

interface props {
    date: string;
    formData: task | undefined;
    handleSubmit: (newTask: task) => void;
}

const TaskEditor: React.FC<props> = ({ date, formData, handleSubmit }) => {
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
                    <label className="title-input" htmlFor="">
                        Title:
                        <input
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
                    <label className="description-input" htmlFor="">
                        Description:
                        <textarea
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
                    <label htmlFor="">
                        Date:
                        <input
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
                    <label htmlFor="">
                        From:
                        <input
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
                    <label htmlFor="">
                        Until:
                        <input
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
            <div className="submit-btn-container">
                <button className="submit-btn" type="submit">
                    Save Task
                </button>
            </div>
        </form>
    );
};

export default TaskEditor;
