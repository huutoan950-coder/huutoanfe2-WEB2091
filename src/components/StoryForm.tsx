import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { IStory, ICategory } from "../interfaces";

export default function StoryForm() {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();

  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/categories");
      return res.data as ICategory[];
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: IStory) => {
      const payload = { ...values, createdAt: new Date().toISOString() };
      await axios.post("http://localhost:3000/stories", payload);
    },
    onSuccess: () => {
      toast.success("Thêm truyện thành công!");
      form.resetFields();
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
    onError: () => {
      toast.error("Thêm truyện thất bại.");
    },
  });

  const onFinish = (values: IStory) => {
    mutate(values);
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item label="Title" name="title" rules={[{ required: true }]}>
        <Input placeholder="title" />
      </Form.Item>

      <Form.Item
        label="Category"
        name="categoryId"
        rules={[{ required: true }]}
      >
        <Select
          loading={isLoading}
          placeholder="Select a category"
          options={categories?.map((cat) => ({
            value: cat.id,
            label: cat.title,
          }))}
        />
      </Form.Item>

      <Form.Item label="Author" name="author">
        <Input placeholder="author" />
      </Form.Item>

      <Form.Item label="Image URL" name="image">
        <Input placeholder="image url" />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input.TextArea rows={4} placeholder="description" />
      </Form.Item>

      <Button htmlType="submit" loading={isPending} type="primary" block>
        Submit
      </Button>
    </Form>
  );
}
