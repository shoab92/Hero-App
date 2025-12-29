import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Pages/Home.jsx';
import Allapps from './Pages/Allapps.jsx';
import Installed from './Pages/Installed.jsx';
import SMplan from './Pages/SMplan.jsx';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<Allapps />} />
        <Route path="/apps/:id" element={<SMplan />} />
        <Route path="/installation" element={<Installed />} />
      </Route>
    </Routes>
  );
};

export default App;