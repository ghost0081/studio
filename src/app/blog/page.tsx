import Link from 'next/link';
import React from 'react';

const blogPosts = [
  {
    title: 'Academy Update: New Hip Hop Class',
    date: 'July 15, 2024',
    description:
      'We are excited to announce the addition of a new Hip Hop class to our schedule. Join us every Tuesday and Thursday at 7 PM!',
    path: 'academy-update-new-hip-hop-class',
  },
  {
    title: 'Student Spotlight: Sarah Wins National Award',
    date: 'July 10, 2024',
    description:
      'Congratulations to Sarah for winning the National Dance Award! Her dedication and hard work have paid off.',
    path: 'student-spotlight-sarah-wins-national-award',
  },
  {
    title: 'The Benefits of Dance for All Ages',
    date: 'July 5, 2024',
    description:
      'Explore how dance can benefit individuals of all ages, from improving physical health to boosting mental well-being.',
    path: 'the-benefits-of-dance-for-all-ages',
  },
  {
    title: 'Academy Update: New Ballet Class',
    date: 'December 20, 2024',
    description:
      'We are excited to announce the launch of our new ballet class!',
    path: 'academy-update-new-ballet-class',
  },
];

function BlogCard({
  title,
  date,
  description,
  path,
}: {
  title: string;
  date: string;
  description: string;
  path: string;
}) {
  return (
    <Link href={`/blog/${path}`} className="block">
      <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 text-sm mt-1">Date: {date}</p>
        <p className="mt-2">{description}</p>
      </div>
    </Link>
  );
}


export default function Blog() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            date={post.date}
            description={post.description}
            path={post.path}
          />
        ))}
      </div>
    </div>
  );
}
