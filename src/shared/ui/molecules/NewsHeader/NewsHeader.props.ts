import { IData_TrafficItem } from "../../../../entities/news/types";

export interface INewsHeaderProps {
  date: string;
  reach: number;
  traffic: IData_TrafficItem[];
  authors: string[];
  source: string;
  country: string;
  language: string;
  title: string;
}
