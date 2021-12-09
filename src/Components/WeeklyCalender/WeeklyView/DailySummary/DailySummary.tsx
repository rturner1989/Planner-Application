import React from "react";
import { days } from "../../../../Library/Enums";
import { task } from "../../../../Library/Interfaces";
import { isDateSame } from "../../../../Library/DateTime";

// on elapsed days - day and date move to middle, on hover text indicating how many tasks were on that day.

// past present and future, past - not filter, as above, present - filtered tasks due after curent time, future filtered tasks due after midnight
// filter for maximum of 3

interface props {
    handleClick: React.Dispatch<React.SetStateAction<string>>;
    day: days;
    date: string;
    tasks: task[];
}

const todaysDate = new Date().toUTCString();

const DailySummary: React.FC<props> = ({ handleClick, day, date, tasks }) => {
    return (
        <div
            className="daily-overview-container"
            onClick={() => handleClick(date)}
        >
            <div className="daily-day-date-container container-child">
                <h1 className="daily-day">{day}</h1>
                <h2 className="daily-date">{date.slice(4, 11)}</h2>
                {isDateSame(date, todaysDate) && <h3>today</h3>}
            </div>
            <div className="daily-task-container container-child">
                {tasks.map((task) => {
                    return (
                        <div className="daily-task" key={task.id}>
                            <h3 className="daily-task-title">{task.name}</h3>
                            <div className="daily-task-date-range">
                                <p>{task.startTime} </p>
                                <p>-</p>
                                <p>{task.endTime}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DailySummary;
