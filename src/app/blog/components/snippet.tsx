import { ReactNode } from "react";
import { Caption } from "./caption";

export const Snippet = ({
  children,
  scroll = true,
  caption = null,
}: {
  children: ReactNode;
  scroll: boolean;
  caption: string | null;
}) => (
  <div className="my-6">
    <pre
      className={`
        p-4
        text-sm
        bg-gray-800 text-white
        dark:bg-[#222] dark:text-gray-300
        rounded-md
        custom-scrollbar
        ${
          scroll
            ? "overflow-x-auto"
            : "whitespace-pre-wrap break-all overflow-hidden"
        }
      `}
    >
      <code>{children}</code>
    </pre>

    {caption != null ? <Caption>{caption}</Caption> : null}
  </div>
);
