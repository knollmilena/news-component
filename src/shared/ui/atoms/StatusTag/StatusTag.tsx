import { Tag } from "antd";
import { IStatusTagProps } from "./StatusTag.props";
import "./StatusTag.css";

export const StatusTag = ({
  type = "Positive",
  color = "var(--aqua-mint)",
}: IStatusTagProps) => {
  return (
    <div className="status-tag-override">
      <Tag
        color={color}
        className="status-tag-force"
        style={{
          margin: "0 !important",
          fontSize: "10px !important",
          lineHeight: "1 !important",
          height: "18px !important",
          padding: "0 6px !important",
        }}
      >
        {type}
      </Tag>
    </div>
  );
};
