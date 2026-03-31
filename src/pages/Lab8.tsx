import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";
import { Button, Card, Space, Avatar, Typography, Divider, Switch } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  LoginOutlined,
  SunOutlined,
  MoonOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const Lab8 = () => {
  const userCtx = useContext(UserContext);
  const themeCtx = useContext(ThemeContext);

  if (!userCtx || !themeCtx)
    return <div className="p-10">Lỗi: Chưa bọc Provider!</div>;

  const { user, setUser } = userCtx;
  const { isDark, toggleTheme } = themeCtx;

  const handleLogin = () => {
    setUser({
      name: "Toàn Coder",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Toan",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="p-8 w-full flex justify-center">
      <Card
        style={{
          width: 500,
          borderRadius: 12,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
        title={
          <Title level={3} style={{ margin: 0 }}>
            Lab 8: Context API
          </Title>
        }
      >
        <div className="flex items-center justify-between mb-6">
          <Space size="middle">
            <Avatar
              size={64}
              src={user?.avatar}
              icon={!user && <UserOutlined />}
              style={{ backgroundColor: user ? "#87d068" : "#ccc" }}
            />
            <div>
              <Text strong style={{ fontSize: 18 }}>
                {user ? user.name : "Khách viếng thăm"}
              </Text>
              <br />
              <Text type="secondary">
                {user ? "Đã đăng nhập" : "Vui lòng đăng nhập"}
              </Text>
            </div>
          </Space>
        </div>

        <Divider />

        <div className="flex justify-between items-center mb-6">
          <Text>
            Chế độ giao diện: <b>{isDark ? "Tối (Dark)" : "Sáng (Light)"}</b>
          </Text>
          <Switch
            checked={isDark}
            onChange={toggleTheme}
            checkedChildren={<MoonOutlined />}
            unCheckedChildren={<SunOutlined />}
          />
        </div>

        <Divider />

        <Space size="middle" className="w-full justify-center">
          {!user ? (
            <Button
              type="primary"
              icon={<LoginOutlined />}
              size="large"
              onClick={handleLogin}
              className="bg-blue-600"
            >
              Đăng nhập ngay
            </Button>
          ) : (
            <Button
              danger
              icon={<LogoutOutlined />}
              size="large"
              onClick={handleLogout}
            >
              Đăng xuất
            </Button>
          )}
        </Space>
      </Card>
    </div>
  );
};

export default Lab8;
