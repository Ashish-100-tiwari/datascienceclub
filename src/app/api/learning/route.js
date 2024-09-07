import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Handle GET requests
export async function GET() {
  try {
    const learningDir = path.join(process.cwd(), 'learning');
    const files = fs.readdirSync(learningDir);

    const learning = files.map((filename) => {
      const filePath = path.join(learningDir, filename);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data: frontMatter } = matter(fileContent);
      return {
        meta: frontMatter,
        slug: filename.replace('.mdx', ''),
      };
    });

    return new Response(JSON.stringify(learning), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// If needed, handle unsupported methods by adding named exports for other HTTP methods
export async function POST() {
  return new Response(JSON.stringify({ message: 'Method Not Allowed' }), {
    status: 405,
    headers: { 'Content-Type': 'application/json' },
  });
}
