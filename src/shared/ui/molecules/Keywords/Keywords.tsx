import { Tag, Button, Space } from "antd";
import { useState } from "react";
import { KeywordsProps } from "./KeywordsProps.props";
import { WhiteText } from "../../atoms/WhiteText/WhiteText";
import "./Keywords.css";

export const Keywords = ({ keywords, visibleCount = 3 }: KeywordsProps) => {
  const [showAll, setShowAll] = useState(false);
  const visibleKeywords = showAll ? keywords : keywords.slice(0, visibleCount);

  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <Space wrap>
      {visibleKeywords.map(({ value, count }) => (
        <Tag key={value} className="kw-tag">
          {value} <WhiteText>{count}</WhiteText>
        </Tag>
      ))}

      {keywords.length > visibleCount && (
        <Button
          style={{ color: "var( --blue)" }}
          type="link"
          size="small"
          onClick={handleToggle}
        >
          {showAll
            ? "Show Less"
            : `Show All +${keywords.length - visibleCount}`}
        </Button>
      )}
    </Space>
  );
};
