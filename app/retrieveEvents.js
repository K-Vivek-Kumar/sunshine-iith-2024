export const fetchEventsData = async () => {
    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbwN17tQZmiZPwxIUOHOxocsw5GQZhNqSJucC5SvefBT5mNP9wkPL1oin0gomQYirvp2/exec");
        const result = await response.json();

        result.forEach((item, index) => {
            item.href = "/";
            item.id = index + 1;
        });

        // console.log(result);
        return result;
    } catch (error) {
        // console.error("Error fetching data:", error);
        return [];
    }
};
