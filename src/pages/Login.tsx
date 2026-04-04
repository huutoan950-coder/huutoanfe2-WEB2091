import { Form, Input, Button, message } from "antd";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAuthStore } from "../stores/useAuthStore";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Login = () => {
  const { setUser } = useAuthStore();
  const navigate = useNavigate();
  const isDark = useContext(ThemeContext)?.isDark;

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: any) => {
      return await axios.post("http://localhost:3000/login", values);
    },
    onSuccess: ({ data }) => {
      setUser({ user: data.user, token: data.accessToken });
      message.success("Đăng nhập thành công!");
      navigate("/");
    },
    onError: () => message.error("Sai email hoặc password!"),
  });

  return (
    <div className="flex justify-center items-start pt-10 h-full">
      <div
        className={`p-8 rounded-xl shadow-lg border w-full max-w-[400px] ${isDark ? "bg-gray-800 border-gray-700" : "bg-white"}`}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Đăng nhập (Lab 9)
        </h2>
        <Form layout="vertical" onFinish={(values) => mutate(values)}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, type: "email", message: "Nhập email hợp lệ!" },
            ]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Nhập mật khẩu!" }]}
          >
            <Input.Password size="large" />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isPending}
            block
            size="large"
          >
            Đăng nhập
          </Button>
        </Form>
        <div className="mt-6 text-center text-sm">
          Chưa có tài khoản?{" "}
          <Link
            to="/register"
            className="text-blue-500 hover:underline font-semibold"
          >
            Đăng ký ngay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
