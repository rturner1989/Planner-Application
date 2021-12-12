import React, { useState, useEffect } from "react";
import { days } from "../../../Library/Enums";
import { getDayOfCurrentWeek } from "../../../Library/DateTime";
import { task } from "../../../Library/Interfaces";
import { filterTasksByDate } from "../../../Library/Helpers";
import DailySummary from "./DailySummary/DailySummary";
import ModalContainer from "../../ModalContainer/ModalContainer";
import TaskEditor from "../../TaskEditor/TaskEditor";

interface props {
    taskFormData: task[];
    setTaskFormData: React.Dispatch<React.SetStateAction<task[]>>;
    setSelectedDay: React.Dispatch<React.SetStateAction<string>>;
}
interface week {
    day: days;
    date: string;
    tasks: task[];
}

const WeeklyView: React.FC<props> = ({
    setSelectedDay,
    taskFormData,
    setTaskFormData,
}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [weekCount, setWeekCount] = useState(1);

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
                },
                {
                    day: days.MONDAY,
                    date: getDayOfCurrentWeek(-6),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(-6)
                    ),
                },
                {
                    day: days.TUESDAY,
                    date: getDayOfCurrentWeek(-5),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(-5)
                    ),
                },
                {
                    day: days.WEDNESDAY,
                    date: getDayOfCurrentWeek(-4),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(-4)
                    ),
                },
                {
                    day: days.THURSDAY,
                    date: getDayOfCurrentWeek(-3),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(-3)
                    ),
                },
                {
                    day: days.FRIDAY,
                    date: getDayOfCurrentWeek(-2),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(-2)
                    ),
                },
                {
                    day: days.SATURDAY,
                    date: getDayOfCurrentWeek(-1),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(-1)
                    ),
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
                },
                {
                    day: days.MONDAY,
                    date: getDayOfCurrentWeek(1),
                    tasks: filterTasksByDate(
                        taskFormData,
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
                },
                {
                    day: days.WEDNESDAY,
                    date: getDayOfCurrentWeek(3),
                    tasks: filterTasksByDate(
                        taskFormData,
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
                },
                {
                    day: days.FRIDAY,
                    date: getDayOfCurrentWeek(5),
                    tasks: filterTasksByDate(
                        taskFormData,
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
                },
                {
                    day: days.MONDAY,
                    date: getDayOfCurrentWeek(8),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(8)
                    ),
                },
                {
                    day: days.TUESDAY,
                    date: getDayOfCurrentWeek(9),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(9)
                    ),
                },
                {
                    day: days.WEDNESDAY,
                    date: getDayOfCurrentWeek(10),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(10)
                    ),
                },
                {
                    day: days.THURSDAY,
                    date: getDayOfCurrentWeek(11),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(11)
                    ),
                },
                {
                    day: days.FRIDAY,
                    date: getDayOfCurrentWeek(12),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(12)
                    ),
                },
                {
                    day: days.SATURDAY,
                    date: getDayOfCurrentWeek(13),
                    tasks: filterTasksByDate(
                        taskFormData,
                        getDayOfCurrentWeek(13)
                    ),
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
    const addTask = (task: task) => {
        setTaskFormData([...taskFormData, task]);
    };

    const displayWeekString = () => {
        switch (weekCount) {
            case 0:
                return <p>Last Week</p>;
            case 1:
                return <p>This Week</p>;
            case 2:
                return <p>Next Week</p>;
            default:
                break;
        }
    };

    useEffect(() => {
        setArrOfWeeks(arrOfWeeksFunction());
    }, [taskFormData]);

    return (
        <div className="weekly-overview-container">
            <div className="btn-group">
                <button onClick={previousWeek}>prev</button>
                {displayWeekString()}
                <button onClick={nextWeek}>next</button>
            </div>
            <button className="add-btn" onClick={() => setIsModalVisible(true)}>
                Add
            </button>
            {isModalVisible && (
                <ModalContainer
                    modal={"additional-task-modal"}
                    handleClose={() => setIsModalVisible(false)}
                >
                    <TaskEditor formData={undefined} handleSubmit={addTask} />
                </ModalContainer>
            )}
            <div className="days">
                {arrOfWeeks[weekCount].map((week, index) => {
                    return (
                        <DailySummary
                            key={index}
                            handleClick={setSelectedDay}
                            day={week.day}
                            date={week.date}
                            tasks={week.tasks}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default WeeklyView;
