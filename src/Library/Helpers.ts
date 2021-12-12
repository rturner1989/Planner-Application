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

export const filterTasksByTime = (tasks: task[], time: string) => {
    return tasks.filter((task) => {
        const [splitEndHour, splitEndMins] = task.endTime.split(":");
        const [splitComparisonTimeHour, splitComparisonTimeMins] =
            time.split(":");

        if (splitEndHour > splitComparisonTimeHour) return task;
        if (splitEndHour === splitComparisonTimeHour) {
            if (splitEndMins >= splitComparisonTimeMins) return task;
        }
        return task;
    });
};
