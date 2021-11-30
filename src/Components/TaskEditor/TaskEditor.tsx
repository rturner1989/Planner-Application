import React, { useState } from "react";
import { task } from "../../Library/Interfaces";

interface props {
    formData: task | undefined;
    handleSubmit: (newTask: task) => void;
}

const TaskEditor: React.FC<props> = ({ formData, handleSubmit }) => {
    // States
    const [taskInput, setTaskInput] = useState(
        formData
            ? formData
            : (): task => {
                  return {
                      id: 0,
                      name: "",
                      description: "",
                      endDate: new Date().getTime(),
                      startTime: "12:00",
                      endTime: "12:00",
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
                        name="title"
                        placeholder="title"
                        onChange={(e) =>
                            setTaskInput({
                                ...taskInput,
                                name: e.target.value,
                            })
                        }
                    />
                </label>
                <label htmlFor="">
                    Description:
                    <textarea
                        value={taskInput.description}
                        name="description"
                        placeholder="description"
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
                                endDate: new Date(e.target.value).getTime(),
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
            {/* <div>
                <p>Repeat:</p>
                <label htmlFor="">
                    Monday
                    <input type="checkbox" />
                </label>
                <label htmlFor="">
                    Tuesday
                    <input type="checkbox" />
                </label>
                <label htmlFor="">
                    Wednesday
                    <input type="checkbox" />
                </label>
                <label htmlFor="">
                    Thursday
                    <input type="checkbox" />
                </label>
                <label htmlFor="">
                    Friday
                    <input type="checkbox" />
                </label>
                <label htmlFor="">
                    Saturday
                    <input type="checkbox" />
                </label>
                <label htmlFor="">
                    Sunday
                    <input type="checkbox" />
                </label>
            </div>
            <div>
                <label htmlFor="">
                    Category:
                    <select name="" id="">
                        <option value="">Task</option>
                        <option value="">Appointment</option>
                        <option value="">To Do</option>
                    </select>
                </label>
            </div> */}
            <button
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    handleSubmit(taskInput);
                    setTaskInput((): task => {
                        return {
                            id: 0,
                            name: "",
                            description: "",
                            endDate: new Date().getTime(),
                            startTime: "",
                            endTime: "",
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
