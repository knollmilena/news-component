import { Space, Button } from "antd";
import "./MiniCard.css";
import { NewsHeader } from "../../molecules/NewsHeader/NewsHeader";
import { IMiniCardProps } from "./MiniCard.props";

export const MiniCard = ({ news, duplicatesCount }: IMiniCardProps) => {
  return (
    <div className="meta-info">
      <Space className="border--blue" direction="vertical" size={4}>
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
      </Space>

      {duplicatesCount !== undefined && (
        <Button type="link" className="border btn-view">
          View Duplicates ({duplicatesCount})
        </Button>
      )}
    </div>
  );
};
