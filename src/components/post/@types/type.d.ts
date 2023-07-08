export type Nullable<T> = T | null;

export interface Posts {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
}

export interface Content {
  title: string;
  contents: string[];
}

export interface Info {
  who: Content;
  career: Content;
  skills: Content;
}
