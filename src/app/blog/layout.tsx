import "@/styles/github-dark.css";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <article className="text-gray-800 dark:text-gray-300 mb-10 prose dark:prose-invert prose-a:no-underline prose-p:text-gray-200  w-full">
      {children}
    </article>
  );
}
