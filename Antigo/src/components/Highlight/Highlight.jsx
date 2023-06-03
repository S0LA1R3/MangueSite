import "./Highlight.css";

const Highlight = ({ title, text, link }) => {
  return (
    <>
      <div className="Highlight">
        <h1>{title}</h1>
        <p>{text}</p>
        <a href={link}>Quero descobrir!</a>
      </div>
    </>
  );
};

export default Highlight;
