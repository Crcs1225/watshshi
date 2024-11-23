import Hero from '@components/Hero';
import About from '@components/About';
import Skills from '@components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Socials from '@/components/Socials';
import Footer from '@/components/Footer';

export default function Home() {
  const skills = [ 
    'Flutter', 
    'Firebase', 
    'Next.js', 
    'CSS', 
    'HTML', 
    'Python',
    'YOLO',
    'Tensorflow',
    'Sqlite'
  ];

  const experiences = [
    { title: 'Applications and Systems Freelancer', description: 'Upwork (Current)', isHovered: false },
    { title: 'Internship', description: 'Company X (2025)', isHovered: false },
    { title: 'BS Computer Science', description: 'Pangasinan State University, Lingayen Campus (2025)', isHovered: true },
  ];
  
  const projects = [
    { title: 'Kitchen Helper', description: 'AI with Recommendation System' },
    { title: 'Panitik', description: 'Book Application Integrated with Gemini Model' },
    { title: 'Library Reservation App', description: 'Freelance Project' },
  ];
  
  const certificates = [
    { title: 'Responsive Web Design', description: 'freeCodeCamp' },
    { title: 'Programming for Beginners Using Python', description: 'DICT' },
    { title: 'StartUp Hackathon Finalist', description: 'UPICT' },
  ];

  return (
    <main style={styles.main}>
      <Hero
        imageSrc="/images/picture.jpg"
        name="Marc Daniel Caracas"
        location="Pangasinan, Philippines , 2406"
        email="miyukicodes94@gmail.com"
        description="Intern Computer Science Student"
      />
      <div style={styles.content}>
        <div style={styles.leftColumn}>
          <About
            title="About"
            description={
              <>
                <p style={styles.paragraph}>
                  I am an intern and a graduating Computer Science student passionate about leveraging technology to solve real-world problems. My expertise spans Flutter, Data Science, Machine Learning, Object Detection, and Recommendation Systems. I have built native applications and love using AI and programming to create innovative solutions. I thrive in collaborative environments and am always seeking opportunities to learn and grow.
                </p>
                <p style={styles.paragraph}>
                  Through my academic journey and hands-on projects, I have gained experience with tools like TensorFlow, YOLO, Firebase, and Python. I have worked on recommendation systems and AI-based applications that make a tangible impact. I am excited to continue advancing my skills and contribute to meaningful projects in the tech industry.
                </p>
              </>
            }
          />

          <Skills
            title="Skills"
            skills={skills}
          />
        </div>
        <div style={styles.rightColumn}>
          <Experience title="Experiences" experiences={experiences} />
        </div>
      </div>
      <div style={styles.certificationsAndProjects}>
        <div style={styles.certificationsColumn}>
          <Certifications certifications={certificates} />
        </div>
        <div style={styles.projectsColumn}>
          <Projects projects={projects} />
        </div>
      </div>
      <Socials
        facebookUrl="https://www.facebook.com/caracasmarcdan/"
        linkedinUrl="https://linkedin.com/in/zrmdcs12"
        githubUrl="https://github.com/Crcs1225"
      />
      <Footer />
    </main>
  );
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    minHeight: '100vh',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1200px',
    gap: '16px',
    flexWrap: 'wrap',
    height: 'auto',
    alignItems: 'stretch',
    marginBottom: '32px',
  },
  leftColumn: {
    flex: '3 1 300px',  // Allow left column to take more space, and have a minimum width of 300px
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    minWidth: '300px',
    minHeight: '100%',
  },
  rightColumn: {
    flex: '1 1 300px',  // Allow right column to take the rest of the space with a minWidth of 300px
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '8px',
    minWidth: '300px',
    minHeight: '100%',
  },
  certificationsAndProjects: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1200px',
    gap: '16px',
    flexWrap: 'wrap',
    height: 'auto',
    alignItems: 'stretch',
    marginBottom: '32px',
  },
  certificationsColumn: {
    flex: '1', // Certifications should take 48% of the width (adjustable)
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100%',
  },
  projectsColumn: {
    flex: '1', // Projects should take 48% of the width (adjustable)
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100%',
  },
  '@media (max-width: 768px)': {
    content: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    leftColumn: {
      minWidth: '100%',
    },
    rightColumn: {
      minWidth: '100%',
    },
    certificationsAndProjects: {
      flexDirection: 'column', // Stack certifications and projects on small screens
      alignItems: 'center', // Center align the columns on mobile
    },
    certificationsColumn: {
      minWidth: '100%', // Full width on mobile
    },
    projectsColumn: {
      minWidth: '100%', // Full width on mobile
    },
  },
  paragraph: {
    marginBottom: '20px', // Adjust this value to control the space between paragraphs
  },
};
