import React, { useState, useEffect } from "react";
import { filterTasksByDate, makeID } from "../../../Library/Helpers";
import { task } from "../../../Library/Interfaces";

interface props {
    date: string;
    tasks: task[];
}

const DailyView: React.FC<props> = ({ date, tasks }) => {
    const [dailyViewFilteredTasts, setDailyViewFilteredTasts] = useState(tasks);

    const sortedTasks = dailyViewFilteredTasts.sort((a, b) => {
        if (a.startTime > b.startTime) return 1;
        if (a.startTime < b.startTime) return -1;
        return 0;
    });

    useEffect(() => {
        setDailyViewFilteredTasts(filterTasksByDate(tasks, date));
    }, [date, tasks]);

    const filteredTasks = () => {
        if (dailyViewFilteredTasts.length !== 0) {
            return sortedTasks.map((task) => {
                const style = {
                    color: task.color,
                };
                return (
                    <div key={makeID()} className="sorted-task">
                        <h1>{task.name}</h1>
                        <p>{task.description}</p>
                        <p>{task.startTime}</p>
                        <p>{task.endTime}</p>
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
