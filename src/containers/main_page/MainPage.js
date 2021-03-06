import React, { useContext, useState, useEffect } from 'react';
import languageContext from '../../context/languageContext';
import { Typography, Button } from '@material-ui/core/';
import { getDirectorOfDay } from '../../apis/getData';
import styles from './MainPage.module.css';
import definition from './definition';
import { Link } from 'react-router-dom';

export default function MainPage() {
  const { language } = useContext(languageContext);
  const [director, setDirector] = useState(null);
  useEffect(() => {
    (async () => {
      const result = await getDirectorOfDay();
      setDirector(result);
    })();
  }, []);

  useEffect(() => {
    // if (director) {
    //   document.title = director.name[language];
    //   return () => {
    //     switch (language) {
    //       case 'en':
    //         document.title = 'Culture Portal';
    //         break;
    //       case 'ru':
    //         document.title = 'Культурный портал';
    //         break;
    //       default:
    //         document.title = 'Культурны партал';
    //         break;
    //     }
    //   };
    // }
    switch (language) {
      case 'en':
        document.title = 'Culture Portal';
        break;
      case 'ru':
        document.title = 'Культурный портал';
        break;
      default:
        document.title = 'Культурны партал';
        break;
    }
  }, [language]);

  const renderDirector = () => {
    return (
      <div className={styles.cardContent}>
        <img className={styles.photo} src={director.photo} alt="director of the day" />
        <div className={styles.cardText}>
          <Typography variant="h1">{director.name[language]}</Typography>
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
          <Button variant="contained" color="primary">
            <Link to={`/director/${director.id}`}>
              {language === 'en'
                ? 'Learn more'
                : language === 'ru'
                ? 'Узнать больше'
                : 'Даведайцеся больш'}
            </Link>
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.wrapper}>
      <Typography variant="h1" gutterBottom>
        {language === 'en' ? (
          <>
            Culture portal
            <br />
            Belarusian theatre directors
          </>
        ) : language === 'ru' ? (
          <>
            Культурный портал
            <br />
            Белорусские театральные режиссеры
          </>
        ) : (
          <>
            Культурны партал
            <br />
            Беларускiя тэатральныя рэжысёры
          </>
        )}
      </Typography>
      <div className={styles.directorText}>
        <Typography variant="subtitle1">{definition[language]}</Typography>
      </div>
      <div className={styles.card}>{director ? renderDirector() : 'Loading'}</div>
    </div>
  );
}
