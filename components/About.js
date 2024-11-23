import { FaAddressCard } from 'react-icons/fa'; // Importing the About icon
import PropTypes from 'prop-types';

const About = ({ title, description }) => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <FaAddressCard style={styles.icon} />
        <h2 style={styles.heading}>{title}</h2>
      </div>
      <p style={styles.description}>{description}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '24px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    margin: '16px auto',
    maxWidth: '700px',
    backgroundColor: '#fff',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
  },
  icon: {
    fontSize: '24px', // Adjust icon size
    color: '#4CAF50', // Set the icon color
    marginRight: '16px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    margin: 0,
  },
  description: {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.6',
  },
};

About.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default About;
