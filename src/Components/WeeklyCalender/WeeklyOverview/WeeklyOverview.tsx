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
    monday: day;
    tuesday: day;
    wednesday: day;
    thursday: day;
    friday: day;
    saturday: day;
    sunday: day;
}
interface day {
    date: string;
    tasks: task[];
}

const WeeklyOverview: React.FC<props> = ({
    setSelectedDay,
    taskFormData,
    setTaskFormData,
}) => {
    const getWeek = (): week => {
        const mon = getDayOfCurrentWeek(1);
        const tues = getDayOfCurrentWeek(2);
        const wed = getDayOfCurrentWeek(3);
        const thurs = getDayOfCurrentWeek(4);
        const fri = getDayOfCurrentWeek(5);
        const sat = getDayOfCurrentWeek(6);
        const sun = getDayOfCurrentWeek(7);
        return {
            monday: { date: mon, tasks: [] },
            tuesday: { date: tues, tasks: [] },
            wednesday: { date: wed, tasks: [] },
            thursday: { date: thurs, tasks: [] },
            friday: { date: fri, tasks: [] },
            saturday: { date: sat, tasks: [] },
            sunday: { date: sun, tasks: [] },
        };
    };

    // STATES

    const [startOfCurrentWeekString, setStartOfCurrentWeekString] =
        useState<string>(() => getStartWeekDateString());

    const [selectedWeek, setSelectedWeek] = useState<week>(() => getWeek());
    const [isModalVisible, setIsModalVisible] = useState(false);

    // ACTIONS (FUNCTIONS)

    const previousWeek = () => {
        console.log("previous");
    };

    const nextWeek = () => {
        console.log("next");
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
            <DailyOverview
                handleClick={setSelectedDay}
                day={days.MONDAY}
                date={selectedWeek.monday.date}
                tasks={selectedWeek.monday.tasks}
            />
            <DailyOverview
                handleClick={setSelectedDay}
                day={days.TUESDAY}
                date={selectedWeek.tuesday.date}
                tasks={selectedWeek.tuesday.tasks}
            />
            <DailyOverview
                handleClick={setSelectedDay}
                day={days.WEDNESDAY}
                date={selectedWeek.wednesday.date}
                tasks={selectedWeek.wednesday.tasks}
            />
            <DailyOverview
                handleClick={setSelectedDay}
                day={days.THURSDAY}
                date={selectedWeek.thursday.date}
                tasks={selectedWeek.thursday.tasks}
            />
            <DailyOverview
                handleClick={setSelectedDay}
                day={days.FRIDAY}
                date={selectedWeek.friday.date}
                tasks={selectedWeek.friday.tasks}
            />
            <DailyOverview
                handleClick={setSelectedDay}
                day={days.SATURDAY}
                date={selectedWeek.saturday.date}
                tasks={selectedWeek.saturday.tasks}
            />
            <DailyOverview
                handleClick={setSelectedDay}
                day={days.SUNDAY}
                date={selectedWeek.sunday.date}
                tasks={selectedWeek.sunday.tasks}
            />
        </div>
    );
};

export default WeeklyOverview;
