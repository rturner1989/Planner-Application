import { isDateSame } from "./DateTime";
import { task } from "./Interfaces";
import { timeState } from "./Enums";

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
        const [hourOne, minOne] = task.endTime.split(":");
        const [hourTwo, minTwo] = time.split(":");

        if (parseInt(hourOne) > parseInt(hourTwo)) return task;
        if (parseInt(hourOne) === parseInt(hourTwo)) {
            if (parseInt(minOne) >= parseInt(minTwo)) return task;
        }
    });
};

export const filterElapsedTasks = (tasks: task[], time: string) => {
    return tasks.filter((task) => {
        const [hourOne, minOne] = task.endTime.split(":");
        const [hourTwo, minTwo] = time.split(":");

        if (parseInt(hourOne) < parseInt(hourTwo)) return task;
        if (parseInt(hourOne) === parseInt(hourTwo)) {
            if (parseInt(minOne) <= parseInt(minTwo)) return task;
        }
    });
};

export const sortTasksByStartTime = (a: string, b: string) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
};

export const isPastPresentFuture = (
    firstDate: string,
    secondDate: string
): timeState => {
    const today = new Date(firstDate);
    const comparisonDate = new Date(secondDate);

    if (today.getFullYear() < comparisonDate.getFullYear())
        return timeState.FUTURE;
    if (today.getFullYear() > comparisonDate.getFullYear())
        return timeState.PAST;

    if (today.getMonth() < comparisonDate.getMonth()) return timeState.FUTURE;
    if (today.getMonth() > comparisonDate.getMonth()) return timeState.PAST;

    if (today.getDate() < comparisonDate.getDate()) return timeState.FUTURE;
    if (today.getDate() > comparisonDate.getDate()) return timeState.PAST;
    return timeState.PRESENT;
};

export const makeID = () => {
    let text = "";
    let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 16; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
};
