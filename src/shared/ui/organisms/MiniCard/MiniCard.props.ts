import { IData_SnippetNews } from "../../../../entities/news/types";

export interface IMiniCardProps {
  news: IData_SnippetNews;
  duplicatesCount?: number;
}
