import "./Info.css";
import waterSymbol from "../../assets/waterSymbol.png";

const Info = ({ title, text, direction }) => {
  return (
    <>
      <div className={`Info ${direction}`}>
        <article>
          <h1>{title}</h1>
          <p>{text}</p>
        </article>
        <aside>
          <img src={waterSymbol} alt="Ilustração" />
        </aside>
      </div>
    </>
  );
};

export default Info;
