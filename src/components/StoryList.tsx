import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Image, Input, Popconfirm, Spin, Table } from "antd";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { IStory } from "../interfaces";

export default function StoryList() {
  const [keyword, setKeyword] = useState("");
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3001/stories");
      return res.data as IStory[];
    },
  });

  const { mutate: deleteStory } = useMutation({
    mutationFn: async (id: string | number) => {
      await axios.delete(`http://localhost:3001/stories/${id}`);
    },
    onSuccess: () => {
      toast.success("Xóa truyện thành công!");
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
    onError: () => {
      toast.error("Xóa thất bại!");
    },
  });

  const filteredData = data?.filter((item) =>
    item.title.toLowerCase().includes(keyword.toLowerCase()),
  );

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      render: (url: string) =>
        url ? <Image src={url} width={60} /> : <span>Không ảnh</span>,
    },
    {
      title: "Tên truyện",
      dataIndex: "title",
    },
    {
      title: "Tác giả",
      dataIndex: "author",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (date: string) =>
        date ? new Date(date).toLocaleDateString("vi-VN") : "N/A",
    },
    {
      title: "Action",
      render: (_: any, record: IStory) => (
        <div className="flex space-x-2">
          <Link to={`/lab6/edit/${record.id}`}>
            <Button className="bg-yellow-400 text-white border-none hover:bg-yellow-500">
              Sửa
            </Button>
          </Link>
          <Popconfirm
            title="Bạn có chắc chắn muốn xóa truyện này?"
            onConfirm={() => record.id && deleteStory(record.id)}
            okText="Có"
            cancelText="Không"
          >
            <Button danger type="primary">
              Xóa
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  if (isLoading)
    return (
      <div className="flex justify-center p-8">
        <Spin size="large" />
      </div>
    );
  if (isError)
    return <p className="text-red-500 text-center">Lỗi tải dữ liệu</p>;

  return (
    <div className="space-y-4">
      <Input.Search
        placeholder="Tìm kiếm theo tên truyện..."
        allowClear
        enterButton
        onChange={(e) => setKeyword(e.target.value)}
        className="w-full max-w-md"
      />
      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey="id"
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
}
