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

// Imports 
import Homepage from './components/Homepage';
import Header from './components/Header';


function App() {
  return (
    <ThemeProvider>
      <section className="main-section">
        <Header />
        <Homepage />
      </section>
    </ThemeProvider>
  );
}

export default App;
