import { useState } from "react";
import { days } from "../../Library/Enums";
import DailyDetail from "./DailyDetail/DailyDetail";
import WeeklyOverview from "./WeeklyOverview/WeeklyOverview";
import useLocalStorage from "../../Hooks/useLocalStorage";

// Calender Container

const WeeklyCalender = () => {
    const [selectedDay, setSelectedDay] = useState<days>();
    const [taskFormData, setTaskFormData] = useLocalStorage("taskList", []);

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
