import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Link,
  LinkDesign,
  ShellBar,
  ThemeProvider
} from '@ui5/webcomponents-react';
import React from 'react';
import './App.css';
import { Router, Route, Switch } from "react-router";

// Imports 
import Homepage from './components/Homepage';
import Header from './components/Header';
import SkillsAssessment from './components/SkillsAssessment';


function App() {
  return (
    <ThemeProvider>
      <section className="main-section">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/skills" exact>
            <SkillsAssessment />
          </Route>
        </Switch>
      </section>
    </ThemeProvider>
  );
}

export default App;
