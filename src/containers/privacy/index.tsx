"use client";

import { useEffect, useRef, useState } from "react";

const headersWithContent = [
  {
    header: "Why",
    content:
      "We believe that email is an extremely important medium for people to communicate. However, we need to stop developing emails like 2010, and rethink how email can be done in 2024 and beyond. Email development needs a revamp. A renovation. Modernized for the way we build web apps today.",
  },
  {
    header: "Getting Started",
    content: "React Email is designed to be incrementally adopted, so you can add it to most codebases in a few minutes.",
  },
  {
    header: "Components",
    content:
      "This is a set of standard components to help you build amazing emails without having to deal with the mess of creating table-based layouts and maintaining archaic markup.",
  },
  {
    header: "Integrations",
    content:
      "In order to use React Email with any email service provider, you’ll need to convert the components made with React into a HTML string. This is done using the render utility.",
  },
  {
    header: "Support",
    content: "All components were tested using the most popular email clients.",
  },
];

const PrivacyContainer = () => {
  const [activeSection, setActiveSection] = useState<number>(0);

  useEffect(() => {
    const nav = listRef.current as HTMLUListElement;
    const contents = Array.from(nav.children) as HTMLLIElement[];

    /* -------------------------- Positions of contents ------------------------- */
    let positions: number[] = [];
    contents.forEach((section: HTMLLIElement) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      positions.push(sectionTop + sectionHeight);
    });

    /* --------------------------- window scroll event -------------------------- */
    function handleScroll() {
      const scrollPosition = window.scrollY;

      if (scrollPosition < positions[0]) setActiveSection(0);
      else if (scrollPosition > positions[0] && scrollPosition < positions[1]) setActiveSection(1);
      else if (scrollPosition > positions[1] && scrollPosition < positions[2]) setActiveSection(2);
      else if (scrollPosition > positions[2] && scrollPosition < positions[3]) setActiveSection(3);
      else if (scrollPosition > positions[3]) setActiveSection(4);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const listRef = useRef<HTMLUListElement>(null);

  return (
    <div className="flex items-start justify-end gap-24 p-10 mx-20 pb-96">
      <ul ref={listRef} className=" grid gap-40 place-self-end w-[60%] ">
        {headersWithContent.map(({ header, content }, i) => (
          <li key={i}>
            <h3 className="font-bold mb-10 text-4xl">{header}</h3>
            <article className="text-xl">{content.repeat(3)}</article>
          </li>
        ))}
      </ul>

      <ul className="grid gap-3 text-lg font-semibold sticky top-10">
        {headersWithContent.map(({ header }, i) => (
          <li className={i === activeSection ? "text-red-500" : "" + " transition-all duration-200"} key={i}>
            {header}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrivacyContainer;
