import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Missions from './components/missions/Missions';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';

const App = () => (
  <div className="app">
    <Header />
    <Routes>
      <Route
        path="/"
        element={(
          <Rockets />)}
      />
      <Route
        path="/missions"
        element={(
          <Missions />)}
      />
      <Route
        path="/profile"
        element={(
          <MyProfile />)}
      />
    </Routes>
  </div>
);

export default App;
