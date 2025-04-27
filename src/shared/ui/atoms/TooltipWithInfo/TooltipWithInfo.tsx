import { Tooltip, Button } from "antd";
import { InfoOutlined } from "@ant-design/icons";
import "./TooltipWithInfo.css";

export const TooltipWithInfo = () => {
  return (
    <Tooltip title="Дополнительная информация">
      <Button
        type="text"
        className="tooltip-info"
        icon={
          <div className="tooltip-info__icon-wrapper">
            <InfoOutlined className="tooltip-info__icon" />
          </div>
        }
      />
    </Tooltip>
  );
};
