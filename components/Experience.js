import PropTypes from 'prop-types';
import { FaBriefcase } from 'react-icons/fa'; // Icon for Experience

const Experience = ({ title, experiences }) => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <FaBriefcase style={styles.icon} />
        <h2 style={styles.heading}>{title}</h2>
      </div>
      <div style={styles.timeline}>
        {experiences.map((experience, index) => (
          <div key={index} style={styles.timelineItem}>
            <div
              style={{
                ...styles.dot,
                backgroundColor: experience.isHovered ? '#4CAF50' : '#ddd',
              }}
            />
            <div style={styles.experienceInfo}>
              <p style={styles.experienceTitle}>{experience.title}</p>
              <p style={styles.experienceDescription}>{experience.description}</p>
            </div>
          </div>
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
    width: '100%',
    backgroundColor: '#fff',
    height: '100%',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
  },
  icon: {
    fontSize: '32px',
    color: '#4CAF50',
    marginRight: '16px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    margin: 0,
  },
  timeline: {
    position: 'relative',
    paddingLeft: '40px',
    borderLeft: '2px solid #ddd',
    marginTop: '16px',
    flexGrow: 1, // Allow the timeline to grow and take up remaining space if needed
  },
  timelineItem: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    paddingLeft: '30px', // Space for the dot
  },
  dot: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    position: 'absolute',
    left: '-8px', // Center dot on the line
    top: '0px',
    transition: 'background-color 0.3s',
  },
  experienceInfo: {
    marginLeft: '10px',
  },
  experienceTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
  },
  experienceDescription: {
    fontSize: '14px',
    color: '#555',
    marginTop: '4px',
  },
};

Experience.propTypes = {
  title: PropTypes.string.isRequired,
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      isHovered: PropTypes.bool,
    })
  ).isRequired,
};

export default Experience;
