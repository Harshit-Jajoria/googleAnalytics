import React, { useEffect } from 'react';
import ReactGA4 from 'react-ga4';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Home2 from './Home2';

const initializeGA4 = async () => {
  const measurementId = 'G-J3YJQ8NNE9';
  try {
    await ReactGA4.initialize(measurementId);
  } catch (error) {
    console.error('Failed to initialize GA4:', error);
  }
};

const App = () => {
  useEffect(() => {
    initializeGA4();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home2' element={<Home2/>}></Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
