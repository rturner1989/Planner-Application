import { useState } from "react";
import { task } from "../../Library/Interfaces";
import DailyView from "./DailyView/DailyView";
import WeeklyView from "./WeeklyView/WeeklyView";
import useLocalStorage from "../../Hooks/useLocalStorage";
import ModalContainer from "../ModalContainer/ModalContainer";
import TaskEditor from "../TaskEditor/TaskEditor";

// Calender Container

const WeeklyCalender = () => {
    const [selectedDay, setSelectedDay] = useState<string>(
        new Date().toUTCString()
    );
    const [updateSelectedDate, setUpdateSelectedDate] = useState<string>(
        new Date().toUTCString()
    );

    const [taskFormData, setTaskFormData] = useLocalStorage("taskList", []);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const addTask = (task: task) => {
        setTaskFormData([...taskFormData, task]);
        setIsModalVisible(false);
    };

    return (
        <body id="weekly-calender-container">
            <WeeklyView
                setIsModalVisible={setIsModalVisible}
                setSelectedDay={setSelectedDay}
                setUpdateSelectedDate={setUpdateSelectedDate}
                taskFormData={taskFormData}
            />
            {isModalVisible && (
                <ModalContainer
                    modal={"additional-task-modal"}
                    handleClose={() => setIsModalVisible(false)}
                >
                    <TaskEditor
                        key={new Date().toUTCString()}
                        formData={undefined}
                        handleSubmit={addTask}
                        date={updateSelectedDate}
                        btnColor={"white"}
                    />
                </ModalContainer>
            )}
            <DailyView
                date={selectedDay}
                tasks={taskFormData}
                setTaskFormData={setTaskFormData}
            />
        </body>
    );
};

export default WeeklyCalender;
