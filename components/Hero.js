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
    alignItems: 'center', // Align items vertically
    margin: '16px 0',
    flexWrap: 'wrap', // Allow wrapping on small screens
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
  },
  infoRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
    flexWrap: 'wrap', // Ensure text wraps on smaller screens
  },
  icon: {
    marginRight: '8px',
    color: '#555',
  },
  name: {
    fontSize: '1.5em', // Use relative units for scalability
    fontWeight: 'bold',
    marginBottom: '8px',
    textAlign: 'center', // Center-align on smaller screens
  },
  info: {
    fontSize: '1em',
    color: '#555',
  },
  description: {
    fontSize: '1.1em',
    color: '#444',
    textAlign: 'center',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '10px', // Adjust padding for better touch targets
    borderRadius: '12px',
    textDecoration: 'none',
    fontSize: '1em',
    marginTop: '16px',
    cursor: 'pointer',
    justifyContent: 'center', // Center button content
    width: 'auto', // Allow button to shrink if needed
    maxWidth: '200px', // Restrict maximum button width
    whiteSpace: 'nowrap',
  },
  buttonIcon: {
    marginRight: '6px',
  },

  '@media (max-width: 768px)': {
    container: {
      flexDirection: 'column', // Stack items vertically
      alignItems: 'center', // Center-align content horizontally
      textAlign: 'center', // Center text content
    },
    imageWrapper: {
      marginRight: '0', // Remove side margin
      marginBottom: '16px', // Add space below the image
      display: 'flex', // Ensure flex alignment
      justifyContent: 'center',
    },
    infoContainer: {
      alignItems: 'center', // Center-align text
      width: '100%', // Allow full width
      textAlign: 'center', // Center the text inside
    },
    name: {
      fontSize: '1.3em', // Slightly smaller font for smaller screens
      textAlign: 'center', // Explicitly center text
    },
    infoRow: {
      display: 'flex', // Ensure flexibility
      flexDirection: 'column', // Stack icons and text vertically
      alignItems: 'center', // Center-align each row
      textAlign: 'center', // Center text inside
      marginBottom: '8px', // Add spacing between rows
    },
    description: {
      fontSize: '1.1em', // Ensure readability
      textAlign: 'center', // Center description text
    },
    button: {
      display: 'flex', // Flexbox for proper alignment
      justifyContent: 'center', // Center-align button content
      alignItems: 'center',
      width: '100%', // Make the button span full width
      maxWidth: '250px', // Optional: Restrict max width to avoid stretching
      marginTop: '16px',
      textAlign: 'center', // Center text inside the button
    },
    buttonIcon: {
      marginRight: '6px', // Space between icon and text
    },
  },
};

Hero.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Hero;
