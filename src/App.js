import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Styleguide from './containers/styleguide/Styleguide';
import MainPage from './containers/main_page/MainPage';
import CreatortPage from './containers/creators_page/index.jsx';
import Search from './containers/search_page/SearchPage';
import Page404 from './containers/page_404/page404';
import Workflow from './containers/workflow/workflow';
import Director from './containers/DirectorPage';

import LanguageContext from './context/languageContext';
import Navigation from './components/Navigation/navigation';
import { Parallax, Background } from 'react-parallax';

import './index.css';

function App() {
  const [language, setLanguage] = useState('en');
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <LanguageContext.Provider value={{ language: language, changeLanguage: setLanguage }}>
          <Router history={history}>
          <Parallax
            blur={2}
            bgImage={require('./assets/comedy-tragedy-masks.png')}
            strength={600}
            bgImageStyle={{width:'100%', height:"100vw"}}
          >
            <Navigation></Navigation>
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/search" exact component={Search} />
              <Route path="/creators" exact component={CreatortPage} />
              <Route path="/styleguide" exact component={Styleguide} />
              <Route path="/workflow" exact component={Workflow} />
              <Route path="/director/:id" exact component={Director} />
              <Route path="*" exact component={Page404} />
            </Switch>
          </Parallax>
          </Router>
        </LanguageContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
