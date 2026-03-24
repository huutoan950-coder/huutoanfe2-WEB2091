import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, Select, Spin, message } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ICategory, IStory } from "../interfaces";

export default function EditStory() {
  const [form] = Form.useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3001/categories");
      return res.data as ICategory[];
    },
  });

  const { data: storyDetail, isLoading: isStoryLoading } = useQuery({
    queryKey: ["story", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3001/stories/${id}`);
      return res.data as IStory;
    },
    enabled: !!id,
  });

  useEffect(() => {
    if (storyDetail) {
      form.setFieldsValue(storyDetail);
    }
  }, [storyDetail, form]);

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: IStory) => {
      await axios.patch(`http://localhost:3001/stories/${id}`, values);
    },
    onSuccess: () => {
      message.success("Cập nhật thành công");
      queryClient.invalidateQueries({ queryKey: ["stories"] });
      navigate("/lab5");
    },
    onError: () => {
      message.error("Cập nhật thất bại");
    },
  });

  if (isStoryLoading)
    return (
      <div className="flex justify-center p-8">
        <Spin size="large" />
      </div>
    );

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={mutate}
      disabled={isStoryLoading || isPending}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Nhập tên truyện" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Category"
        name="categoryId"
        rules={[{ required: true }]}
      >
        <Select
          options={categories?.map((cat) => ({
            value: cat.id,
            label: cat.title,
          }))}
        />
      </Form.Item>

      <Form.Item
        label="Author"
        name="author"
        rules={[{ required: true, message: "Nhập tên tác giả" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Image URL" name="image">
        <Input />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input.TextArea rows={4} />
      </Form.Item>

      <Button htmlType="submit" loading={isPending} type="primary" block>
        Cập nhật
      </Button>
    </Form>
  );
}
