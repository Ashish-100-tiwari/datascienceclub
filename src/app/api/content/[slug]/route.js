import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { NextResponse } from 'next/server';

// Initialize S3 client for AWS SDK v3
const s3 = new S3Client({
  region: 'eu-north-1', // Ensure the correct AWS region
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Exported GET method to handle requests
export async function GET(req) {
  const filename=req.url.split('/').pop();
  if (!filename) {
    return NextResponse.json({ error: 'Filename is required' }, { status: 400 });
  }

  try {
    const params = {
      Bucket: 'datascienceclubdata',
      Key: `datacenter/${filename}`,
    };

    const command = new GetObjectCommand(params);
    const data = await s3.send(command);
    const fileContent = await streamToString(data.Body);

    return NextResponse.json({ content: fileContent });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to retrieve file from S3' }, { status: 500 });
  }
}

// Helper function to convert stream to string
async function streamToString(stream) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf-8');
}
