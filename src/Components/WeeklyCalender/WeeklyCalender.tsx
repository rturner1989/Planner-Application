import { useState } from "react";
import DailyDetail from "./DailyDetail/DailyDetail";
import WeeklyOverview from "./WeeklyOverview/WeeklyOverview";
import { days } from "../../Library/Enums";

// Calender Container

const WeeklyCalender = () => {
    const [selectedDay, setSelectedDay] = useState<days>();

    return (
        <div id="weekly-calender-container">
            <WeeklyOverview setSelectedDay={setSelectedDay} />
            {selectedDay && <DailyDetail />}
        </div>
    );
};

export default WeeklyCalender;
