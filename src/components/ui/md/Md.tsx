'use client';

import { GrayMatterFile } from 'gray-matter';
import Image from 'next/image';
import { HTMLAttributes } from 'react';
import { Components } from 'react-markdown';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';

interface Props {
  markdown: GrayMatterFile<string>['content'];
  style?: HTMLAttributes<HTMLElement>['className'];
}

function Md({ markdown, style }: Props) {
  const components: Components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');

      return !inline && match ? (
        <SyntaxHighlighter language={match[1]} PreTag='div' {...props} style={materialDark}>
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code {...props}>{children}</code>
      );
    },
    img: (image) => (
      <Image
        className='object-cover h-72'
        src={image.src || ''}
        alt={image.alt || ''}
        width={9999}
        height={200}
      />
    ),
  };

  return (
    <ReactMarkdown
      children={markdown}
      className={`prose lg:prose-xl w-full max-w-screen-2xl mx-auto ${style}`}
      remarkPlugins={[remarkGfm]}
      components={components}
    />
  );
}

export default Md;
