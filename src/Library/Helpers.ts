import { isDateSame } from "./DateTime";
import { task } from "./Interfaces";

export const getDayFromUTC = (utc: number) => {
    const date = new Date(utc);
    const string = date.toLocaleString("default", {
        day: "numeric",
        // month: "long",
        // year: "numeric",
    });
    return string;
};
export const filterTasksByDate = (tasks: task[], date: string) => {
    return tasks.filter((task) => {
        if (isDateSame(task.endDate, date)) return task;
    });
};

const filterTasksByTime = (tasks: task[], time: string) => {
    // 12:00 - split string by : for both tasks.endTime and time
    // compare time to endTime index[0] (hours)
    // if time Hours is less than endTime hours then that means that task is in the future
    // parseInt

    //  time parameter is going to be the current time.
    //  anything before that time, we wont return, time after we will return.
    return tasks.filter((task) => {});
};
