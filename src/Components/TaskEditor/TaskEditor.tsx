import React from "react";
import { useCalenderContext } from "../Context/CalenderContext";

const TaskEditor = () => {
    const { taskFormData, setTaskFormData } = useCalenderContext();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (typeof e.currentTarget.value !== "string") return;
        setTaskFormData({
            ...taskFormData,
            title: e.currentTarget.value,
            [e.target.name]: e.currentTarget.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(taskFormData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">
                    Title:
                    <input type="text" name="title" onChange={handleChange} />
                </label>
                <label htmlFor="">
                    Description:
                    <input
                        type="textarea"
                        name="description"
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="">
                    Date:
                    <input type="date" name="endDate" onChange={handleChange} />
                </label>
                <label htmlFor="">
                    Start Time:
                    <input
                        type="time"
                        name="startTime"
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="">
                    End Time:
                    <input type="time" name="endTime" onChange={handleChange} />
                </label>
            </div>
            {/* <div>
                <p>Repeat:</p>
                <label htmlFor="">
                    Monday
                    <input type="checkbox" />
                </label>
                <label htmlFor="">
                    Tuesday
                    <input type="checkbox" />
                </label>
                <label htmlFor="">
                    Wednesday
                    <input type="checkbox" />
                </label>
                <label htmlFor="">
                    Thursday
                    <input type="checkbox" />
                </label>
                <label htmlFor="">
                    Friday
                    <input type="checkbox" />
                </label>
                <label htmlFor="">
                    Saturday
                    <input type="checkbox" />
                </label>
                <label htmlFor="">
                    Sunday
                    <input type="checkbox" />
                </label>
            </div>
            <div>
                <label htmlFor="">
                    Category:
                    <select name="" id="">
                        <option value="">Task</option>
                        <option value="">Appointment</option>
                        <option value="">To Do</option>
                    </select>
                </label>
            </div> */}
            <button type="submit">Save</button>
        </form>
    );
};

export default TaskEditor;
