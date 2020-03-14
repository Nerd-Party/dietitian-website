import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import { AboutPage, HomePage, WhenPage, WherePage } from './views';
import { Header, Footer } from './components';
import stylesheet from './stylesheet';

const useStyles = createUseStyles(stylesheet);


export default function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.appContainer}>
        <Header />
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/about'>
            <AboutPage />
          </Route>
          <Route path='/where'>
            <WherePage />
          </Route>
          <Route path='/when'>
            <WhenPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
