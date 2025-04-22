import { Space, Typography } from "antd";
import { format } from "date-fns";
import { IDateReachTrafficProps } from "./DateReachTraffic.props";
import { WhiteText } from "../../atoms/WhiteText/WhiteText";

export const DateReachTraffic = ({
  date,
  reach,
  traffic,
}: IDateReachTrafficProps) => {
  const formatted = format(new Date(date), "dd MMM yyyy");
  const [day, month, year] = formatted.split(" ");
  const formatedReach = `${reach / 1000}K`;
  return (
    <Space>
      <Typography.Text style={{ color: "var(--light-grey)", fontSize: 12 }}>
        <WhiteText>{day}</WhiteText> {month} {year}
      </Typography.Text>
      <Typography.Text style={{ color: "var(--light-grey)", fontSize: 12 }}>
        <WhiteText>{formatedReach}</WhiteText> Reach
      </Typography.Text>
      <Typography.Text style={{ color: "var(--light-grey)", fontSize: 12 }}>
        Top Traffic:{" "}
        {traffic.map(({ value, count }, index) => (
          <span key={value}>
            {value} <WhiteText>{count}%</WhiteText>
            {index < traffic.length - 1 ? " " : ""}
          </span>
        ))}
      </Typography.Text>
    </Space>
  );
};
