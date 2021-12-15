import React, { useState } from "react";
import { task } from "../../Library/Interfaces";
import { makeColourCode, makeID } from "../../Library/Helpers";

interface props {
    formData: task | undefined;
    handleSubmit: (newTask: task) => void;
}

const TaskEditor: React.FC<props> = ({ formData, handleSubmit }) => {
    const [taskInput, setTaskInput] = useState(
        formData
            ? formData
            : (): task => {
                  return {
                      id: makeID(),
                      name: "",
                      description: "",
                      endDate: new Date().toUTCString(),
                      startTime: "12:00",
                      endTime: "12:00",
                      color: makeColourCode(),
                  };
              }
    );

    return (
        <form>
            <div>
                <label htmlFor="">
                    Title:
                    <input
                        value={taskInput.name}
                        type="text"
                        name="itle"
                        placeholder="Title"
                        onChange={(e) => {
                            setTaskInput({
                                ...taskInput,
                                name: e.target.value,
                            });
                        }}
                    />
                </label>
                <label htmlFor="">
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
            <div>
                <label htmlFor="">
                    Date:
                    <input
                        value={new Date(taskInput.endDate)
                            .toISOString()
                            .substr(0, 10)}
                        type="date"
                        name="endDate"
                        onChange={(e) => {
                            setTaskInput({
                                ...taskInput,
                                endDate: new Date(e.target.value).toUTCString(),
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
                    setTaskInput((): task => {
                        return {
                            id: makeID(),
                            name: "",
                            description: "",
                            endDate: new Date().toUTCString(),
                            startTime: "12:00",
                            endTime: "12:00",
                            color: makeColourCode(),
                        };
                    });
                }}
            >
                Save
            </button>
        </form>
    );
};

export default TaskEditor;
