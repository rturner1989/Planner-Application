import { useState } from "react";
import { days } from "../../Library/Enums";
import DailyDetail from "./DailyDetail/DailyDetail";
import WeeklyOverview from "./WeeklyOverview/WeeklyOverview";

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
