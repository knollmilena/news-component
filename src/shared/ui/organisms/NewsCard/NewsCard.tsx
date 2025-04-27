import { Card, Divider } from 'antd';
import { INewsCardProps } from './NewsCard.props';
import { Keywords } from '../../molecules/Keywords/Keywords';
import { NewsHeader } from '../../molecules/NewsHeader/NewsHeader';
import './NewsCard.css';
import { TextWithKeywords } from '../../molecules/TextWithKeywords/TextWithKeywords';
import { Accordion } from '../Accordion/Accordion';

export const NewsCard = ({ news }: INewsCardProps) => {
  return (
    <Card className="news-card" hoverable>
      <div className="news-card_border">
        <NewsHeader
          date={news.DP}
          reach={news.REACH}
          traffic={news.TRAFFIC}
          authors={news.AU}
          source={news.URL}
          country={news.CNTR}
          language={news.LANG}
          title={news.TI}
        />
        <TextWithKeywords data={news} />

        <Keywords keywords={news.KW} />

        <Divider style={{ margin: '12px 0' }} />
        <a className="btn-source" href={news.URL} target="_blank" rel="noreferrer">
          Original Source
        </a>
        <Accordion news={news} count={192} />
      </div>
    </Card>
  );
};
