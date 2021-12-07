import React from "react";
import { days } from "../../../../Library/Enums";
import { task } from "../../../../Library/Interfaces";
import { isDateSame } from "../../../../Library/DateTime";

interface props {
    handleClick: React.Dispatch<React.SetStateAction<days | undefined>>;
    day: days;
    date: string;
    tasks: task[];
}

const todaysDate = new Date().toUTCString();

const DailyOverview: React.FC<props> = ({ handleClick, day, date, tasks }) => {
    return (
        <div
            className="daily-overview-container"
            onClick={() => handleClick(day)}
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

export default DailyOverview;
