import React from "react";
import { days } from "../../../../Library/Enums";
import { task } from "../../../../Library/Interfaces";
import { getDayFromUTC } from "../../../../Library/Helpers";

interface props {
    day?: days;
    date: number;
    tasks: task[];
}

const DailyOverview: React.FC<props> = ({ day, date, tasks }) => {
    return (
        <div>
            <div>
                <h1>{day}</h1>
                <h2>{getDayFromUTC(date)}</h2>
                {/* if date = todays date - show "today" */}
            </div>
            <div>
                {tasks.map((task) => {
                    return (
                        <div key={task.id}>
                            <h3>{task.name}</h3>
                            <p>{task.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DailyOverview;
