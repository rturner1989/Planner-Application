// all functions to support time and dates
export const isDateSame = (
    firstNumber: string,
    secondNumber: string
): boolean => {
    const dateOne = new Date(firstNumber);
    const dateTwo = new Date(secondNumber);
    if (dateOne.getFullYear() !== dateTwo.getFullYear()) return false;
    if (dateOne.getMonth() !== dateTwo.getMonth()) return false;
    if (dateOne.getDate() !== dateTwo.getDate()) return false;

    return true;
};
export const getStartWeekDateString = (): string => {
    // get current date
    const currentDate = new Date();
    // get start of current week (monday)
    const firstday = new Date(
        currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 1)
    ).toUTCString();
    return firstday;
};
export const getDayOfCurrentWeek = (numberOfDays: number) => {
    const currentDate = new Date();
    const dayOfWeek = new Date(
        currentDate.setDate(
            currentDate.getDate() - currentDate.getDay() + numberOfDays
        )
    ).toUTCString();
    return dayOfWeek;
};
