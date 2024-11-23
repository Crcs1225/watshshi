import Link from 'next/link'; // Import Link to enable navigation
import { FaHome } from 'react-icons/fa'; // Import back-to-home icon

// Array containing certificate data (this can be easily updated without modifying the design)
const certificatesData = [
  {
    id: 1,
    title: 'Responsive Web Design',
    description: 'freeCodeCamp',
  },
  {
    id: 2,
    title: 'Programming for Beginners Using Python',
    description: 'DICT',
  },
  {
    id: 3,
    title: 'StartUp Hackathon',
    description: 'UPICT',
  },
];

export default function Cert() {
  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        {/* Back to Home Link */}
        <Link href="/" style={styles.backLink}>
          <FaHome style={styles.homeIcon} />
        </Link>

        {/* Centered Title */}
        <h1 style={styles.title}>All Certificates</h1>
      </div>

      {/* Certificates List Section */}
      <div style={styles.certificatesContainer}>
        {certificatesData.map((certificate) => (
          <div key={certificate.id} style={styles.certificateCard}>
            <div style={styles.certificateDetails}>
              <h2 style={styles.certificateTitle}>{certificate.title}</h2>
              <p style={styles.certificateDescription}>{certificate.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Styles for the page and components
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '0 auto',
    padding: '20px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  backLink: {
    textDecoration: 'none',
    color: '#333',
  },
  homeIcon: {
    fontSize: '24px',
    cursor: 'pointer',
  },
  title: {
    fontSize: '2rem',
    textAlign: 'center',
    flex: 1,
    margin: 0,
  },
  certificatesContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  },
  certificateCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
  },
  certificateCardHover: {
    transform: 'scale(1.05)',
  },
  certificateDetails: {
    padding: '15px',
  },
  certificateTitle: {
    fontSize: '1.5rem',
    margin: '10px 0',
  },
  certificateDescription: {
    fontSize: '1rem',
    color: '#555',
  },
};
