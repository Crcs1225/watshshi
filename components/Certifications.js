'use client'; 
import PropTypes from 'prop-types';
import { FaCertificate } from 'react-icons/fa';

const Certifications = ({ certifications }) => (
  <div style={styles.container}>
    <div style={styles.card}>
      {/* Header with Icon and View All link */}
      <div style={styles.header}>
        <h2 style={styles.heading}>
          <FaCertificate style={styles.icon} /> {/* Icon before title */}
          Certifications
        </h2>
        <a href="/certifications" style={styles.viewAll}>
          View All
        </a>
      </div>

      {/* List of Certifications */}
      <div style={styles.certificationsContainer}>
        {certifications.map((certification, index) => (
          <div key={index} style={styles.certificationCard}>
            <h3 style={styles.certificationTitle}>{certification.title}</h3>
            <p style={styles.certificationDescription}>{certification.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

Certifications.propTypes = {
  certifications: PropTypes.arrayOf(
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
    padding: '24px',
    marginBottom: '24px',
  },
  header: {
    marginBottom: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '8px',
    fontSize: '24px',
    color: '#4CAF50',
  },
  viewAll: {
    fontSize: '14px',
    color: '#4CAF50',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  },
  certificationsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  certificationCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  certificationTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  certificationDescription: {
    fontSize: '14px',
    color: '#777',
  },
};

export default Certifications;
