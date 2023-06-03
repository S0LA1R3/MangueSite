import "./MemberProfile.css";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";

const MemberProfile = ({
  icon,
  name,
  role = "Estudante",
  description,
  socialMedia,
}) => {
  return (
    <div className="MemberProfile">
      <div className="icon">
        <img src={icon} alt={`Foto do integrante ${name}`} />
      </div>
      <h1>{name.toUpperCase()}</h1>
      <h2>{role}</h2>
      <p>{description}</p>
      <div className="socialIcons">
        <a target="_blank" href={socialMedia.github}>
          <IoLogoGithub size={40} color="#563939" />
        </a>
        <a target="_blank" href={socialMedia.instagram}>
          <IoLogoInstagram size={40} color="#563939" />
        </a>
        <a target="_blank" href={socialMedia.linkedin}>
          <IoLogoLinkedin size={40} color="#563939" />
        </a>
      </div>
    </div>
  );
};

export default MemberProfile;
