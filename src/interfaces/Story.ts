export interface IStory {
  id: number | string;
  title: string;
  author: string;
  image: string;
  description: string;
  createdAt?: string;
}

export type IStoryInput = Omit<IStory, "id" | "createdAt">;
