export interface IData_SnippetNews {
  ID: number; // идентификатор новости
  TI: string; // заголовок новости
  AB: string; // содержимое новости
  URL: string; // ссылка на новость
  DOM: string; // домен источника
  DP: string; // дата и время публикации в формате "%Y-%m-%dT%H:%M:%S"
  LANG: string; // язык новости
  REACH: number; // охват новости (количество просмотров и т.д.)
  KW: IData_TagItem[]; // массив ключевых слов (тегов)
  AU: string[]; // массив авторов новости
  CNTR: string; // страна
  CNTR_CODE: string; // код страны
  SENT: string; // сентимент новости (например, позитивный, негативный)
  TRAFFIC: IData_TrafficItem[]; // трафик из стран (детали не указаны в файле)
  FAV: string; // ссылка на иконку (например, favicon)
  HIGHLIGHTS: string[]; // блоки содержимого новости с выделенными ключевыми словами
}

export interface IData_TagItem {
  value: string; // название тега
  count: number; // количество упоминаний тега
}

export interface IData_TrafficItem {
  value: string; // название страны-источника трафика
  count: number; // объём трафика для указанной страны
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  highlights?: string[];
  keywords: IData_TagItem[];
  url: string;
  date: string;
  reach: string;
  traffic: IData_TrafficItem[];
  authors: string[];
  source: {
    name: string;
    icon?: string;
  };
  country: string;
  language: string;
}
