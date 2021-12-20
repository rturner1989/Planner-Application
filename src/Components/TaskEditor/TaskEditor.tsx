import React, { useState, useEffect, useRef } from "react";
import { task } from "../../Library/Interfaces";
import { makeColourCode, makeID } from "../../Library/Helpers";

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
                      endDate: "",
                      startTime: "12:00",
                      endTime: "12:00",
                      color: makeColourCode(),
                  };
              }
    );

    useEffect(() => {
        setTaskInput({
            ...taskInput,
            endDate: new Date(date).toISOString().substr(0, 10),
        });
    }, [date]);

    const increaseMinsBy15 = (time: string) => {
        let newArr = [];
        const [splitStringHours, splitStringMins] = time.split(":");
        const interval = parseInt(splitStringMins) + 15;
        const toString = interval.toString();
        newArr.push(splitStringHours, toString);
        return newArr.join(":");
    };

    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef();
    const dateRef = useRef();
    const startRef = useRef();
    const endRef = useRef();

    // const submitFormData = () => {
    //     setTaskInput({
    //         ...taskInput,
    //         name: titleRef,
    //     });
    // };

    return (
        <form className="add-task-form">
            <div className="title-description-container">
                <label className="title-input" htmlFor="">
                    Title:
                    <input
                        ref={titleRef}
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
                                endDate: e.currentTarget.value,
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
                                endTime: e.currentTarget.value,
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
                }}
            >
                Save
            </button>
        </form>
    );
};

export default TaskEditor;
