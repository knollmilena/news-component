import { IWhiteTextProps } from "./WhiteText.props";

export const WhiteText = ({ children, className, style }: IWhiteTextProps) => {
  return (
    <span style={{ color: "white", ...style }} className={className}>
      {children}
    </span>
  );
};
