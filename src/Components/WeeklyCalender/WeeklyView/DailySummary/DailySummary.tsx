import React, { useState, useEffect } from "react";
import { days, timeState } from "../../../../Library/Enums";
import { task } from "../../../../Library/Interfaces";
import { isDateSame } from "../../../../Library/DateTime";
import {
    filterTasksByTime,
    filterElapsedTasks,
    firstLetterOfEveryWord,
} from "../../../../Library/Helpers";
import { MdPlaylistAdd, MdAddTask } from "react-icons/md";
import useWindowDimensions from "../../../../Hooks/useWindowDimensions";

interface props {
    handleDateUpdate: React.Dispatch<React.SetStateAction<string>>;
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    handleClick: React.Dispatch<React.SetStateAction<string>>;
    day: days;
    date: string;
    tasks: task[];
    isActive: boolean;
    setActive: React.Dispatch<React.SetStateAction<string>>;
    timeTense: timeState;
    setToggleMobile: React.Dispatch<React.SetStateAction<boolean>>;
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
    isActive,
    setActive,
    timeTense,
    setToggleMobile,
}) => {
    const [isTaskHover, setIsTaskHover] = useState(false);
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    const [elapsedTasks, setElapsedTasks] = useState(tasks);

    const [windowDimensions] = useWindowDimensions();

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
                    {firstLetterOfEveryWord(task.name)}
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
                    <p className="daily-task-placeholder">
                        Elapsed Tasks -{" "}
                        <span className="tasks-length">{tasks.length}</span>
                    </p>
                );
            case timeState.PRESENT:
                if (filteredTasks.length === 0) {
                    return (
                        <p className="daily-task-placeholder">
                            Elapsed Tasks -{" "}
                            <span className="tasks-length">
                                {elapsedTasks.length}
                            </span>
                        </p>
                    );
                }
                return limitToThree(sortedTasks).map((task) => {
                    return daysTask(task);
                });
            case timeState.FUTURE:
                if (filteredTasks.length === 0) {
                    return (
                        <p className="daily-task-placeholder">No Tasks today</p>
                    );
                }
                return limitToThree(sortedTasks).map((task) => {
                    return daysTask(task);
                });
        }
    };

    // const titleRef = useRef<any>(null);

    // const focusScroll = (ref: any) => {
    //     const options: ScrollIntoViewOptions = {
    //         block: "center",
    //     };
    //     ref.current.scrollIntoView(options);
    // };

    // useEffect(() => {
    //     if (!titleRef.current) return;
    //     focusScroll(titleRef);
    // }, []);

    if (windowDimensions.width <= 930) {
        return (
            <div
                className={
                    isActive
                        ? "daily-overview-container active"
                        : "daily-overview-container"
                }
                tabIndex={0}
            >
                <div
                    className="daily-overview-day"
                    onClick={(e) => {
                        e.preventDefault();
                        setActive(date);
                        handleClick(date);
                        handleDateUpdate(date);
                        setToggleMobile(true);
                    }}
                >
                    <div className="daily-day-date-container container-child">
                        <h1 className="daily-day">{day}</h1>
                        <h2 className="daily-date-container">
                            <span className="daily-date">
                                {date.slice(4, 7)}
                            </span>
                            <span className="daily-month">
                                {date.slice(8, 11)}
                            </span>
                        </h2>
                        {isDateSame(date, todaysDate) && (
                            <h4 className="today-marker">Today</h4>
                        )}
                    </div>
                    <div className="daily-task-container container-child">
                        {getDaysTasks()}
                    </div>
                </div>
                {(timeTense === timeState.FUTURE ||
                    (timeTense === timeState.PRESENT &&
                        windowDimensions.width <= 430)) && (
                    <div className="mobile-add-task-btn-container">
                        <button
                            className="mobile-add-task-btn"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsModalVisible(true);
                                handleDateUpdate(date);
                            }}
                        >
                            <span className="visually-hidden">add task</span>
                            <MdAddTask
                                className="add-task-svg"
                                aria-hidden={true}
                                focusable={false}
                            />
                        </button>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div
            className={
                isActive
                    ? "daily-overview-container active"
                    : "daily-overview-container"
            }
            onMouseEnter={toggleTaskHover}
            onMouseLeave={() => setIsTaskHover(false)}
            // ref={isDateSame(date, todaysDate) ? titleRef : null}
            onClick={(e) => {
                e.preventDefault();
                setActive(date);
                handleClick(date);
                handleDateUpdate(date);
                setToggleMobile(true);
            }}
            tabIndex={0}
        >
            <div className="daily-day-date-container container-child">
                <h1 className="daily-day">{day}</h1>
                <h2 className="daily-date-container">
                    <span className="daily-date">{date.slice(4, 7)}</span>
                    <span className="daily-month">{date.slice(8, 11)}</span>
                </h2>
                {isDateSame(date, todaysDate) && (
                    <h4 className="today-marker">Today</h4>
                )}
            </div>
            <div className="daily-task-container container-child">
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
                        className="add-task-btn"
                        onClick={(e) => {
                            e.preventDefault();
                            setIsModalVisible(true);
                            handleDateUpdate(date);
                        }}
                    >
                        <span className="visually-hidden">add task</span>
                        <MdPlaylistAdd
                            className="add-task-svg"
                            aria-hidden={true}
                            focusable={false}
                        />
                    </button>
                </div>
            )}
        </div>
    );
};

export default DailySummary;
