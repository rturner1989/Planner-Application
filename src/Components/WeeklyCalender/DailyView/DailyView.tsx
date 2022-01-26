import React, { useState, useEffect } from "react";
import {
    filterTasksByDate,
    firstLetterOfEveryWord,
    firstWordUpperCase,
    makeID,
} from "../../../Library/Helpers";
import { task } from "../../../Library/Interfaces";
import TaskEditor from "../../TaskEditor/TaskEditor";
import { FiEdit } from "react-icons/fi";
import { AiOutlineShrink } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import CSS from "csstype";

interface props {
    date: string;
    tasks: task[];
    setTaskFormData: React.Dispatch<React.SetStateAction<task[]>>;
}

const DailyView: React.FC<props> = ({ date, tasks, setTaskFormData }) => {
    const [dailyViewFilteredTasts, setDailyViewFilteredTasts] =
        useState<task[]>(tasks);
    const [editTask, setEditTask] = useState<string | undefined>(undefined);

    const sortedTasks = dailyViewFilteredTasts.sort((a, b) => {
        if (a.startTime > b.startTime) return 1;
        if (a.startTime < b.startTime) return -1;
        return 0;
    });

    useEffect(() => {
        setDailyViewFilteredTasts(filterTasksByDate(tasks, date));
    }, [date, tasks]);

    const updateTask = (a: task) => {
        const index = tasks.findIndex((task) => task.id === a.id);
        setTaskFormData([
            ...tasks.slice(0, index),
            a,
            ...tasks.slice(index + 1),
        ]);
        setEditTask(undefined);
    };

    const deleteTask = (a: task) => {
        const index = tasks.findIndex((x) => x.id === a.id);
        setTaskFormData([...tasks.slice(0, index), ...tasks.slice(index + 1)]);
    };

    const modalStyle: CSS.Properties = {
        color: "black",
        borderTop: "1px solid rgb(195, 191, 255)",
    };

    const filteredTasks = () => {
        if (dailyViewFilteredTasts.length !== 0) {
            return sortedTasks.map((task) => {
                return (
                    <div key={makeID()} className="task-container">
                        <div className="sorted-task">
                            <div className="task-title-disc">
                                <h2>{firstLetterOfEveryWord(task.name)}</h2>
                                <p>{firstWordUpperCase(task.description)}</p>
                            </div>
                            <div className="task-time">
                                <p>
                                    {task.startTime} - {task.endTime}
                                </p>
                            </div>
                            <div className="task-btn">
                                {editTask === task.id ? (
                                    <button
                                        className="task-edit-btn"
                                        onClick={() => setEditTask(undefined)}
                                    >
                                        <span className="visually-hidden">
                                            collapse edit box
                                        </span>
                                        <AiOutlineShrink
                                            className="task-cancel-svg"
                                            aria-hidden={true}
                                            focusable={false}
                                        />
                                    </button>
                                ) : (
                                    <button
                                        className="task-edit-btn"
                                        onClick={() => setEditTask(task.id)}
                                    >
                                        <span className="visually-hidden">
                                            open edit box
                                        </span>
                                        <FiEdit
                                            className="task-edit-svg"
                                            aria-hidden={true}
                                            focusable={false}
                                        />
                                    </button>
                                )}
                                <button
                                    className="task-delete-btn"
                                    onClick={() => deleteTask(task)}
                                >
                                    <span className="visually-hidden">
                                        delete task
                                    </span>
                                    <MdDeleteOutline
                                        className="task-edit-svg"
                                        aria-hidden={true}
                                        focusable={false}
                                    />
                                </button>
                            </div>
                        </div>
                        {editTask === task.id && (
                            <div className="task-editor">
                                <div className="break"></div>
                                <TaskEditor
                                    formData={task}
                                    handleSubmit={updateTask}
                                    date={task.endDate}
                                    style={modalStyle}
                                />
                            </div>
                        )}
                    </div>
                );
            });
        }
        return <h1 className="empty-tasks">No Tasks</h1>;
    };

    return (
        <div className="daily-detail-container">
            <h2 className="chosen-date">{date.slice(0, 16)}</h2>
            <div className="filtered-tasks">{filteredTasks()}</div>
        </div>
    );
};

export default DailyView;
