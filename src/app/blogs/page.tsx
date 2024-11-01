import Link from "next/link";
import postData from "@/app/post.json";

export default function Blogs() {
  return (
    <div>
      <ul>
        {postData.posts.map((post) => (
          <li
            key={post.id}
            className="flex flex-col text-[1rem] sm:text-lg py-2 justify-center cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-[#242424] active:bg-gray-200 dark:active:bg-[#222] border-y border-gray-200 dark:border-[#313131] border-b-0"
          >
            <Link href={`/blog/${post.slug}`}>
              <h2 className="dark:text-gray-100">{post.title}</h2>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                {post.date}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
