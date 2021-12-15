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

    if (dailyViewFilteredTasts.length !== 0) {
        return (
            <div className="daily-detail-container">
                {sortedTasks.map((task) => {
                    const style = {
                        color: task.color,
                    };
                    return (
                        <div key={makeID()} style={style}>
                            <h1>{task.name}</h1>
                            <p>{task.description}</p>
                            <p>{task.startTime}</p>
                            <p>{task.endTime}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
    return (
        <div>
            <h1>No Tasks</h1>
        </div>
    );
};

export default DailyView;
