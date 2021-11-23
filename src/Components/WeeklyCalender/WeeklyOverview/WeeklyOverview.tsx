import React, { useState } from "react";
import { data } from "../../../data";
import { days } from "../../../Library/Enums";
import DailyOverview from "./DailyOverview/DailyOverview";

interface props {
    setSelectedDay: React.Dispatch<React.SetStateAction<days | undefined>>;
}

const WeeklyOverview: React.FC<props> = ({ setSelectedDay }) => {
    const getStartWeekDate = (): number => {
        const today = new Date().getDate();
        const day = new Date().getDay();
        const difference = day - (day === 0 ? -6 : 1);
        return new Date().setDate(today - difference);
    };

    const [startOfCurrentWeek, setStartOfCurrentWeek] = useState<number>(() =>
        getStartWeekDate()
    );
    const [selectedMonday, setSelectedMonday] = useState<number>(() =>
        getStartWeekDate()
    );

    const addDaysToDate = (utc: number, numberOfDays: number) => {
        const start = new Date(utc).getDate();
        return new Date().setDate(start + numberOfDays);
    };

    const subtractDaysFromDate = (utc: number, numberOfDays: number) => {
        const start = new Date(utc).getDate();
        return new Date().setDate(start - numberOfDays);
    };

    const previousWeek = () => {
        const startMonday = new Date(startOfCurrentWeek).getDate();
        const currentMonday = new Date(selectedMonday).getDate();
        if (currentMonday < startMonday) return;
        const newWeek = subtractDaysFromDate(selectedMonday, 7);
        setSelectedMonday(newWeek);
    };

    const nextWeek = () => {
        const startMonday = new Date(startOfCurrentWeek).getDate();
        const currentMonday = new Date(selectedMonday).getDate();
        if (currentMonday > startMonday) return;
        const newWeek = addDaysToDate(selectedMonday, 7);
        setSelectedMonday(newWeek);
    };

    return (
        <div className="weekly-overview-container">
            <button onClick={previousWeek}>prev</button>
            <button onClick={nextWeek}>next</button>
            <DailyOverview
                day={days.MONDAY}
                date={selectedMonday}
                tasks={data.filter((item) => {
                    const date = new Date(item.endDate);
                    const todaysDate = new Date(selectedMonday);
                    if (date.getFullYear() !== todaysDate.getFullYear()) return;
                    if (date.getMonth() !== todaysDate.getMonth()) return;
                    if (date.getDay() === todaysDate.getDay()) return item;
                })}
            />
            <DailyOverview
                day={days.TUESDAY}
                date={addDaysToDate(selectedMonday, 1)}
                tasks={data.filter((item) => {
                    const date = new Date(item.endDate);
                    const todaysDate = new Date(
                        addDaysToDate(selectedMonday, 1)
                    );
                    if (date.getFullYear() !== todaysDate.getFullYear()) return;
                    if (date.getMonth() !== todaysDate.getMonth()) return;
                    if (date.getDay() === todaysDate.getDay()) return item;
                })}
            />
            <DailyOverview
                day={days.WEDNESDAY}
                date={addDaysToDate(selectedMonday, 2)}
                tasks={data.filter((item) => {
                    const date = new Date(item.endDate);
                    const todaysDate = new Date(
                        addDaysToDate(selectedMonday, 2)
                    );
                    if (date.getFullYear() !== todaysDate.getFullYear()) return;
                    if (date.getMonth() !== todaysDate.getMonth()) return;
                    if (date.getDay() === todaysDate.getDay()) return item;
                })}
            />
            <DailyOverview
                day={days.THURSDAY}
                date={addDaysToDate(selectedMonday, 3)}
                tasks={data.filter((item) => {
                    const date = new Date(item.endDate);
                    const todaysDate = new Date(
                        addDaysToDate(selectedMonday, 3)
                    );
                    if (date.getFullYear() !== todaysDate.getFullYear()) return;
                    if (date.getMonth() !== todaysDate.getMonth()) return;
                    if (date.getDay() === todaysDate.getDay()) return item;
                })}
            />
            <DailyOverview
                day={days.FRIDAY}
                date={addDaysToDate(selectedMonday, 4)}
                tasks={data.filter((item) => {
                    const date = new Date(item.endDate);
                    const todaysDate = new Date(
                        addDaysToDate(selectedMonday, 4)
                    );
                    if (date.getFullYear() !== todaysDate.getFullYear()) return;
                    if (date.getMonth() !== todaysDate.getMonth()) return;
                    if (date.getDay() === todaysDate.getDay()) return item;
                })}
            />
            <DailyOverview
                day={days.SATURDAY}
                date={addDaysToDate(selectedMonday, 5)}
                tasks={data.filter((item) => {
                    const date = new Date(item.endDate);
                    const todaysDate = new Date(
                        addDaysToDate(selectedMonday, 5)
                    );
                    if (date.getFullYear() !== todaysDate.getFullYear()) return;
                    if (date.getMonth() !== todaysDate.getMonth()) return;
                    if (date.getDay() === todaysDate.getDay()) return item;
                })}
            />
            <DailyOverview
                day={days.SUNDAY}
                date={addDaysToDate(selectedMonday, 6)}
                tasks={data.filter((item) => {
                    const date = new Date(item.endDate);
                    const todaysDate = new Date(
                        addDaysToDate(selectedMonday, 6)
                    );
                    if (date.getFullYear() !== todaysDate.getFullYear()) return;
                    if (date.getMonth() !== todaysDate.getMonth()) return;
                    if (date.getDay() === todaysDate.getDay()) return item;
                })}
            />
        </div>
    );
};

export default WeeklyOverview;
