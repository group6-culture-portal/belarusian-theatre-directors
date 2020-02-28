import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Styleguide from './containers/styleguide/Styleguide';
import MainPage from './containers/main_page/MainPage';
import CreatortPage from './containers/creators_page/index.jsx';
import Workflow from './containers/workflow/workflow'
import Director from './containers/DirectorPage';

import LanguageContext from './context/languageContext';
import Navigation from './components/Navigation/navigation';

import './index.css';

function DummyComponent() {
  return <h1>Hello</h1>;
//  (
//     <ul>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/search">search</Link>
//       </li>
//       <li>
//         <Link to="/all_directors">all_directors</Link>
//       </li>
//       <li>
//         <Link to="/creators">creators</Link>
//       </li>
//       <li>
//         <Link to="/styleguide">styleguide</Link>
//       </li>
//       <li>
//         <Link to="/workflow">workflow</Link>
//       </li>
//     </ul>
//  );
}

function App() {
  const [language, setLanguage] = useState('en');
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <LanguageContext.Provider value={{ language: language, changeLanguage: setLanguage }}>
          <Router history={history}>
            <Navigation></Navigation>
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/search" exact component={DummyComponent} />
              <Route path="/all_directors" exact component={DummyComponent} />
              <Route path="/creators" exact component={CreatortPage} />
              <Route path="/styleguide" exact component={Styleguide} />
              <Route path="/workflow" exact component={Workflow} />
              <Route path="/director/:id" exact component={Director} />
            </Switch>
          </Router>
        </LanguageContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
