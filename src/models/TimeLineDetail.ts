import {Project} from "./Project";

export class TimeLineDetail {
    id: number = -1;
    title: string = '';
    fromDate: string = '';
    toDate: string = '';
    projects: Project[] = [];
}
