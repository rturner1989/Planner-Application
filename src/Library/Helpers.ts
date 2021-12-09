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

const filterTasksByDateAndTime = (tasks: task[]) => {};
