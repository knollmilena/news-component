import { CustomCheckbox } from "../../atoms/Checkbox/Checkbox";
import { TooltipWithInfo } from "../../atoms/TooltipWithInfo/TooltipWithInfo";
import "./CardActions.css";
import { CardActionsProps } from "./CardActions.props";

export const CardActions = ({ children }: CardActionsProps) => {
  return (
    <div className="card-actions">
      {children}
      <TooltipWithInfo />
      <CustomCheckbox />
    </div>
  );
};
