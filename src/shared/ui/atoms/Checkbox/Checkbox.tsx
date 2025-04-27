import { useState } from "react";
import { ICustomCheckboxProps } from "./Checkbox.props";
import "./Checkbox.css";

export const CustomCheckbox = ({
  checked = false,
  onChange,
}: ICustomCheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  const checkboxClasses = `checkbox ${isChecked ? "checkbox--checked" : ""}`;

  return (
    <div className={checkboxClasses} onClick={handleClick}>
      {isChecked && (
        <svg className="checkbox__icon" viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </div>
  );
};
