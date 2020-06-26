export class DateUtil {
    public static parseStringIntoDateObj(isoDateString: string) {
        const dateTimeArray = isoDateString.split("T");
        const date = dateTimeArray[0].trim().split("-");
        const time = dateTimeArray[1].trim().split(":");

        const year = parseInt(date[0], 10);
        const month = parseInt(date[0], 10);
        const day = parseInt(date[0], 10);

        const hour = parseInt(time[0], 10);
        const min = parseInt(time[1], 10);
        const sec = parseInt(time[2], 10);

        return new Date(year, month, day, hour, min, sec);
    }
}