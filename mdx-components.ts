import { A as a } from "@/app/blog/components/a";
import { P as p } from "@/app/blog/components/p";
import { H1 as h1 } from "@/app/blog/components/h1";
import { H2 as h2 } from "@/app/blog/components/h2";
import { H3 as h3 } from "@/app/blog/components/h3";
import { OL as ol } from "@/app/blog/components/ol";
import { UL as ul } from "@/app/blog/components/ul";
import { LI as li } from "@/app/blog/components/li";
import { HR as hr } from "@/app/blog/components/hr";
import { Code as code } from "@/app/blog/components/code";
import { Tweet } from "@/app/blog/components/tweet";
import { Image } from "@/app/blog/components/image";
import { Figure } from "@/app/blog/components/figure";
import { Snippet } from "@/app/blog/components/snippet";
import { Caption } from "@/app/blog/components/caption";
import { Callout } from "@/app/blog/components/callout";
import { YouTube } from "@/app/blog/components/youtube";
import { Ref, FootNotes, FootNote } from "@/app/blog/components/footnotes";
import { Blockquote as blockquote } from "@/app/blog/components/blockquote";

export function useMDXComponents(components: {
  [component: string]: React.ComponentType;
}) {
  return {
    ...components,
    a,
    h1,
    h2,
    h3,
    p,
    ol,
    ul,
    li,
    hr,
    code,
    pre: Snippet,
    img: Image,
    blockquote,
    Tweet,
    Image,
    Figure,
    Snippet,
    Caption,
    Callout,
    YouTube,
    Ref,
    FootNotes,
    FootNote,
  };
}
