export type Nullable<T> = T | null;

export interface Posts {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
}
