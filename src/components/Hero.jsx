// src/sections/Hero.jsx
import { profileData } from '../data';

export const Hero = () => {
  const { name, role, bio, social, avatar } = profileData.header;

  return (
    <section className="hero-section">
      
      {/* IMAGEN DE PERFIL */}
      <img src={avatar} alt={name} className="profile-img" />

      <h1>{name}</h1>
      <h2>{role}</h2>
      <p>{bio}</p>
      
      <div className="action-buttons">
        <a 
          href={social.cv} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-cv"
        >
          👁️ Ver Currículum PDF
        </a>

        <div className="mini-socials">
          <a href={social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={social.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
};