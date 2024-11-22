import Image from 'next/image';
import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Hero = ({ imageSrc, name, location, email, description }) => {
  return (
    <div style={styles.container}>
      <div style={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={`${name} picture`}
          width={200}
          height={200}
          style={styles.image}
        />
      </div>
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
    flexDirection: 'row', // Align elements horizontally
    alignItems: 'center', // Vertically align image and text
    margin: '16px 0', // Add vertical spacing between different sections
  },
  imageWrapper: {
    width: '200px', // Set a fixed width
    height: '200px', // Set a fixed height
    borderRadius: '8px',
    marginRight: '16px', // Add spacing between the image and text
    overflow: 'hidden', // Ensure the image does not overflow the container
  },
  image: {
    width: 'auto', // Ensures the image takes the full width of its container
    height: 'auto', // Height adjusts to maintain aspect ratio
    objectFit: 'cover', // Cover ensures that the image covers the container while maintaining the aspect ratio
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  infoRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
  },
  icon: {
    marginRight: '8px', // Add spacing between icon and text
    color: '#555',
  },
  name: {
    fontSize: '30px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  info: {
    fontSize: '16px',
    color: '#555',
  },
  description: {
    fontSize: '18px',
    color: '#444',
  },
  button: {
    display: 'flex', // Ensures the button only takes width of its content
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '6px 12px', // Make the button smaller
    borderRadius: '12px', // More rounded edges
    textDecoration: 'none',
    fontSize: '14px', // Smaller text
    marginTop: '16px',
    cursor: 'pointer',
    maxWidth: '125px', 
    whiteSpace: 'nowrap', // Prevents text from wrapping
  },
  buttonIcon: {
    marginRight: '6px', // Adjust spacing between icon and text
  },
   // Media query for small screens
   '@media (max-width: 768px)': {
    container: {
      flexDirection: 'column', // Change layout to column on small screens
      textAlign: 'center', // Center text on small screens
    },
    imageWrapper: {
      marginRight: '0', // Remove right margin when in column layout
      marginBottom: '16px', // Add spacing between image and text
    },
    infoContainer: {
      alignItems: 'center', // Center the text on small screens
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
