import React from "react";
import { days } from "../../../../Library/Enums";
import { task } from "../../../../Library/Interfaces";
import { getDayFromUTC } from "../../../../Library/Helpers";
import { isDateSame } from "../../../../Library/DateTime";

interface props {
    handleClick: React.Dispatch<React.SetStateAction<days | undefined>>;
    day?: days;
    date: number;
    tasks: task[];
}

const todaysDate = new Date().getTime();

const DailyOverview: React.FC<props> = ({ handleClick, day, date, tasks }) => {
    return (
        <div
            className="daily-overview-container"
            onClick={() => handleClick(day)}
        >
            <div className="daily-day-date-container">
                <h1 className="daily-day">{day}</h1>
                <h2 className="daily-date">{getDayFromUTC(date)}</h2>
                {isDateSame(date, todaysDate) && <h3>today</h3>}
            </div>
            <div className="daily-task-container">
                {tasks.map((task) => {
                    return (
                        <div className="daily-task" key={task.id}>
                            <h3 className="daily-task-title">{task.name}</h3>
                            <p className="daily-task-description">
                                {task.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DailyOverview;
