import { useState } from "react";
import { days } from "../../Library/Enums";
import { data } from "../../data";
import { task } from "../../Library/Interfaces";
import DailyDetail from "./DailyDetail/DailyDetail";
import WeeklyOverview from "./WeeklyOverview/WeeklyOverview";

// Calender Container

const WeeklyCalender = () => {
    const [selectedDay, setSelectedDay] = useState<days>();
    const [taskFormData, setTaskFormData] = useState<task[]>(data);

    return (
        <div id="weekly-calender-container">
            <WeeklyOverview
                setSelectedDay={setSelectedDay}
                taskFormData={taskFormData}
                setTaskFormData={setTaskFormData}
            />
            {selectedDay && <DailyDetail />}
        </div>
    );
};

export default WeeklyCalender;
