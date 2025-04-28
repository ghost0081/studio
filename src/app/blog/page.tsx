
import Link from 'next/link';

export default function Blog() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="rounded-lg shadow-md p-4">
            <Link href="/blog/blog-1" className="hover:underline">
              <h2 className="text-3xl font-semibold mb-2">Blog Post 1</h2>
            </Link>
          </div>

          <div className="rounded-lg shadow-md p-4">
            <Link href="/blog/blog-2" className="hover:underline">
              <h2 className="text-3xl font-semibold mb-2">Blog Post 2</h2>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
