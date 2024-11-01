import "@/styles/github-dark.css";
import postData from "@/app/post.json";
import { Header } from "./header";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <article className="text-gray-800 dark:text-gray-300 mb-10 relative">
      <Link
        className="flex hover:underline items-center gap-1 mb-3"
        href={"/blogs"}
      >
        <IoIosArrowBack size={20} />
        Back to all writings
      </Link>
      <Header posts={postData.posts} />
      <div className="prose dark:prose-invert prose-a:no-underline prose-p:text-gray-200 mx-auto">
        {children}
      </div>
    </article>
  );
}
