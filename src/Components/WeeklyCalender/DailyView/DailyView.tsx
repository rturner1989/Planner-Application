import React, { useState, useEffect } from "react";
import {
    filterTasksByDate,
    firstUpperCase,
    makeID,
} from "../../../Library/Helpers";
import { task } from "../../../Library/Interfaces";
import TaskEditor from "../../TaskEditor/TaskEditor";

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

    const filteredTasks = () => {
        if (dailyViewFilteredTasts.length !== 0) {
            return sortedTasks.map((task) => {
                return (
                    <div key={makeID()} className="task-container">
                        <div className="sorted-task">
                            <div className="task-title-disc">
                                <h2>{firstUpperCase(task.name)}</h2>
                                <p>{task.description}</p>
                            </div>
                            <div className="task-time">
                                <p>
                                    {task.startTime} - {task.endTime}
                                </p>
                            </div>
                            <div className="task-btn">
                                <button onClick={() => setEditTask(task.id)}>
                                    Edit Task
                                </button>
                                <button onClick={() => setEditTask(undefined)}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                        <div className="task-editor">
                            {editTask === task.id && (
                                <TaskEditor
                                    formData={task}
                                    handleSubmit={updateTask}
                                    date={task.endDate}
                                />
                            )}
                        </div>
                    </div>
                );
            });
        }
        return <h1>No Tasks</h1>;
    };

    return (
        <div className="daily-detail-container">
            <div className="chosen-date">{date}</div>
            <div className="filtered-tasks">{filteredTasks()}</div>
        </div>
    );
};

export default DailyView;
