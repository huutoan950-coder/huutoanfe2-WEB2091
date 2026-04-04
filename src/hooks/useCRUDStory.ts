import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { IStory, IStoryInput } from "../interfaces";

const API_URL = "http://localhost:3000/stories";

export const useCRUDStory = () => {
  const queryClient = useQueryClient();

  const refreshList = () =>
    queryClient.invalidateQueries({ queryKey: ["stories"] });

  const list = useQuery<IStory[]>({
    queryKey: ["stories"],
    queryFn: async () => (await axios.get(API_URL)).data,
  });

  const add = useMutation({
    mutationFn: (data: IStoryInput) => axios.post(API_URL, data),
    onSuccess: () => {
      toast.success("Thêm truyện thành công!");
      refreshList();
    },
  });

  const update = useMutation({
    mutationFn: ({ id, data }: { id: string | number; data: IStoryInput }) =>
      axios.put(`${API_URL}/${id}`, data),
    onSuccess: () => {
      toast.success("Cập nhật thành công!");
      refreshList();
    },
  });

  const remove = useMutation({
    mutationFn: (id: string | number) => axios.delete(`${API_URL}/${id}`),
    onSuccess: () => {
      toast.success("Đã xóa truyện!");
      refreshList();
    },
    onError: () => toast.error("Xóa thất bại!"),
  });

  return { list, add, update, remove };
};
