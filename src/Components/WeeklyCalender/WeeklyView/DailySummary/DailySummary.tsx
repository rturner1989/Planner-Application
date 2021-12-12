import React, { useState } from "react";
import { days, timeState } from "../../../../Library/Enums";
import { task } from "../../../../Library/Interfaces";
import { isDateSame } from "../../../../Library/DateTime";
import { filterTasksByTime } from "../../../../Library/Helpers";

// past present and future, past - not filter, as above, present - filtered tasks due after curent time, future filtered tasks due after midnight
// filter for maximum of 3

interface props {
    handleClick: React.Dispatch<React.SetStateAction<string>>;
    day: days;
    date: string;
    tasks: task[];
}

const todaysDate = new Date().toUTCString();
const currentTime = todaysDate.slice(17, 22);
const midnight = "00:00";

const DailySummary: React.FC<props> = ({ handleClick, day, date, tasks }) => {
    const [isTaskHover, setIsTaskHover] = useState(false);

    const isPastPresentFuture = (): timeState => {
        const today = new Date(todaysDate);
        const comparisonDate = new Date(date);
        if (today.getFullYear() < comparisonDate.getFullYear())
            return timeState.FUTURE;
        if (today.getFullYear() > comparisonDate.getFullYear())
            return timeState.PAST;

        if (today.getMonth() < comparisonDate.getMonth())
            return timeState.FUTURE;
        if (today.getMonth() > comparisonDate.getMonth()) return timeState.PAST;

        if (today.getDate() < comparisonDate.getDate()) return timeState.FUTURE;
        if (today.getDate() > comparisonDate.getDate()) return timeState.PAST;
        return timeState.PRESENT;
    };

    const toggleTaskHover = () => {
        setIsTaskHover(!isTaskHover);
    };

    const filteredPresentFutureTasks = (filteredTask: task[]) => {
        if (filteredTask.length === 0) {
            if (isTaskHover === false) {
                return (
                    <div onMouseEnter={toggleTaskHover}>
                        <p>No Tasks today</p>
                    </div>
                );
            } else {
                return (
                    <div>
                        {/* add the add task function here */}
                        <button>Add/+</button>
                    </div>
                );
            }
        } else {
            return filteredTask.map((task) => {
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
            });
        }
    };

    const getDaysTasks = () => {
        switch (isPastPresentFuture()) {
            case timeState.PAST:
                const filteredPastTasks = filterTasksByTime(tasks, currentTime);
                if (isTaskHover === false) {
                    return (
                        <div
                            className="daily-task-placeholder"
                            onMouseEnter={toggleTaskHover}
                        >
                            <p>Past</p>
                            <p>Tasks - {tasks.length}</p>
                            <p>(Hover to show more)</p>
                        </div>
                    );
                } else {
                    if (filteredPastTasks.length === 0) {
                        return (
                            <div>
                                <p>No Tasks today</p>
                            </div>
                        );
                    } else {
                        return filteredPastTasks.map((task) => {
                            return (
                                <div className="daily-task" key={task.id}>
                                    <h3 className="daily-task-title">
                                        {task.name}
                                    </h3>
                                    <div className="daily-task-date-range">
                                        <p>{task.startTime} </p>
                                        <p>-</p>
                                        <p>{task.endTime}</p>
                                    </div>
                                </div>
                            );
                        });
                    }
                }
            case timeState.PRESENT:
                const filteredPresentTasks = filterTasksByTime(
                    tasks,
                    currentTime
                );
                return filteredPresentFutureTasks(filteredPresentTasks);
            case timeState.FUTURE:
                const filteredFutureTasks = filterTasksByTime(tasks, midnight);
                return filteredPresentFutureTasks(filteredFutureTasks);
            default:
                break;
        }
    };

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
            <div
                className="daily-task-container container-child"
                onMouseLeave={() => setIsTaskHover(false)}
            >
                {getDaysTasks()}
            </div>
        </div>
    );
};

export default DailySummary;
