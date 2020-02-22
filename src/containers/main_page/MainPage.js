import React, { useContext, useState, useEffect } from 'react';
import languageContext from '../../context/languageContext';
import { Typography, Button } from '@material-ui/core/';
import { getDirectorOfDay } from '../../apis/getData';
import styles from './MainPage.module.css';
import definition from './definition';

export default function MainPage() {
  const { language } = useContext(languageContext);
  const [director, setDirector] = useState(null);
  useEffect(() => {
    (async () => {
      const result = await getDirectorOfDay();
      setDirector(result);
      console.log(result);
    })();
  });

  const renderDirector = () => {
    return (
      <div className={styles.cardContent}>
        <img className={styles.photo} src={director.photo} alt="director of the day photo" />
        <div className={styles.cardText} gutterBottom>
          <Typography variant="h2" style={{ fontSize: '40px' }} color="primary">
            {director.name[language]}
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ fontSize: '22px', fontStyle: 'italic' }}
            gutterBottom
          >
            {director.lifetime}
          </Typography>
          <div className={styles.underline}></div>
          <Typography variant="subtitle1" style={{ fontSize: '22px' }}>
            {director.summary[language]}
          </Typography>
          <Button variant="contained" color="primary" href="#">
            {language === 'en'
              ? 'Learn more'
              : language === 'ru'
              ? 'Узнать больше'
              : 'Даведайцеся больш'}
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.directorText}>
        <Typography variant="subtitle1">{definition[language]}</Typography>
      </div>
      <div className={styles.card}>{director ? renderDirector() : 'Loading'}</div>
    </div>
  );
}
