import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";
import { Avatar, Button, Space, Switch } from "antd";

export const Header = () => {
  const userCtx = useContext(UserContext);
  const themeCtx = useContext(ThemeContext);
  if (!userCtx || !themeCtx) return null;

  return (
    <div
      style={{
        padding: 20,
        borderBottom: "1px solid #ccc",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Space>
        {userCtx.user ? (
          <>
            <Avatar src={userCtx.user.avatar} /> <b>{userCtx.user.name}</b>
          </>
        ) : (
          "Chưa đăng nhập"
        )}
      </Space>
      <Space>
        <span>{themeCtx.isDark ? "Dark Mode" : "Light Mode"}</span>
        <Switch checked={themeCtx.isDark} onChange={themeCtx.toggleTheme} />
      </Space>
    </div>
  );
};

export const Controls = () => {
  const userCtx = useContext(UserContext);
  if (!userCtx) return null;

  return (
    <div style={{ padding: 20 }}>
      <Space>
        <Button
          type="primary"
          onClick={() =>
            userCtx.setUser({
              name: "Toàn Coder",
              avatar: "https://i.pravatar.cc/150?u=toan",
            })
          }
        >
          Login
        </Button>
        <Button danger onClick={() => userCtx.setUser(null)}>
          Logout
        </Button>
      </Space>
    </div>
  );
};
