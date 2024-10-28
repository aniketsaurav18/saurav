"use client";
import { useSelectedLayoutSegments } from "next/navigation";

export type Post = {
  id: string;
  date: string;
  title: string;
  slug: string;
};
export function Header({ posts }: { posts: Post[] }) {
  const segments = useSelectedLayoutSegments();
  // segments can be:
  // date/post
  // lang/date/post
  const post = posts.find(
    (post) => post.slug === segments[segments.length - 1]
  );
  if (!post) {
    return <></>;
  }
  return (
    <div className="mt-3 mb-4 w-full">
      <h1 className="text-2xl font-bold mb-1 dark:text-gray-100">
        {post.title}
      </h1>

      <p className="font-mono flex text-xs text-gray-500 dark:text-gray-500 m-0">
        <span className="flex-grow">
          <span className="md:inline">
            <span>
              <a
                href="https://x.com/aniketsauravv"
                className="hover:text-gray-800 dark:hover:text-gray-400"
                target="_blank"
              >
                @aniketsauravv
              </a>
              <span className="mx-2">|</span>
            </span>
            <span>Oct 29 2024</span>
          </span>
        </span>
      </p>
    </div>
  );
}
