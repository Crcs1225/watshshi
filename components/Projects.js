'use client'; 

import PropTypes from 'prop-types';
import { FaProjectDiagram } from 'react-icons/fa';

const Projects = ({ projects }) => (
  <div style={styles.container}>
    <div style={styles.card}>
      <div style={styles.header}>
        <div style={styles.title}>
          <FaProjectDiagram style={styles.icon} />
          <h2 style={styles.heading}>Projects</h2>
        </div>
        <span style={styles.viewAll}>View All</span>
      </div>

      <div style={styles.projectsContainer}>
        {projects.slice(0, 4).map((project, index) => (
          <div key={index} style={styles.projectCard}>
            <h3 style={styles.projectTitle}>{project.title}</h3>
            <p style={styles.projectDescription}>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const styles = {
  container: {
    padding: '16px',
    width: '100%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '1200px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  icon: {
    marginRight: '8px',
    color: '#4CAF50',
    fontSize: '24px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    margin: 0,
  },
  viewAll: {
    fontSize: '14px',
    color: '#4CAF50',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  },
  projectsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '16px',
  },
  projectCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  projectTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  projectDescription: {
    fontSize: '14px',
    color: '#777',
  },
};

export default Projects;
