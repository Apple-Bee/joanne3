import styles from './about.module.css'


import React, { CSSProperties } from 'react';

const AboutPage: React.FC = () => {
  return (
    <div>
      <h1 style={_h1}>About Us</h1>
      <p className={styles.about_p}>Welcome to our About page!</p>
      <button className={styles.button} type="button">Click Me!</button> 
    </div>
     
  );
};

export default AboutPage;


const _h1 : CSSProperties={color: 'red', fontSize: '1rem'}

