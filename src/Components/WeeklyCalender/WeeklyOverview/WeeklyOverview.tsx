import React, { useState } from "react";
import { data } from "../../../data";
import { days } from "../../../Library/Enums";
import {
    isDateSame,
    getStartWeekDate,
    addDaysToDate,
    subtractDaysFromDate,
} from "../../../Library/DateTime";
import { task } from "../../../Library/Interfaces";
import DailyOverview from "./DailyOverview/DailyOverview";
import ModalContainer from "../../ModalContainer/ModalContainer";
import TaskEditor from "../../TaskEditor/TaskEditor";
import { useCalenderContext } from "../../Context/CalenderContext";

interface props {
    setSelectedDay: React.Dispatch<React.SetStateAction<days | undefined>>;
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
    date: number;
    tasks: task[];
}

const WeeklyOverview: React.FC<props> = ({ setSelectedDay }) => {
    // const { setTaskFormData } = useCalenderContext();

    const getWeek = (startDate: number): week => {
        const tues = addDaysToDate(startDate, 1);
        const wed = addDaysToDate(startDate, 2);
        const thurs = addDaysToDate(startDate, 3);
        const fri = addDaysToDate(startDate, 4);
        const sat = addDaysToDate(startDate, 5);
        const sun = addDaysToDate(startDate, 6);
        return {
            monday: { date: startDate, tasks: filterByDate(data, startDate) },
            tuesday: { date: tues, tasks: filterByDate(data, tues) },
            wednesday: { date: wed, tasks: filterByDate(data, wed) },
            thursday: { date: thurs, tasks: filterByDate(data, thurs) },
            friday: { date: fri, tasks: filterByDate(data, fri) },
            saturday: { date: sat, tasks: filterByDate(data, sat) },
            sunday: { date: sun, tasks: filterByDate(data, sun) },
        };
    };

    const filterByDate = (tasks: task[], date: number): task[] => {
        return tasks.filter((item) => {
            if (isDateSame(item.endDate, date)) return item;
        });
    };

    // STATES

    const [startOfCurrentWeek, setStartOfCurrentWeek] = useState<number>(() =>
        getStartWeekDate()
    );
    const [selectedWeek, setSelectedWeek] = useState<week>(() =>
        getWeek(getStartWeekDate())
    );

    const [isModalVisible, setIsModalVisible] = useState(false);

    // ACTIONS (FUNCTIONS)

    const previousWeek = () => {
        const startMonday = new Date(startOfCurrentWeek).getDate();
        const currentMonday = new Date(selectedWeek.monday.date).getDate();
        if (currentMonday < startMonday) return;
        const newMonday = subtractDaysFromDate(selectedWeek.monday.date, 7);
        setSelectedWeek(getWeek(newMonday));
    };

    const nextWeek = () => {
        const startMonday = new Date(startOfCurrentWeek).getDate();
        const currentMonday = new Date(selectedWeek.monday.date).getDate();
        if (currentMonday > startMonday) return;
        const newMonday = addDaysToDate(selectedWeek.monday.date, 7);
        setSelectedWeek(getWeek(newMonday));
    };

    const addTask = (task: task) => {
        console.log(task);
    };

    return (
        <div className="weekly-overview-container">
            <button onClick={previousWeek}>prev</button>
            <button onClick={nextWeek}>next</button>
            <button onClick={() => setIsModalVisible(true)}>Add</button>
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
            {isModalVisible && (
                <ModalContainer handleClose={() => setIsModalVisible(false)}>
                    <TaskEditor formData={undefined} handleSubmit={addTask} />
                </ModalContainer>
            )}
        </div>
    );
};

export default WeeklyOverview;
