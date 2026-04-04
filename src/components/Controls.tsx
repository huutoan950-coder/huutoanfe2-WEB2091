import { useAuthStore } from "../stores/useAuthStore";
import { Button, Space } from "antd";

export const Controls = () => {
  const { user, setUser, logout } = useAuthStore();

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <Space>
        {!user ? (
          <Button
            type="primary"
            onClick={() =>
              setUser({
                user: {
                  name: "Toàn Coder",
                  email: "toan@fpt.edu.vn",
                  avatar: "https://i.pravatar.cc/150?u=toan",
                },
                token: "fake-jwt-token-lab-9",
              })
            }
          >
            Login Giả Lập (Zustand)
          </Button>
        ) : (
          <Button danger onClick={logout}>
            Logout (Zustand)
          </Button>
        )}
      </Space>
    </div>
  );
};
