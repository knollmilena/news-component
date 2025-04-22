import { useState } from "react";
import { Button } from "antd";
import "./TextWithKeywords.css";
import { ITextWithKeywordsProps } from "./TextWithKeywords.props";

export const TextWithKeywords = ({
  data,
  maxPreviewLines = 3,
}: ITextWithKeywordsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const highlightKeywords = (text: string) => {
    if (!data.KW) return text;

    const keywords = data.KW.map((kw) => kw.value);
    const regex = new RegExp(`(${keywords.join("|")})`, "gi");

    return text.split(regex).map((part, index) => {
      const isKeyword = keywords.some(
        (kw) => kw.toLowerCase() === part.toLowerCase()
      );
      return isKeyword ? (
        <span key={index} className={"keyword"}>
          {part}
        </span>
      ) : (
        part
      );
    });
  };

  return (
    <div className="text-with-keywords">
      <div
        className={`text-content ${!isExpanded ? "collapsed" : ""}`}
        style={{
          WebkitLineClamp: !isExpanded ? maxPreviewLines : "unset",
        }}
      >
        {highlightKeywords(
          isExpanded ? data.AB : `${data.AB.slice(0, 250)}...`
        )}
      </div>

      <Button
        type="link"
        onClick={() => setIsExpanded(!isExpanded)}
        className="toggle-btn"
      >
        {isExpanded ? "Show less ▲" : "Show more ▼"}
      </Button>
    </div>
  );
};
