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
    id: number;
    name: string;
    description: string;
    endDate: number;
    startTime?: string;
    endTime?: string;
    // repeat?: repeat;
    // category: category;
}
