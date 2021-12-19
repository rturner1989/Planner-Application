import { useState } from "react";
import DailyView from "./DailyView/DailyView";
import WeeklyView from "./WeeklyView/WeeklyView";
import useLocalStorage from "../../Hooks/useLocalStorage";
import Navbar from "./Navbar/Navbar";

// Calender Container

const WeeklyCalender = () => {
    const [selectedDay, setSelectedDay] = useState<string>(
        new Date().toUTCString()
    );
    const [taskFormData, setTaskFormData] = useLocalStorage("taskList", []);

    return (
        <div id="weekly-calender-container">
            <Navbar />
            <WeeklyView
                setSelectedDay={setSelectedDay}
                taskFormData={taskFormData}
                setTaskFormData={setTaskFormData}
            />
            <DailyView date={selectedDay} tasks={taskFormData} />
        </div>
    );
};

export default WeeklyCalender;
