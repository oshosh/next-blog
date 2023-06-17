import { promises, readdirSync, readFileSync } from 'fs';
import matter, { GrayMatterFile } from 'gray-matter';
import path from 'path';

export interface Posts {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
}

export interface Md {
  id: string;
  md: GrayMatterFile<string>;
}

type NullAbleMd<T> = T | null;

export async function getPosts(): Promise<Posts[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return promises
    .readFile(filePath, 'utf-8')
    .then<Posts[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export function getMarkdown(pathUrl: string): NullAbleMd<Md> {
  const postsDirectory = path.join(process.cwd(), 'data/posts');
  const fileNames = readdirSync(postsDirectory);

  const allPostsData: Md[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);

    const fileContents = readFileSync(fullPath, 'utf-8');
    const matterResult = matter(fileContents);

    return {
      id,
      md: matterResult,
    };
  });

  const post = allPostsData.find(({ id }) => id === pathUrl);

  if (post) return post;
  else return null;
}
