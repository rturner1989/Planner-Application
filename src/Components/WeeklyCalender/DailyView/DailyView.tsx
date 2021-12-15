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
    }, [date]);

    return (
        <div className="daily-detail-container">
            {sortedTasks.map((task) => {
                return (
                    <div key={makeID()}>
                        <h1>{task.name}</h1>
                        <p>{task.description}</p>
                        <p>{task.startTime}</p>
                        <p>{task.endTime}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default DailyView;
