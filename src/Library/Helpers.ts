export const getDayFromUTC = (utc: number) => {
    const date = new Date(utc);
    const string = date.toLocaleString("default", {
        day: "numeric",
        // month: "long",
        // year: "numeric",
    });
    return string;
};
