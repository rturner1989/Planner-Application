import React, { useState, useEffect } from "react";
import { filterTasksByDate, makeID } from "../../../Library/Helpers";
import { task } from "../../../Library/Interfaces";
import TaskEditor from "../../TaskEditor/TaskEditor";

interface props {
    date: string;
    tasks: task[];
    setTaskFormData: React.Dispatch<React.SetStateAction<task[]>>;
}

const DailyView: React.FC<props> = ({ date, tasks, setTaskFormData }) => {
    const [dailyViewFilteredTasts, setDailyViewFilteredTasts] = useState(tasks);
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
    };

    const filteredTasks = () => {
        if (dailyViewFilteredTasts.length !== 0) {
            return sortedTasks.map((task) => {
                return (
                    <div key={makeID()}>
                        <div className="sorted-task">
                            <h1>{task.name}</h1>
                            <p>{task.description}</p>
                            <p>{task.startTime}</p>
                            <p>{task.endTime}</p>
                            <button onClick={() => setEditTask(task.id)}>
                                edit
                            </button>
                        </div>
                        {editTask === task.id && (
                            <div>
                                <TaskEditor
                                    formData={task}
                                    handleSubmit={updateTask}
                                    date={task.endDate}
                                />
                                <button onClick={() => setEditTask(undefined)}>
                                    cancel
                                </button>
                            </div>
                        )}
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
