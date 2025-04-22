import { IData_TrafficItem } from "../../../../entities/news/types";

export interface IDateReachTrafficProps {
  date: string;
  reach: number;
  traffic: IData_TrafficItem[];
}
