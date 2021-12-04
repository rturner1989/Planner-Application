import React, { useState } from "react";
import { data } from "../../../data";
import { days } from "../../../Library/Enums";
import {
    isDateSame,
    getStartWeekDate,
    addDaysToDate,
    subtractDaysFromDate,
    getStartWeekDateString,
    getDayOfCurrentWeek,
} from "../../../Library/DateTime";
import { task } from "../../../Library/Interfaces";
import DailyOverview from "./DailyOverview/DailyOverview";
import ModalContainer from "../../ModalContainer/ModalContainer";
import TaskEditor from "../../TaskEditor/TaskEditor";

interface props {
    setSelectedDay: React.Dispatch<React.SetStateAction<days | undefined>>;
    taskFormData: task[] | undefined;
    setTaskFormData: React.Dispatch<React.SetStateAction<task[] | undefined>>;
}
interface week {
    day: string;
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

    const [arrOfWeeks, setArrOfWeeks] = useState([
        // previous week
        [
            { day: days.MONDAY, date: getDayOfCurrentWeek(-6), tasks: [] },
            { day: days.TUESDAY, date: getDayOfCurrentWeek(-5), tasks: [] },
            { day: days.WEDNESDAY, date: getDayOfCurrentWeek(-4), tasks: [] },
            { day: days.THURSDAY, date: getDayOfCurrentWeek(-3), tasks: [] },
            { day: days.FRIDAY, date: getDayOfCurrentWeek(-2), tasks: [] },
            { day: days.SATURDAY, date: getDayOfCurrentWeek(-1), tasks: [] },
            { day: days.SUNDAY, date: getDayOfCurrentWeek(0), tasks: [] },
        ],
        // current week
        [
            { day: days.MONDAY, date: getDayOfCurrentWeek(1), tasks: [] },
            { day: days.TUESDAY, date: getDayOfCurrentWeek(2), tasks: [] },
            { day: days.WEDNESDAY, date: getDayOfCurrentWeek(3), tasks: [] },
            { day: days.THURSDAY, date: getDayOfCurrentWeek(4), tasks: [] },
            { day: days.FRIDAY, date: getDayOfCurrentWeek(5), tasks: [] },
            { day: days.SATURDAY, date: getDayOfCurrentWeek(6), tasks: [] },
            { day: days.SUNDAY, date: getDayOfCurrentWeek(7), tasks: [] },
        ],
        // next week
        [
            { day: days.MONDAY, date: getDayOfCurrentWeek(8), tasks: [] },
            { day: days.TUESDAY, date: getDayOfCurrentWeek(9), tasks: [] },
            { day: days.WEDNESDAY, date: getDayOfCurrentWeek(10), tasks: [] },
            { day: days.THURSDAY, date: getDayOfCurrentWeek(11), tasks: [] },
            { day: days.FRIDAY, date: getDayOfCurrentWeek(12), tasks: [] },
            { day: days.SATURDAY, date: getDayOfCurrentWeek(13), tasks: [] },
            { day: days.SUNDAY, date: getDayOfCurrentWeek(14), tasks: [] },
        ],
    ]);

    // ACTIONS (FUNCTIONS)

    const previousWeek = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const nextWeek = () => {
        if (count <= 2) {
            setCount(count + 1);
        }
        if (count > 2) return;
    };

    const addTask = (task: task) => {
        console.log(task);
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
                        tasks={[]}
                    />
                );
            })}
        </div>
    );
};

export default WeeklyOverview;
