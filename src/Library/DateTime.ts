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

export const nearestFive = (dateString: string) => {
    const coeff = 1000 * 60 * 5;
    const date = new Date(dateString);
    const rounded = new Date(Math.ceil(date.getTime() / coeff) * coeff);
    return rounded.toUTCString().slice(17, 22);
};

export const increaseMinsBy15 = (dateString: string, number: number) => {
    const coeff = 1000 * 60 * 5;
    const date = new Date(dateString);
    const rounded = new Date(Math.ceil(date.getTime() / coeff) * coeff);
    const futureDate = new Date(rounded.getTime() + number * 60000);
    return futureDate.toUTCString().slice(17, 22);
};
