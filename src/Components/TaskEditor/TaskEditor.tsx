import React from "react";

const TaskEditor = () => {
    return (
        <form>
            <label htmlFor="">
                Title:
                <input type="text" />
            </label>
            <label htmlFor="">
                Description:
                <textarea cols={30} rows={6}></textarea>
            </label>
            <label htmlFor="">
                Date:
                <input type="date" />
            </label>
            <label htmlFor="">
                Start Time:
                <input type="time" />
            </label>
            <label htmlFor="">
                End Time:
                <input type="time" />
            </label>
            <label htmlFor="">
                Repeat:
                <select name="" id="">
                    <option value="">Monday</option>
                    <option value="">Tuesday</option>
                    <option value="">Wednesday</option>
                    <option value="">Thursday</option>
                    <option value="">Friday</option>
                    <option value="">Saturday</option>
                    <option value="">Sunday</option>
                </select>
            </label>
            <label htmlFor="">
                Category:
                <select name="" id="">
                    <option value="">Task</option>
                    <option value="">Appointment</option>
                    <option value="">To Do</option>
                </select>
            </label>
            <button>Save</button>
        </form>
    );
};

export default TaskEditor;
