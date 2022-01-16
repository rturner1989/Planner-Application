import React, { useState, useEffect, useRef } from "react";
import { days, timeState } from "../../../../Library/Enums";
import { task } from "../../../../Library/Interfaces";
import { isDateSame } from "../../../../Library/DateTime";
import {
    filterTasksByTime,
    isPastPresentFuture,
    filterElapsedTasks,
} from "../../../../Library/Helpers";
import { MdPlaylistAdd } from "react-icons/md";

interface props {
    handleDateUpdate: React.Dispatch<React.SetStateAction<string>>;
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    handleClick: React.Dispatch<React.SetStateAction<string>>;
    day: days;
    date: string;
    tasks: task[];
}

const todaysDate = new Date().toUTCString();
const currentTime = todaysDate.slice(17, 22);

const DailySummary: React.FC<props> = ({
    handleDateUpdate,
    setIsModalVisible,
    handleClick,
    day,
    date,
    tasks,
}) => {
    const [isTaskHover, setIsTaskHover] = useState(false);
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    const [elapsedTasks, setElapsedTasks] = useState(tasks);
    const [timeTense, setTimeTense] = useState(() =>
        isPastPresentFuture(todaysDate, date)
    );

    const toggleTaskHover = () => {
        setIsTaskHover(!isTaskHover);
    };

    const limitToThree = (task: task[]) => {
        return task.slice(0, 3);
    };

    const sortedTasks = filteredTasks.sort((a, b) => {
        if (a.startTime > b.startTime) return 1;
        if (a.startTime < b.startTime) return -1;
        return 0;
    });

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

    const daysTask = (task: task) => {
        return (
            <div className="daily-task" key={task.id}>
                <h3 className="daily-task-title">
                    {task.name.charAt(0).toUpperCase() + task.name.slice(1)}
                </h3>
                <div className="daily-task-date-range">
                    <p>{task.startTime}</p>
                    <p>-</p>
                    <p>{task.endTime}</p>
                </div>
            </div>
        );
    };

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
                    return (
                        <div>
                            <p>Present</p>
                            <p>ElapsedTasks - {elapsedTasks.length}</p>
                        </div>
                    );
                }
                return limitToThree(sortedTasks).map((task) => {
                    return daysTask(task);
                });
            case timeState.FUTURE:
                if (filteredTasks.length === 0) {
                    return (
                        <div>
                            <p>No Tasks today</p>
                        </div>
                    );
                }
                return limitToThree(sortedTasks).map((task) => {
                    return daysTask(task);
                });
        }
    };

    const titleRef = useRef<any>(null);

    const focusScroll = () => {
        const options: ScrollIntoViewOptions = {
            block: "center",
        };
        titleRef.current.scrollIntoView(options);
    };

    useEffect(() => {
        if (!titleRef.current) return;
        focusScroll();
    }, []);

    return (
        <div
            className={
                isDateSame(date, todaysDate)
                    ? "daily-overview-container active"
                    : "daily-overview-container"
            }
            onMouseEnter={toggleTaskHover}
            onMouseLeave={() => setIsTaskHover(false)}
            ref={isDateSame(date, todaysDate) ? titleRef : null}
        >
            <div className="daily-day-date-container container-child">
                <h1 className="daily-day">{day}</h1>
                <h2 className="daily-date">{date.slice(4, 11)}</h2>
                {isDateSame(date, todaysDate) && (
                    <h4 className="today-marker">Today</h4>
                )}
            </div>
            <div
                className="daily-task-container container-child"
                onClick={() => {
                    handleClick(date);
                    handleDateUpdate(date);
                }}
            >
                {getDaysTasks()}
            </div>
            {(timeTense === timeState.FUTURE ||
                timeTense === timeState.PRESENT) && (
                <div
                    className={
                        isTaskHover
                            ? "add-task-btn-container toggle-active"
                            : "add-task-btn-container"
                    }
                >
                    <button
                        onClick={() => {
                            setIsModalVisible(true);
                            handleDateUpdate(date);
                        }}
                    >
                        <MdPlaylistAdd />
                    </button>
                </div>
            )}
        </div>
    );
};

export default DailySummary;
