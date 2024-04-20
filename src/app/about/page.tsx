import styles from './about.module.css';
import firstPage from '../page';


import React, { CSSProperties } from 'react';

const AboutPage: React.FC = () => {
  return (
    
    <main>
      
      <h1 style={_h1}>About Us</h1>
      
      <button className={styles.button} type="button">Click Me!</button> 
    
    </main>
     
  );
};

export default AboutPage;


const _h1 : CSSProperties={color: 'red', fontSize: '1rem'}

