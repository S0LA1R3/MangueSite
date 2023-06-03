import "./Kit.css";

const Kit = ({ image, name, price, description, availableFeatures }) => {
  const features = [
    "Projeto sustentável",
    "Automatizado",
    "Sistema de monitoramento",
    "Tela LCD",
    "Projeto de App",
  ];
  return (
    <div className="Kit">
      <h1>{name}</h1>
      <div className="image">
        <img src={image} alt={`Imagem ilustrativa do kit ${name}`} />
      </div>
      <div className="purchase">
        <span>{`R$${price}`}</span>
        <a href="#">Adquirir</a>
      </div>
      <p>{description}</p>
      <ul>
        {features.map((feature, index) => {
          return (
            <li
              key={index}
              className={
                availableFeatures.includes(index) ? "available" : "notAvailable"
              }
            >
              {feature}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Kit;
