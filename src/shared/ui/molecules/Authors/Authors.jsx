import { Space, Typography, Avatar } from "antd";

export const Authors = ({ authors, source, country, language }) => (
  <Space size={4} style={{ marginBottom: "20px", lineHeight: 0 }}>
    <Typography.Text style={{ color: "#fff" }} strong>
      <Avatar style={{ color: "#fff" }} src="/earth.svg" size={18} />{" "}
      {source.name}
    </Typography.Text>

    <Typography.Text style={{ color: "#fff" }} type="secondary">
      {country}{" "}
      <Avatar
        shape="square"
        style={{ color: "#fff" }}
        src="/book.svg"
        size={18}
      />{" "}
      {language}
    </Typography.Text>
    <Typography.Text style={{ color: "#fff" }}>
      {authors.join(", ")}
    </Typography.Text>
  </Space>
);
