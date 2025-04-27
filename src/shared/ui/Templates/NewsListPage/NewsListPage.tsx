import { Row, ConfigProvider } from 'antd';
import { NewsCard } from '../../organisms/NewsCard/NewsCard';
import { INewsListPageProps } from './NewsListPage.props';

export const NewsListPage = ({ news }: INewsListPageProps) => (
  <ConfigProvider
    theme={{
      components: {
        Card: {
          colorBgContainer: 'var(--gradient-card)',
          colorBorder: 'transparent',
          borderRadiusLG: 0,
          boxShadow: 'none',
          motionDurationMid: '0s',
          motionDurationFast: '0s',
        },
      },
    }}
  >
    <a href="https://github.com/knollmilena/news-component.git" target="_blank" rel="noreferrer">
      Ссылка на код
    </a>
    <Row gutter={[16, 16]}>
      {news.map((item) => (
        <NewsCard news={item} />
      ))}
    </Row>
  </ConfigProvider>
);
