import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import GridLayout from './components/GridLayout';
import MainContainer from './containers/MainContainer';

const App: React.FC = () => {
  return (
    <div className="App" style={{paddingLeft: '100px', paddingRight: '100px', paddingTop: '50px'}}>
      {/*
      <GridLayout></GridLayout>
      */}
      <MainContainer/>
    </div>
  );
}

export default App;
