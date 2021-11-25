import { type } from "os";
import { useState } from "react";

type category = { id: number; name: string; colour: string };
type repeat = {
    mon: boolean;
    tues: boolean;
    wed: boolean;
    thurs: boolean;
    fri: boolean;
    sat: boolean;
    sun: boolean;
};

export interface task {
    id: number;
    name: string;
    description: string;
    endDate: Date;
    // open box when selected, can choose what days the task would be repeated on e.g. mon, wed, fri.
    repeat?: repeat;
    category: category;
}

const [tasks, setTasks] = useState<task[]>();

// Example of multiple types
// const addTask = (newObj: task | string) => {
//     if (typeof newObj == "string") return;
//     if (tasks) setTasks([...tasks, newObj]);
// };

const addTask = (newObj: task) => {
    if (tasks) setTasks([...tasks, newObj]);
};
