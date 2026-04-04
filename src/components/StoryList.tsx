import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Button,
  Image,
  Popconfirm,
  Spin,
  Input,
  Space,
  Tag,
} from "antd";
import { useCRUDStory } from "../hooks/useCRUDStory";
import { IStory } from "../interfaces";

export default function StoryList() {
  const [keyword, setKeyword] = useState("");
  const { list, remove } = useCRUDStory();

  const filteredData = useMemo(() => {
    return list.data?.filter((item: IStory) =>
      item.title.toLowerCase().includes(keyword.toLowerCase()),
    );
  }, [list.data, keyword]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: 70,
      align: "center" as const,
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      width: 100,
      render: (url: string) => (
        <Image
          src={url}
          width={60}
          className="rounded shadow-sm"
          fallback="https://placehold.co/60x80?text=No+Cover"
        />
      ),
    },
    {
      title: "Thông tin truyện",
      key: "info",
      render: (_: any, record: IStory) => (
        <div className="space-y-1">
          <div className="font-bold text-blue-700">{record.title}</div>
          <div className="text-xs text-gray-500">
            Tác giả: <Tag color="blue">{record.author}</Tag>
          </div>
        </div>
      ),
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      ellipsis: true, // Tự động rút gọn nếu mô tả quá dài
      className: "text-gray-600 italic",
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      width: 120,
      render: (date: string) =>
        date ? new Date(date).toLocaleDateString("vi-VN") : "---",
    },
    {
      title: "Thao tác",
      width: 150,
      align: "right" as const,
      render: (_: any, record: IStory) => (
        <Space>
          <Link to={`/lab10/edit/${record.id}`}>
            {" "}
            {/* Toàn lưu ý check lại route edit của Lab 10 nhé */}
            <Button size="small" type="primary" ghost>
              Sửa
            </Button>
          </Link>
          <Popconfirm
            title="Xóa truyện này?"
            description="Dữ liệu sẽ không thể khôi phục."
            onConfirm={() => record.id && remove.mutate(record.id)}
            okText="Xóa luôn"
            cancelText="Hủy"
            okButtonProps={{ danger: true, loading: remove.isPending }}
          >
            <Button size="small" danger>
              Xóa
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  if (list.isLoading)
    return (
      <div className="py-20 text-center">
        <Spin size="large" tip="Đang tải danh sách..." />
      </div>
    );

  if (list.isError)
    return (
      <div className="p-10 bg-red-50 text-red-500 rounded-lg text-center font-bold">
        ⚠️ Không thể kết nối đến máy chủ. Toàn kiểm tra lại cổng 3000 nhé!
      </div>
    );

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md border border-gray-100 dark:border-gray-800">
      <div className="mb-6 flex justify-between items-center">
        <Input.Search
          placeholder="Tìm tên truyện hoặc tác giả..."
          allowClear
          enterButton
          onChange={(e) => setKeyword(e.target.value)}
          className="max-w-md"
          size="large"
        />
        <div className="text-gray-400 text-xs">
          Tìm thấy <b>{filteredData?.length || 0}</b> kết quả
        </div>
      </div>

      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey="id"
        pagination={{
          pageSize: 5,
          showTotal: (total) => `Tổng cộng ${total} truyện`,
          position: ["bottomCenter"],
        }}
        bordered={false}
        className="custom-table"
      />
    </div>
  );
}
