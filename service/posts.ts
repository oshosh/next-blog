import { promises } from 'fs';
import path from 'path';

export interface Posts {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
}

export async function getPosts(): Promise<Posts[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const data = await promises.readFile(filePath, 'utf-8');

  return JSON.parse(data);
}

export async function getPost(): Promise<Posts | undefined> {
  const posts = await getPosts();

  return posts.find((item) => item.featured);
}
