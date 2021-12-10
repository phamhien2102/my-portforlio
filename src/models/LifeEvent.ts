import {Article} from "./Article";

export class LifeEvent {
    id: number = -1;
    title: string = '';
    fromDate: string = '';
    toDate: string = '';
    articles: Article[] = [];
    iconName: string = '';
}
