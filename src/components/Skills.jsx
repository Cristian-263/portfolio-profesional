import { profileData } from '../data';

export const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Mis Habilidades Técnicas</h2>
      <div className="skills-grid">
        {profileData.skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};