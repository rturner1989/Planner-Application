// all functions to support time and dates
export const isDateSame = (
    firstNumber: number,
    secondNumber: number
): boolean => {
    const dateOne = new Date(firstNumber);
    const dateTwo = new Date(secondNumber);
    if (dateOne.getFullYear() !== dateTwo.getFullYear()) return false;
    if (dateOne.getMonth() !== dateTwo.getMonth()) return false;
    if (dateOne.getDate() !== dateTwo.getDate()) return false;
    return true;
};

export const getStartWeekDate = (): number => {
    const today = new Date().getDate();
    const day = new Date().getDay();
    const difference = day - (day === 0 ? -6 : 1);
    return new Date().setDate(today - difference);
};

export const addDaysToDate = (utc: number, numberOfDays: number) => {
    const start = new Date(utc).getDate();
    return new Date().setDate(start + numberOfDays);
};

export const subtractDaysFromDate = (utc: number, numberOfDays: number) => {
    const start = new Date(utc).getDate();
    return new Date().setDate(start - numberOfDays);
};
