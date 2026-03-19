import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { IStory, ICategory } from "../interfaces";

export default function StoryForm() {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3001/categories");
      return res.data as ICategory[];
    },
  });

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async (values: IStory) => {
      await axios.post("http://localhost:3001/stories", values);
    },
    onSuccess: () => {
      toast.success("Story created successfully!");
    },
    onError: () => {
      toast.error("Failed to create story.");
    },
  });

  const onFinish = (values: IStory) => {
    mutate(values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
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

      <Button htmlType="submit" loading={isPending} type="primary">
        Submit
      </Button>

      {isSuccess && (
        <div style={{ color: "green", marginTop: "10px" }}>
          Story created successfully!
        </div>
      )}
    </Form>
  );
}
