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
                      startTime: 0,
                      endTime: 0,
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
                            setTaskInput({ ...taskInput, name: e.target.value })
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
                        value={`${new Date(
                            taskInput.endDate
                        ).getFullYear()}-${new Date(
                            taskInput.endDate
                        ).getMonth()}-${new Date(taskInput.endDate).getDate()}`}
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
                {/* <label htmlFor="">
                    Start Time:
                    <input type="time" name="startTime" />
                </label>
                <label htmlFor="">
                    End Time:
                    <input type="time" name="endTime" />
                </label> */}
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
            <button type="submit" onClick={() => handleSubmit(taskInput)}>
                Save
            </button>
        </form>
    );
};

export default TaskEditor;
