// about.tsx
import React from 'react';
import styles from '../about/about.module.css';
import Navbar from '@/components/navbar';

const AboutPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.aboutSection}>
          <h1 className={styles.aboutHeading}>About Me</h1>
          <p className={styles.aboutText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis eros vel mi sagittis,
            non sagittis nunc fringilla. Maecenas nec augue eget sapien vehicula dignissim. 
            Phasellus pharetra magna eget dolor interdum, vel consequat libero laoreet. 
            Fusce convallis justo vitae metus sodales ultricies.
          </p>
          <p className={styles.aboutText}>
            Etiam vitae aliquam sem. Nullam varius nulla eget lectus ultrices, a tempor justo varius. 
            Vestibulum nec vehicula sapien. Donec et tellus id purus mollis commodo. 
            Vivamus gravida purus eu eros suscipit, vitae interdum est vehicula.
          </p>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;




