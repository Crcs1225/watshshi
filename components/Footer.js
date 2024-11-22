const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        &copy; {currentYear} Marc Daniel Caracas. All Rights Reserved.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333', // Footer background color
    color: '#fff', // Text color
    textAlign: 'center',
    padding: '16px 0', // Vertical and horizontal padding
    position: 'fixed', // Fixed at the bottom
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000, // Ensures footer stays on top if needed
  },
  text: {
    fontSize: '14px',
    margin: 0, // Remove default margin for p tag
  },
};

export default Footer;
