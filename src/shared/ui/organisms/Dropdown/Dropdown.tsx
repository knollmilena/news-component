import { Typography } from "antd";
import "./Dropdown.css";
import { IDropdownProps } from "./Dropdown.props";
import { WhiteText } from "../../atoms/WhiteText/WhiteText";

export const Dropdown = ({ count }: IDropdownProps) => {
  return (
    <div className={"drpd-footer"}>
      <Typography.Text style={{ color: "var(--light-grey)" }}>
        Duplicates: <WhiteText>{count}</WhiteText>
      </Typography.Text>
    </div>
  );
};
