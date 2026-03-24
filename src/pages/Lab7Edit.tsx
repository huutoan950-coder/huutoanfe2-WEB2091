import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, InputNumber, Spin, message } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IMovie } from "../interfaces";

export default function Lab7Edit() {
  const [form] = Form.useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: movie, isLoading } = useQuery({
    queryKey: ["movie", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3001/movies/${id}`);
      return res.data as IMovie;
    },
    enabled: !!id,
  });

  useEffect(() => {
    if (movie) form.setFieldsValue(movie);
  }, [movie, form]);

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: IMovie) => {
      await axios.put(`http://localhost:3001/movies/${id}`, values);
    },
    onSuccess: () => {
      message.success("Cập nhật phim thành công!");
      queryClient.invalidateQueries({ queryKey: ["movies"] });
      navigate("/lab7");
    },
    onError: () => message.error("Cập nhật thất bại!"),
  });

  if (isLoading)
    return (
      <div className="flex justify-center p-8">
        <Spin size="large" />
      </div>
    );

  return (
    <div className="p-8 bg-gray-50 w-full h-full overflow-y-auto">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">Sửa Phim</h2>
        <Form
          form={form}
          layout="vertical"
          onFinish={mutate}
          disabled={isLoading || isPending}
        >
          <Form.Item label="Title" name="title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Director"
            name="director"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Year" name="year" rules={[{ required: true }]}>
            <InputNumber className="w-full" />
          </Form.Item>
          <Form.Item label="Poster URL" name="poster">
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input.TextArea rows={4} />
          </Form.Item>
          <Button htmlType="submit" type="primary" loading={isPending} block>
            Cập nhật
          </Button>
        </Form>
      </div>
    </div>
  );
}
