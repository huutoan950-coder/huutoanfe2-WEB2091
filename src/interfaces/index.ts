export interface ICategory {
  id?: string | number;
  title: string;
  description?: string;
  active: boolean;
}

export interface IStory {
  id?: string | number;
  title: string;
  author?: string;
  image?: string;
  description?: string;
  categoryId: string | number;
}
