"use client";

import { useRef } from "react";
import Title from "./header";
import Sections from "./sections";

const data = [
  {
    title: "Why",
    content:
      "We believe that email is an extremely important medium for people to communicate. However, we need to stop developing emails like 2010, and rethink how email can be done in 2024 and beyond. Email development needs a revamp. A renovation. Modernized for the way we build web apps today.",
  },
  {
    title: "Getting Started",
    content: "React Email is designed to be incrementally adopted, so you can add it to most codebases in a few minutes.",
  },
  {
    title: "Components",
    content:
      "This is a set of standard components to help you build amazing emails without having to deal with the mess of creating table-based layouts and maintaining archaic markup.",
  },
  {
    title: "Integrations",
    content:
      "In order to use React Email with any email service provider, you’ll need to convert the components made with React into a HTML string. This is done using the render utility.",
  },
  {
    title: "Support",
    content: "All components were tested using the most popular email clients.",
  },
];

const PrivacyContainer = () => {
  const listRef = useRef<HTMLUListElement>(null);

  return (
    <div className="flex items-start justify-end gap-24 p-10 mx-20 pb-96">
      <ul ref={listRef} className=" grid gap-40 place-self-end w-[60%] ">
        {data.map(({ title, content }, i) => (
          <li key={i}>
            <Title title={title} />
            <article className="text-xl">{content.repeat(3)}</article>
          </li>
        ))}
      </ul>

      <Sections titles={data.map(({ title }) => title)} />
    </div>
  );
};

export default PrivacyContainer;
