import PropTypes from 'prop-types';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Socials = ({ facebookUrl, linkedinUrl, githubUrl }) => {
  const socials = [
    { icon: <FaFacebook />, url: facebookUrl, label: 'Facebook' },
    { icon: <FaLinkedin />, url: linkedinUrl, label: 'LinkedIn' },
    { icon: <FaGithub />, url: githubUrl, label: 'GitHub' },
  ];

  return (
    <div style={styles.container}>
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit my ${social.label} profile`}
          style={styles.link}
        >
          <div style={styles.icon}>{social.icon}</div>
        </a>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '24px', // Increase the gap between the icons
    marginBottom: '50px', // More top margin to ensure the section isn't crowded
  },
  link: {
    textDecoration: 'none',
    fontSize: '40px', // Increase font size of the icons
    color: '#555',
    transition: 'transform 0.3s ease, color 0.3s ease',
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkHover: {
    transform: 'scale(1.2)',
    color: '#0073b1',
  },
};

Socials.propTypes = {
  facebookUrl: PropTypes.string.isRequired,
  linkedinUrl: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
};

export default Socials;
