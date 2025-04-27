import { Space, Button } from 'antd';
import './MiniCard.css';
import { NewsHeader } from '../../molecules/NewsHeader/NewsHeader';
import { IMiniCardProps } from './MiniCard.props';

export const MiniCard = ({ news, duplicatesCount }: IMiniCardProps) => {
  return (
    <div className="meta-info">
      <Space className="border--blue" direction="vertical" size={4}>
        <NewsHeader news={news} />
      </Space>

      {duplicatesCount !== undefined && (
        <Button type="link" className="border btn-view">
          View Duplicates ({duplicatesCount})
        </Button>
      )}
    </div>
  );
};
