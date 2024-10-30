import { type ReactNode } from "react";
import { Tweet, TweetSkeleton } from "react-tweet";
import { Caption } from "./caption";
import "./tweet.css";

interface TweetArgs {
  id: string;
  caption: ReactNode;
}

export async function ReactTweet({ id, caption }: TweetArgs) {
  return (
    <div className="tweet my-6">
      <div className={`flex justify-center`}>
        <Tweet id={id} fallback={<TweetSkeleton />} />
      </div>
      {caption && <Caption>{caption}</Caption>}
    </div>
  );
}
