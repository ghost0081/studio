
import Link from 'next/link';

export default function Blog() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold mb-8">
          Dance Blog
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="rounded-lg shadow-md p-4">
            <Link href="/blog/blog-1" className="hover:underline">
              <h2 className="text-3xl font-semibold mb-2">Blog Post 1</h2>
            </Link>
            <p className="text-gray-700">
              Summary of blog post 1...
            </p>
          </div>

          <div className="rounded-lg shadow-md p-4">
            <Link href="/blog/blog-2" className="hover:underline">
              <h2 className="text-3xl font-semibold mb-2">Blog Post 2</h2>
            </Link>
            <p className="text-gray-700">
              Summary of blog post 2...
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
