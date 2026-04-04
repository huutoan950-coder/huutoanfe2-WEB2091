import { useAuthStore } from "../stores/useAuthStore";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { Avatar, Button, Space, Switch, Tag } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

export const Header = () => {
  const { user, logout } = useAuthStore();

  const themeCtx = useContext(ThemeContext);
  if (!themeCtx) return null;

  return (
    <div
      style={{
        padding: "15px 30px",
        borderBottom: "1px solid #eee",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: themeCtx.isDark ? "#141414" : "#fff",
        color: themeCtx.isDark ? "#fff" : "#000",
      }}
    >
      <Space size="large">
        <span style={{ fontSize: 18, fontWeight: "bold" }}>
          LAB 9 - ZUSTAND
        </span>
        {user ? (
          <Space>
            <Avatar src={user.avatar} icon={<UserOutlined />} />
            <b>{user.email}</b>
            <Tag color="green">Đã đăng nhập</Tag>
          </Space>
        ) : (
          <Tag color="default">Chưa đăng nhập</Tag>
        )}
      </Space>

      <Space>
        {user && (
          <Button
            danger
            type="primary"
            size="small"
            icon={<LogoutOutlined />}
            onClick={logout}
          >
            Logout
          </Button>
        )}

        <div style={{ marginLeft: 20 }}>
          <span style={{ marginRight: 8 }}>
            {themeCtx.isDark ? "🌙" : "☀️"}
          </span>
          <Switch checked={themeCtx.isDark} onChange={themeCtx.toggleTheme} />
        </div>
      </Space>
    </div>
  );
};
