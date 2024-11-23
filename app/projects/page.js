import Image from 'next/image';
import Link from 'next/link'; // Import Link to enable navigation
import { FaHome } from 'react-icons/fa'; // Import back-to-home icon

// Array containing project data (this can be easily updated without modifying the design)
const projectsData = [
  {
    id: 1,
    image: "/images/kitchen.png", // Correct image path
    title: 'Kitchen Helper',
    description: 'Object Detection and Recommendation System Mobile Application',
  },
  {
    id: 2,
    image: '/images/project2-image.jpg', // Correct image path
    title: 'Panitik',
    description: 'Filipino literature reading application with TTS and Gemini Model for AI assistance',
  },
  {
    id: 3,
    image: '/images/project3-image.jpg', // Correct image path
    title: 'Library Reservation App',
    description: 'Simple Streamline Library Reservation System using FLutter and Firebase',
  },
];

export default function Proj() {
  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        {/* Back to Home Link */}
        <Link href="/" style={styles.backLink}>
          <FaHome style={styles.homeIcon} />
        </Link>

        {/* Centered Title */}
        <h1 style={styles.title}>All Projects</h1>
      </div>

      {/* Project List Section */}
      <div style={styles.projectsContainer}>
        {projectsData.map((project) => (
          <div key={project.id} style={styles.projectCard}>
            <Image
              width={200}
              height={200}
              src={project.image}
              alt={project.title}
              style={styles.projectImage}
            />
            <div style={styles.projectDetails}>
              <h2 style={styles.projectTitle}>{project.title}</h2>
              <p style={styles.projectDescription}>{project.description}</p>
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
  projectsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  },
  projectCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
  },
  projectCardHover: {
    transform: 'scale(1.05)',
  },
  projectImage: {
    width: '100%',
    height: 'auto',
  },
  projectDetails: {
    padding: '15px',
  },
  projectTitle: {
    fontSize: '1.5rem',
    margin: '10px 0',
  },
  projectDescription: {
    fontSize: '1rem',
    color: '#555',
  },
};
