import React, { useState } from "react";
import { days } from "../../../Library/Enums";
import { isDateSame, getDayOfCurrentWeek } from "../../../Library/DateTime";
import { task } from "../../../Library/Interfaces";
import DailyOverview from "./DailyOverview/DailyOverview";
import ModalContainer from "../../ModalContainer/ModalContainer";
import TaskEditor from "../../TaskEditor/TaskEditor";

interface props {
    taskFormData: task[];
    setTaskFormData: React.Dispatch<React.SetStateAction<task[]>>;
    setSelectedDay: React.Dispatch<React.SetStateAction<days | undefined>>;
}
interface week {
    day: days;
    date: string;
    tasks: task[];
}

const WeeklyOverview: React.FC<props> = ({
    setSelectedDay,
    taskFormData,
    setTaskFormData,
}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [count, setCount] = useState(1);

    const filterTasks = (tasks: task[], date: string) => {
        return tasks.filter((task) => {
            if (isDateSame(task.endDate, date)) return task;
        });
    };

    const [arrOfWeeks, setArrOfWeeks] = useState<week[][]>([
        // previous week
        [
            {
                day: days.SUNDAY,
                date: getDayOfCurrentWeek(-7),
                tasks: filterTasks(taskFormData, getDayOfCurrentWeek(-7)),
            },
            {
                day: days.MONDAY,
                date: getDayOfCurrentWeek(-6),
                tasks: filterTasks(taskFormData, getDayOfCurrentWeek(-6)),
            },
            {
                day: days.TUESDAY,
                date: getDayOfCurrentWeek(-5),
                tasks: filterTasks(taskFormData, getDayOfCurrentWeek(-5)),
            },
            {
                day: days.WEDNESDAY,
                date: getDayOfCurrentWeek(-4),
                tasks: filterTasks(taskFormData, getDayOfCurrentWeek(-4)),
            },
            {
                day: days.THURSDAY,
                date: getDayOfCurrentWeek(-3),
                tasks: filterTasks(taskFormData, getDayOfCurrentWeek(-3)),
            },
            {
                day: days.FRIDAY,
                date: getDayOfCurrentWeek(-2),
                tasks: filterTasks(taskFormData, getDayOfCurrentWeek(-2)),
            },
            {
                day: days.SATURDAY,
                date: getDayOfCurrentWeek(-1),
                tasks: filterTasks(taskFormData, getDayOfCurrentWeek(-1)),
            },
        ],
        // current week
        [
            {
                day: days.SUNDAY,
                date: getDayOfCurrentWeek(0),
                tasks: filterTasks(taskFormData, getDayOfCurrentWeek(0)),
            },
            {
                day: days.MONDAY,
                date: getDayOfCurrentWeek(1),
                tasks: filterTasks(taskFormData, getDayOfCurrentWeek(1)),
            },
            {
                day: days.TUESDAY,
                date: getDayOfCurrentWeek(2),
                tasks: filterTasks(taskFormData, getDayOfCurrentWeek(2)),
            },
            {
                day: days.WEDNESDAY,
                date: getDayOfCurrentWeek(3),
                tasks: filterTasks(taskFormData, getDayOfCurrentWeek(3)),
            },
            {
                day: days.THURSDAY,
                date: getDayOfCurrentWeek(4),
                tasks: filterTasks(taskFormData, getDayOfCurrentWeek(4)),
            },
            {
                day: days.FRIDAY,
                date: getDayOfCurrentWeek(5),
                tasks: filterTasks(taskFormData, getDayOfCurrentWeek(5)),
            },
            {
                day: days.SATURDAY,
                date: getDayOfCurrentWeek(6),
                tasks: filterTasks(taskFormData, getDayOfCurrentWeek(6)),
            },
        ],
        // next week
        [
            {
                day: days.SUNDAY,
                date: getDayOfCurrentWeek(7),
                tasks: filterTasks(taskFormData, getDayOfCurrentWeek(7)),
            },
            {
                day: days.MONDAY,
                date: getDayOfCurrentWeek(8),
                tasks: filterTasks(taskFormData, getDayOfCurrentWeek(8)),
            },
            {
                day: days.TUESDAY,
                date: getDayOfCurrentWeek(9),
                tasks: filterTasks(taskFormData, getDayOfCurrentWeek(9)),
            },
            {
                day: days.WEDNESDAY,
                date: getDayOfCurrentWeek(10),
                tasks: filterTasks(taskFormData, getDayOfCurrentWeek(10)),
            },
            {
                day: days.THURSDAY,
                date: getDayOfCurrentWeek(11),
                tasks: filterTasks(taskFormData, getDayOfCurrentWeek(11)),
            },
            {
                day: days.FRIDAY,
                date: getDayOfCurrentWeek(12),
                tasks: filterTasks(taskFormData, getDayOfCurrentWeek(12)),
            },
            {
                day: days.SATURDAY,
                date: getDayOfCurrentWeek(13),
                tasks: filterTasks(taskFormData, getDayOfCurrentWeek(13)),
            },
        ],
    ]);

    const previousWeek = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    const nextWeek = () => {
        if (count < arrOfWeeks.length - 1) {
            setCount(count + 1);
        }
    };
    const addTask = (task: task) => {
        setTaskFormData([...taskFormData, task]);
    };

    return (
        <div className="weekly-overview-container">
            <button onClick={previousWeek}>prev</button>
            <button onClick={nextWeek}>next</button>
            <button onClick={() => setIsModalVisible(true)}>Add</button>
            {isModalVisible && (
                <ModalContainer handleClose={() => setIsModalVisible(false)}>
                    <TaskEditor formData={undefined} handleSubmit={addTask} />
                </ModalContainer>
            )}
            {arrOfWeeks[count].map((week, index) => {
                return (
                    <DailyOverview
                        key={index}
                        handleClick={setSelectedDay}
                        day={week.day}
                        date={week.date}
                        tasks={week.tasks}
                    />
                );
            })}
        </div>
    );
};

export default WeeklyOverview;
