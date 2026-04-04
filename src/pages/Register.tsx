import { Form, Input, Button, message } from "antd";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAuthStore } from "../stores/useAuthStore";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Register = () => {
  const { setUser } = useAuthStore();
  const navigate = useNavigate();
  const isDark = useContext(ThemeContext)?.isDark;

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: any) => {
      return await axios.post("http://localhost:3000/register", values);
    },
    onSuccess: ({ data }) => {
      setUser({ user: data.user, token: data.accessToken });
      message.success("Đăng ký thành công!");
      navigate("/");
    },
    onError: () => message.error("Đăng ký thất bại!"),
  });

  return (
    <div className="flex justify-center items-start pt-10 h-full">
      <div
        className={`p-8 rounded-xl shadow-lg border w-full max-w-[400px] ${isDark ? "bg-gray-800 border-gray-700" : "bg-white"}`}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Đăng ký (Lab 9)</h2>
        <Form layout="vertical" onFinish={(values) => mutate(values)}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Nhập tên!" }]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: "email", message: "Nhập email!" }]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, min: 6, message: "Tối thiểu 6 ký tự!" }]}
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
            Đăng ký
          </Button>
        </Form>
        <div className="mt-6 text-center text-sm">
          Đã có tài khoản?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:underline font-semibold"
          >
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
