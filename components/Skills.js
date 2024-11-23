import { FaLaptopCode } from 'react-icons/fa';// Importing the About icon
import PropTypes from 'prop-types';

const Skills = ({ title, skills }) => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <FaLaptopCode style={styles.icon} />
        <h2 style={styles.heading}>{title}</h2>
      </div>
      <div style={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <span key={index} style={styles.skillTag}>
            {skill}
          </span>
        ))}
      </div>
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
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap', // Allow wrapping for tags
    gap: '8px', // Space between tags
    marginTop: '16px',
  },
  skillTag: {
    backgroundColor: '#f1f1f1',
    color: '#333',
    borderRadius: '16px',
    padding: '8px 16px',
    fontSize: '14px',
    border: '1px solid #ddd',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  skillTagHover: {
    backgroundColor: '#4CAF50',
    color: '#fff',
  },
};

Skills.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Skills;
