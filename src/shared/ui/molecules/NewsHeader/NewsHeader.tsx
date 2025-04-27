import { Typography } from "antd";
import { Authors } from "../Authors/Authors";
import { DateReachTraffic } from "../DateReachTraffic/DateReachTraffic";
import { INewsHeaderProps } from "./NewsHeader.props";
import { CardActions } from "../CardActions/CardActions";
import { StatusTag } from "../../atoms/StatusTag/StatusTag";
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
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <DateReachTraffic date={date} reach={reach} traffic={traffic} />
      <CardActions>
        <StatusTag />
      </CardActions>
    </div>
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
