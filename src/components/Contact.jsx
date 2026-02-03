import { profileData } from '../data';

export const Contact = () => {
  const { phone, email, location } = profileData.contact;

  return (
    <footer className="contact-section">
      <div className="glass-footer">
        <div className="contact-item location">
          <i className="icon">📍</i> {location}
        </div>
        
        <div className="separator">|</div>

        <a href={`tel:${phone.replace(/\s/g, '')}`} className="contact-item">
          <i className="icon">📞</i> {phone}
        </a>

        <div className="separator">|</div>

        <a href={`mailto:${email}`} className="contact-item">
          <i className="icon">✉️</i> {email}
        </a>
      </div>
      
    </footer>
  );
};