import { useEffect, useState } from "react";

const Title = ({ title }: { title: string }) => {
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

  return <h3 className="font-bold mb-10 text-4xl">{title}</h3>;
};

export default Title;
