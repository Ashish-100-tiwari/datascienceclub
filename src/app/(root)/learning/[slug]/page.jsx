// Import necessary modules
import { MDXRemote } from 'next-mdx-remote/rsc';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/nav';

import matter from 'gray-matter';

async function fetchPostContent(slug) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/content/${slug}.mdx`);
  if (!response.ok) throw new Error("Failed to fetch content from S3");

  const data = await response.json();
  return data.content;
}

export default async function Page({ params }) {
  const { slug } = params;
  const content = await fetchPostContent(slug);

  // Use gray-matter to parse front matter and content
  const { data: frontMatter, content: mdxContent } = matter(content);

  return (
    <>
      <Navbar />
      <article className="prose m-5 prose-sm md:prose-base lg:prose-lg mx-auto bg-white text-black">
        <h1 className="text-5xl font-bold">{frontMatter.title}</h1>
        <p className="text-lg mt-2">{frontMatter.description}</p>
        <MDXRemote
          source={mdxContent}
          components={{
            h2: ({ children }) => <h2 className="text-3xl font-bold">{children}</h2>,
            h3: ({ children }) => <h3 className="text-2xl font-semibold">{children}</h3>,
            p: ({ children }) => <p className="text-base">{children}</p>,
            code: ({ children }) => (
              <code className="text-white rounded px-1 py-0.5">
                {children}
              </code>
            ),
            pre: ({ children }) => (
              <pre className="text-white rounded-lg p-4 overflow-auto">
                {children}
              </pre>
            ),
          }}
        />
      </article>
      <Footer />
    </>
  );
}
