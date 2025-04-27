import { GlobalOutlined, UserOutlined } from "@ant-design/icons";
import { Space, Typography, Avatar } from "antd";

export const Authors = ({ authors, source, country, language }) => (
  <Space
    size={4}
    style={{ marginBottom: "20px", lineHeight: 0, display: "flex", gap: 10 }}
  >
    <Typography.Text style={{ color: "#fff" }}>
      <GlobalOutlined />
      {source.name ? source.name : " test"}
    </Typography.Text>

    <Typography.Text style={{ color: "#fff" }} type="secondary">
      {country}{" "}
    </Typography.Text>
    <Typography.Text style={{ color: "#fff" }} type="secondary">
      <Avatar
        shape="square"
        style={{ color: "#fff" }}
        src="/book.svg"
        size={18}
      />{" "}
      {language}
    </Typography.Text>
    <Typography.Text style={{ color: "#fff" }}>
      <UserOutlined />
      {` ${authors.join(", ")}`}
    </Typography.Text>
  </Space>
);
