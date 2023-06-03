import "./Section.css";

const Section = ({ title, color = "default", children }) => {
  return (
    <section className={`Section ${color}`}>
      <h1>{title}</h1>
      <div className="content">{children}</div>
    </section>
  );
};

export default Section;
