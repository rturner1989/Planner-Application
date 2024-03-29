import React, { useState, useEffect } from "react";
import { days, timeState } from "../../../Library/Enums";
import { getDayOfCurrentWeek } from "../../../Library/DateTime";
import { task } from "../../../Library/Interfaces";
import {
    filterTasksByDate,
    isPastPresentFuture,
    makeID,
} from "../../../Library/Helpers";
import DailySummary from "./DailySummary/DailySummary";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface props {
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    taskFormData: task[];
    setSelectedDay: React.Dispatch<React.SetStateAction<string>>;
    setUpdateSelectedDate: React.Dispatch<React.SetStateAction<string>>;
    toggleMobile: boolean;
    setToggleMobile: React.Dispatch<React.SetStateAction<boolean>>;
}
interface week {
    day: days;
    date: string;
    tasks: task[];
    timestate: timeState;
}

const WeeklyView: React.FC<props> = ({
    setUpdateSelectedDate,
    setIsModalVisible,
    setSelectedDay,
    taskFormData,
    toggleMobile,
    setToggleMobile,
}) => {
    const [weekCount, setWeekCount] = useState(1);
    const todaysDate = new Date().toUTCString();
    const [activeDate, setActiveDate] = useState<string>(todaysDate);

    const arrOfWeeksFunction = (): week[][] => {
        return [
            // previous week
            [
                {
                    day: days.SUNDAY,
                    date: getDayOfCurrentWeek(-7),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(-7)
                    ),
                    timestate: timeState.PAST,
                },
                {
                    day: days.MONDAY,
                    date: getDayOfCurrentWeek(-6),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(-6)
                    ),
                    timestate: timeState.PAST,
                },
                {
                    day: days.TUESDAY,
                    date: getDayOfCurrentWeek(-5),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(-5)
                    ),
                    timestate: timeState.PAST,
                },
                {
                    day: days.WEDNESDAY,
                    date: getDayOfCurrentWeek(-4),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(-4)
                    ),
                    timestate: timeState.PAST,
                },
                {
                    day: days.THURSDAY,
                    date: getDayOfCurrentWeek(-3),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(-3)
                    ),
                    timestate: timeState.PAST,
                },
                {
                    day: days.FRIDAY,
                    date: getDayOfCurrentWeek(-2),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(-2)
                    ),
                    timestate: timeState.PAST,
                },
                {
                    day: days.SATURDAY,
                    date: getDayOfCurrentWeek(-1),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(-1)
                    ),
                    timestate: timeState.PAST,
                },
            ],
            // current week
            [
                {
                    day: days.SUNDAY,
                    date: getDayOfCurrentWeek(0),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(0)
                    ),
                    timestate: isPastPresentFuture(
                        todaysDate,
                        getDayOfCurrentWeek(0)
                    ),
                },
                {
                    day: days.MONDAY,
                    date: getDayOfCurrentWeek(1),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(1)
                    ),
                    timestate: isPastPresentFuture(
                        todaysDate,
                        getDayOfCurrentWeek(1)
                    ),
                },
                {
                    day: days.TUESDAY,
                    date: getDayOfCurrentWeek(2),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(2)
                    ),
                    timestate: isPastPresentFuture(
                        todaysDate,
                        getDayOfCurrentWeek(2)
                    ),
                },
                {
                    day: days.WEDNESDAY,
                    date: getDayOfCurrentWeek(3),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(3)
                    ),
                    timestate: isPastPresentFuture(
                        todaysDate,
                        getDayOfCurrentWeek(3)
                    ),
                },
                {
                    day: days.THURSDAY,
                    date: getDayOfCurrentWeek(4),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(4)
                    ),
                    timestate: isPastPresentFuture(
                        todaysDate,
                        getDayOfCurrentWeek(4)
                    ),
                },
                {
                    day: days.FRIDAY,
                    date: getDayOfCurrentWeek(5),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(5)
                    ),
                    timestate: isPastPresentFuture(
                        todaysDate,
                        getDayOfCurrentWeek(5)
                    ),
                },
                {
                    day: days.SATURDAY,
                    date: getDayOfCurrentWeek(6),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(6)
                    ),
                    timestate: isPastPresentFuture(
                        todaysDate,
                        getDayOfCurrentWeek(6)
                    ),
                },
            ],
            // next week
            [
                {
                    day: days.SUNDAY,
                    date: getDayOfCurrentWeek(7),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(7)
                    ),
                    timestate: timeState.FUTURE,
                },
                {
                    day: days.MONDAY,
                    date: getDayOfCurrentWeek(8),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(8)
                    ),
                    timestate: timeState.FUTURE,
                },
                {
                    day: days.TUESDAY,
                    date: getDayOfCurrentWeek(9),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(9)
                    ),
                    timestate: timeState.FUTURE,
                },
                {
                    day: days.WEDNESDAY,
                    date: getDayOfCurrentWeek(10),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(10)
                    ),
                    timestate: timeState.FUTURE,
                },
                {
                    day: days.THURSDAY,
                    date: getDayOfCurrentWeek(11),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(11)
                    ),
                    timestate: timeState.FUTURE,
                },
                {
                    day: days.FRIDAY,
                    date: getDayOfCurrentWeek(12),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(12)
                    ),
                    timestate: timeState.FUTURE,
                },
                {
                    day: days.SATURDAY,
                    date: getDayOfCurrentWeek(13),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(13)
                    ),
                    timestate: timeState.FUTURE,
                },
            ],
        ];
    };

    const [arrOfWeeks, setArrOfWeeks] = useState<week[][]>(arrOfWeeksFunction);

    const previousWeek = () => {
        if (weekCount > 0) {
            setWeekCount(weekCount - 1);
        }
    };
    const nextWeek = () => {
        if (weekCount < arrOfWeeks.length - 1) {
            setWeekCount(weekCount + 1);
        }
    };

    const displayWeekString = () => {
        switch (weekCount) {
            case 0:
                return (
                    <p className="selected-week">
                        <span className="selected-week-option">Last</span> Week
                    </p>
                );
            case 1:
                return (
                    <p className="selected-week">
                        <span className="selected-week-option">Current</span>{" "}
                        Week
                    </p>
                );
            case 2:
                return (
                    <p className="selected-week">
                        <span className="selected-week-option">Next</span> Week
                    </p>
                );
            default:
                break;
        }
    };

    useEffect(() => {
        setArrOfWeeks(arrOfWeeksFunction());
    }, [taskFormData]);

    return (
        <aside
            className={
                toggleMobile
                    ? "weekly-overview-container mobile"
                    : "weekly-overview-container"
            }
            tabIndex={-1}
        >
            <header className="btn-group">
                {weekCount < 1 ? (
                    <button id="prev-week" onClick={previousWeek} disabled>
                        <span className="visually-hidden">previous week</span>
                        <IoIosArrowBack
                            className="prev-svg"
                            aria-hidden={true}
                            focusable={false}
                        />
                    </button>
                ) : (
                    <button id="prev-week" onClick={previousWeek}>
                        <span className="visually-hidden">previous week</span>
                        <IoIosArrowBack
                            className="prev-svg"
                            aria-hidden={true}
                            focusable={false}
                        />
                    </button>
                )}
                {displayWeekString()}
                {weekCount > 1 ? (
                    <button id="next-week" onClick={nextWeek} disabled>
                        <span className="visually-hidden">next week</span>
                        <IoIosArrowForward
                            className="next-svg"
                            aria-hidden={true}
                            focusable={false}
                        />
                    </button>
                ) : (
                    <button id="next-week" onClick={nextWeek}>
                        <span className="visually-hidden">next week</span>
                        <IoIosArrowForward
                            className="next-svg"
                            aria-hidden={true}
                            focusable={false}
                        />
                    </button>
                )}
            </header>
            <section className="days">
                {arrOfWeeks[weekCount].map((week) => {
                    return (
                        <DailySummary
                            key={makeID()}
                            handleClick={setSelectedDay}
                            handleDateUpdate={setUpdateSelectedDate}
                            day={week.day}
                            date={week.date}
                            tasks={week.tasks}
                            timeTense={week.timestate}
                            setIsModalVisible={setIsModalVisible}
                            isActive={activeDate === week.date}
                            setActive={setActiveDate}
                            setToggleMobile={setToggleMobile}
                        />
                    );
                })}
            </section>
        </aside>
    );
};

export default WeeklyView;
