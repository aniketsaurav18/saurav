import "@/styles/github-dark.css";
import postData from "@/app/post.json";
import { Header } from "./header";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <article className="text-gray-800 dark:text-gray-300 mb-10 relative">
      <Header posts={postData.posts} />
      <div className="prose dark:prose-invert prose-a:no-underline prose-p:text-gray-200 mx-auto">
        {children}
      </div>
    </article>
  );
}
