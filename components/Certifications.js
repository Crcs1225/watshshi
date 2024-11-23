'use client'; 
import PropTypes from 'prop-types';
import { FaCertificate } from 'react-icons/fa';
import Link from 'next/link';

const Certifications = ({ certifications }) => (
  <div style={styles.card}>
    <div style={styles.header}>
      <h2 style={styles.heading}>
        <FaCertificate style={styles.icon} /> Certifications
      </h2>
      <Link href="/cert" style={styles.viewAll}>
      View All
      </Link>
    </div>

    <div style={styles.certificationsContainer}>
      {certifications.map((certification, index) => (
        <div key={index} style={styles.certificationCard}>
          <h3 style={styles.certificationTitle}>{certification.title}</h3>
          <p style={styles.certificationDescription}>{certification.description}</p>
        </div>
      ))}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    fontSize: '24px',
    marginRight: '8px',
    color: '#4CAF50',
  },
  viewAll: {
    fontSize: '14px',
    color: '#4CAF50',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  certificationsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  certificationCard: {
    padding: '12px',
    backgroundColor: '#f9f9f9',
    borderRadius: '6px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  certificationTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '4px',
  },
  certificationDescription: {
    fontSize: '14px',
    color: '#555',
  },
};

export default Certifications;
