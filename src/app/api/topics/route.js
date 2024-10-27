import { S3Client, ListObjectsV2Command, GetObjectCommand } from '@aws-sdk/client-s3';
import { Readable } from 'stream';
import matter from 'gray-matter';

// Initialize the S3 client
const s3 = new S3Client({
  region: 'eu-north-1', // Ensure the correct AWS region
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Helper function to convert a stream to a string
async function streamToString(stream) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf-8');
}

// Handle GET requests
export async function GET() {
  try {
    const bucketName = 'datascienceclubdata';
    const learningDir = 'datacenter'; // Change this if necessary

    // List objects in the S3 bucket
    const listParams = {
      Bucket: bucketName,
      Prefix: `${learningDir}/`, // Optional: if you want to limit to a specific prefix
    };
    const listCommand = new ListObjectsV2Command(listParams);
    const listResponse = await s3.send(listCommand);

    const learning = await Promise.all(
      listResponse.Contents.map(async (file) => {
        const filename = file.Key.split('/').pop(); // Get the file name
        const getObjectParams = {
          Bucket: bucketName,
          Key: file.Key,
        };
        const getCommand = new GetObjectCommand(getObjectParams);
        const data = await s3.send(getCommand);
        const fileContent = await streamToString(data.Body); // Convert stream to string

        // Use gray-matter to parse front matter
        const { data: frontMatter } = matter(fileContent);
        return {
          meta: frontMatter,
          slug: filename.replace('.mdx', ''),
        };
      })
    );

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
