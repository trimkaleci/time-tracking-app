import { DateUtil } from '../utils/date.utils';


export class User {
    email: string;
    start: string;
    end: string;

    //startTimeDisplay: String;
    //endTimeDisplay: String;

    // This function used for testing only - not any effect at the current implementation
   /* public processingAfterPropertiesSet(){
        const startWorkTimeDateObj = DateUtil.parseStringIntoDateObj(this.start);
        const endWorkTimeDateObj = DateUtil.parseStringIntoDateObj(this.end);

        this.startTimeDisplay = startWorkTimeDateObj.toString();
        this.endTimeDisplay = endWorkTimeDateObj.toString();

        return this;*/
}
