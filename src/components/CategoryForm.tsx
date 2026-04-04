import { useMutation } from "@tanstack/react-query";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { ICategory } from "../interfaces";

export default function CategoryForm() {
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async (values: ICategory) => {
      await axios.post("http://localhost:3000/categories", values);
    },
    onSuccess: () => {
      toast.success("Category created successfully!");
    },
    onError: () => {
      toast.error("Failed to create category.");
    },
  });

  const onFinish = (values: ICategory) => {
    mutate(values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Title" name="title" rules={[{ required: true }]}>
        <Input placeholder="title" />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input.TextArea rows={4} placeholder="description" />
      </Form.Item>

      <Form.Item name="active" valuePropName="checked" initialValue={true}>
        <Checkbox>Active</Checkbox>
      </Form.Item>

      <Button htmlType="submit" loading={isPending} type="primary">
        Submit
      </Button>

      {isSuccess && (
        <div style={{ color: "green", marginTop: "10px" }}>
          Category created successfully!
        </div>
      )}
    </Form>
  );
}
