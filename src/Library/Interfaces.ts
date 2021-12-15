export type category = { id: number; name: string; colour: string };

export type repeat = {
    mon: boolean;
    tues: boolean;
    wed: boolean;
    thurs: boolean;
    fri: boolean;
    sat: boolean;
    sun: boolean;
};

export interface task {
    id: string;
    name: string;
    description: string;
    endDate: string;
    startTime: string;
    endTime: string;
    color: string;
}
