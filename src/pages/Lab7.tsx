import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Table,
  message,
} from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import { IMovie } from "../interfaces";

export default function Lab7() {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();

  const { data, isLoading: isTableLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3001/movies");
      return res.data as IMovie[];
    },
  });

  const { mutate: addMovie, isPending: isAddPending } = useMutation({
    mutationFn: async (values: IMovie) => {
      await axios.post("http://localhost:3001/movies", values);
    },
    onSuccess: () => {
      message.success("Thêm phim thành công!");
      form.resetFields();
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
    onError: () => message.error("Thêm phim thất bại!"),
  });

  const { mutate: deleteMovie } = useMutation({
    mutationFn: async (id: string | number) => {
      await axios.delete(`http://localhost:3001/movies/${id}`);
    },
    onSuccess: () => {
      message.success("Xóa phim thành công!");
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
    onError: () => message.error("Xóa phim thất bại!"),
  });

  const columns = [
    { title: "Title", dataIndex: "title" },
    { title: "Director", dataIndex: "director" },
    { title: "Year", dataIndex: "year" },
    {
      title: "Action",
      render: (_: any, record: IMovie) => (
        <div className="flex space-x-2">
          <Link to={`/lab7/edit/${record.id}`}>
            <Button className="bg-yellow-400 text-white border-none hover:bg-yellow-500">
              Edit
            </Button>
          </Link>
          <Popconfirm
            title="Xóa phim này?"
            onConfirm={() => record.id && deleteMovie(record.id)}
          >
            <Button danger type="primary">
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="p-8 bg-gray-50 w-full h-full overflow-y-auto grid grid-cols-1 xl:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-lg shadow xl:col-span-1 h-fit">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">Thêm Phim</h2>
        <Form
          form={form}
          layout="vertical"
          onFinish={addMovie}
          disabled={isAddPending}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Bắt buộc" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Director"
            name="director"
            rules={[{ required: true, message: "Bắt buộc" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Year"
            name="year"
            rules={[{ required: true, message: "Bắt buộc" }]}
          >
            <InputNumber className="w-full" />
          </Form.Item>
          <Form.Item
            label="Poster URL"
            name="poster"
            rules={[{ required: true, message: "Bắt buộc" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input.TextArea rows={3} />
          </Form.Item>
          <Button htmlType="submit" type="primary" loading={isAddPending} block>
            Submit
          </Button>
        </Form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow xl:col-span-2">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">Danh sách Phim</h2>
        <Table
          columns={columns}
          dataSource={data}
          rowKey="id"
          loading={isTableLoading}
          pagination={{ pageSize: 5 }}
        />
      </div>
    </div>
  );
}
