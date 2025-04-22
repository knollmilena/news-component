import { Typography } from "antd";
import { Authors } from "../Authors/Authors";
import { DateReachTraffic } from "../DateReachTraffic/DateReachTraffic";
import { INewsHeaderProps } from "./NewsHeader.props";
const { Title } = Typography;

export const NewsHeader = ({
  date,
  reach,
  traffic,
  authors,
  source,
  country,
  language,
  title,
}: INewsHeaderProps) => (
  <div>
    <DateReachTraffic date={date} reach={reach} traffic={traffic} />
    <Title level={4} style={{ color: "var(--blue)", marginTop: 0 }}>
      {title}
    </Title>
    <Authors
      authors={authors}
      source={source}
      country={country}
      language={language}
    />
  </div>
);
