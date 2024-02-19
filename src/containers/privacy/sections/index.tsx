const Sections = ({ titles }: { titles: string[] }) => {
  return (
    <ul className="grid gap-3 text-lg font-semibold sticky top-10">
      {titles.map((title, i) => (
        <li className={i === activeSection ? "text-red-500" : "" + " transition-all duration-200"} key={i}>
          {title}
        </li>
      ))}
    </ul>
  );
};

export default Sections;
