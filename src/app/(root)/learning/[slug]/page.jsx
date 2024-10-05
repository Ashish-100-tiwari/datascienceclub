import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('learning'));

  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));

  return paths;
}

function getPost(params) {
  const { slug } = params;
  const markdownFile = fs.readFileSync(path.join('learning', slug + '.mdx'), 'utf-8');

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export default function Page({ params }) {
  const props = getPost(params);

  return (
    <article className="prose prose-sm md:prose-base lg:prose-lg mx-auto bg-white text-black">
      <h1 className="text-5xl font-bold">{props.frontMatter.title}</h1>
      <p className="text-lg mt-2">{props.frontMatter.description}</p>
      <MDXRemote
        source={props.content}
        components={{
          h2: ({ children }) => <h2 className="text-3xl font-bold">{children}</h2>,
          h3: ({ children }) => <h3 className="text-2xl font-semibold">{children}</h3>,
          p: ({ children }) => <p className="text-base">{children}</p>,
          code: ({ children }) => (
            <code className="bg-gray-800 text-white rounded px-1 py-0.5">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="bg-gray-900 text-white rounded-lg p-4 overflow-auto">
              {children}
            </pre>
          ),
        }}
      />
    </article>
  );
}
