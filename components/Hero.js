import Image from 'next/image';
import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Hero = ({ imageSrc, name, location, email, description }) => {
  return (
    <div style={styles.container}>
      {/* Image Section */}
      <div style={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={`${name} picture`}
          width={200}
          height={200}
          style={styles.image}
        />
      </div>

      {/* Information Section */}
      <div style={styles.infoContainer}>
        <h2 style={styles.name}>{name}</h2>
        <div style={styles.infoRow}>
          <FaMapMarkerAlt style={styles.icon} />
          <span style={styles.info}>{location}</span>
        </div>
        <div style={styles.infoRow}>
          <FaEnvelope style={styles.icon} />
          <span style={styles.info}>{email}</span>
        </div>
        <p style={styles.description}>{description}</p>

        {/* Send Email Button */}
        <a
          href={`mailto:${email}?subject=Hello&body=I%20would%20like%20to%20get%20in%20touch%20with%20you.`}
          style={styles.button}
        >
          <FaPaperPlane style={styles.buttonIcon} />
          Send Email
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row', // Default to row layout
    alignItems: 'flex-start', // Align items to the left on large screens
    margin: '16px 0',
    flexWrap: 'wrap', // Allow wrapping on small screens
    textAlign: 'left', // Ensure text is left-aligned
  },
  imageWrapper: {
    width: '100%', // Default to 100% width for flexibility
    maxWidth: '200px', // Restrict the maximum size
    height: 'auto', // Maintain aspect ratio
    borderRadius: '8px',
    marginRight: '16px',
    overflow: 'hidden',
  },
  image: {
    width: '100%', // Image takes full width of its container
    height: 'auto', // Maintain aspect ratio
    objectFit: 'cover',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1, // Allow this section to grow or shrink
    width: '100%', // Ensure it spans the available width
    alignItems: 'flex-start', // Ensure all child elements align to the left
    textAlign: 'left', // Ensure text is left-aligned
  },
  infoRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
    flexWrap: 'wrap', // Ensure text wraps on smaller screens
    justifyContent: 'flex-start', // Align content to the left
    width: '100%', // Full width for flex row
  },
  icon: {
    marginRight: '8px',
    color: '#555',
  },
  name: {
    fontSize: '1.5em', // Use relative units for scalability
    fontWeight: 'bold',
    marginBottom: '8px',
    textAlign: 'left', // Left-align name text
    alignSelf: 'flex-start', // Ensure name aligns left in its container
    width: '100%', // Ensure name takes full width
  },
  description: {
    fontSize: '1.2em',
    color: '#444',
    textAlign: 'left', // Left-align description text
    alignSelf: 'flex-start', // Align description left
    width: '100%', // Ensure description takes full width
    fontStyle: 'italic',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align button content to the left
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '10px', // Adjust padding for better touch targets
    borderRadius: '12px',
    textDecoration: 'none',
    fontSize: '1em',
    marginTop: '16px',
    cursor: 'pointer',
    width: 'auto',
    maxWidth: '250px', // Restrict max button width
    whiteSpace: 'nowrap',
    alignSelf: 'flex-start', // Align button to the left
  },
  buttonIcon: {
    marginRight: '6px', // Space between icon and text
  },

  '@media (max-width: 768px)': {
    container: {
      flexDirection: 'column', // Stack items vertically
      alignItems: 'flex-start', // Align items to the left on small screens
      textAlign: 'left', // Align text to the left
      padding: '16px', // Add padding for spacing
    },
    imageWrapper: {
      marginRight: '0', // Remove side margin
      marginBottom: '16px', // Add space below the image
      display: 'flex',
      justifyContent: 'flex-start', // Align image to the left
      width: '100%', // Full width for the image wrapper
    },
    infoContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start', // Align items to the left
      textAlign: 'left', // Ensure text is left-aligned
      flex: 1,
      width: '100%', // Allow it to span full width
    },
    name: {
      fontSize: '1.5em',
      fontWeight: 'bold',
      marginBottom: '8px',
      textAlign: 'left', // Explicitly left-align text
      alignSelf: 'flex-start', // Align name to the left
      width: '100%', // Ensure name takes full width
    },
    description: {
      fontSize: '1.1em',
      color: '#444',
      textAlign: 'left', // Left-align the description text
      marginBottom: '16px',
      alignSelf: 'flex-start', // Align description to the left
      width: '100%', // Ensure description takes full width
    },
    infoRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start', // Align icons and text to the left
      alignItems: 'center',
      marginBottom: '8px',
      flexWrap: 'wrap', // Wrap text/icon on small screens
      alignSelf: 'flex-start', // Ensure this row is aligned to the left
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start', // Align button content to the left
      backgroundColor: '#4CAF50',
      color: '#fff',
      padding: '10px',
      borderRadius: '12px',
      textDecoration: 'none',
      fontSize: '1em',
      marginTop: '16px',
      cursor: 'pointer',
      width: 'auto',
      maxWidth: '250px',
      whiteSpace: 'nowrap',
      alignSelf: 'flex-start', // Align button to the left
    },
    buttonIcon: {
      marginRight: '6px', // Space between icon and text
    },
  }
};


Hero.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Hero;
