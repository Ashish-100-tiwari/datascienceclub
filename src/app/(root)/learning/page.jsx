'use client'; // Ensure this file is treated as a client component
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/nav';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Function to fetch learning resources
async function fetchLearning() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/topics`, {
      cache: 'no-store', 
    });
    if (!res.ok) {
      throw new Error('Failed to fetch learning resources');
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching learning resources:', error);
    return [];
  }
}

const Page = () => {
  const [learning, setLearning] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch learning resources when the component mounts
    const loadLearning = async () => {
      const fetchedLearning = await fetchLearning();
      setLearning(fetchedLearning);
      setLoading(false); // Set loading to false after fetching
    };
    loadLearning();
  }, []);

  return (
    <div>
      <Navbar />
      <section className='py-10 ml-20'>
        <h2 className='text-2xl font-bold'>Learning</h2>
        <div className='py-2 ml-20'>
          {loading ? ( // Conditional rendering for loading state
            <div className='text-center'>Loading...</div>
          ) : (
            learning.map((learningItem) => (
              <Link href={'/learning/' + learningItem.slug} passHref key={learningItem.slug}>
                <div className='py-2 flex justify-between items-center gap-2'>
                  <div>
                    <h3 className='text-lg font-bold'>{learningItem.meta.title}</h3>
                    <div>
                      <p className='text-gray-400'>{learningItem.meta.description}</p>
                    </div>
                    <div className='my-auto text-gray-400'>
                      <p>{learningItem.meta.date}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Page;
