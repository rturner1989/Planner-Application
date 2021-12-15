import React, { useState, useEffect } from "react";
import { days, timeState } from "../../../../Library/Enums";
import { task } from "../../../../Library/Interfaces";
import { isDateSame } from "../../../../Library/DateTime";
import {
    filterTasksByTime,
    isPastPresentFuture,
    filterElapsedTasks,
} from "../../../../Library/Helpers";

interface props {
    handleClick: React.Dispatch<React.SetStateAction<string>>;
    day: days;
    date: string;
    tasks: task[];
}

const todaysDate = new Date().toUTCString();
const currentTime = todaysDate.slice(17, 22);
// const midnight = new Date(new Date().setHours(0, 0, 0, 0)).toUTCString();

const DailySummary: React.FC<props> = ({ handleClick, day, date, tasks }) => {
    const [isTaskHover, setIsTaskHover] = useState(false);
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    const [elapsedTasks, setElapsedTasks] = useState(tasks);
    const [timeTense, setTimeTense] = useState(() =>
        isPastPresentFuture(todaysDate, date)
    );

    const toggleTaskHover = () => {
        setIsTaskHover(!isTaskHover);
    };

    useEffect(() => {
        let interval: number | undefined = undefined;
        if (timeTense === timeState.PRESENT) {
            setFilteredTasks(filterTasksByTime(tasks, currentTime));
            setElapsedTasks(filterElapsedTasks(tasks, currentTime));
            interval = window.setInterval(() => {
                setFilteredTasks(filterTasksByTime(tasks, currentTime));
                setElapsedTasks(filterElapsedTasks(tasks, currentTime));
            }, 60000);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [tasks]);

    const getDaysTasks = () => {
        switch (timeTense) {
            case timeState.PAST:
                return (
                    <div className="daily-task-placeholder">
                        <p>Past</p>
                        <p>Tasks - {tasks.length}</p>
                    </div>
                );
            case timeState.PRESENT:
                if (filteredTasks.length === 0) {
                    if (!isTaskHover) {
                        return (
                            <div onMouseEnter={toggleTaskHover}>
                                <p>Present</p>
                                <p>ElapsedTasks - {elapsedTasks.length}</p>
                            </div>
                        );
                    }
                    return (
                        <div>
                            {/* add the add task function here */}
                            <button>Add/+</button>
                        </div>
                    );
                }
                return filteredTasks.map((task) => {
                    return (
                        <div className="daily-task" key={task.id}>
                            <h3 className="daily-task-title">{task.name}</h3>
                            <div className="daily-task-date-range">
                                <p>{task.startTime}</p>
                                <p>-</p>
                                <p>{task.endTime}</p>
                            </div>
                        </div>
                    );
                });
            case timeState.FUTURE:
                if (tasks.slice(0, 3).length === 0) {
                    if (!isTaskHover) {
                        return (
                            <div onMouseEnter={toggleTaskHover}>
                                <p>No Tasks today</p>
                            </div>
                        );
                    }
                    return (
                        <div>
                            {/* add the add task function here */}
                            <button>Add/+</button>
                        </div>
                    );
                }
                const sortedTasks = filteredTasks.sort((a, b) => {
                    if (a.startTime > b.startTime) return 1;
                    if (a.startTime < b.startTime) return -1;
                    return 0;
                });
                return sortedTasks.map((task) => {
                    return (
                        <div className="daily-task" key={task.id}>
                            <h3 className="daily-task-title">{task.name}</h3>
                            <div className="daily-task-date-range">
                                <p>{task.startTime}</p>
                                <p>-</p>
                                <p>{task.endTime}</p>
                            </div>
                        </div>
                    );
                });
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
