import React, { useEffect } from 'react';
import ReactGA4 from 'react-ga4';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    ReactGA4.event({
      action: 'button_clicked home1',
      category: 'User Interaction home1',
      label: 'My Button Label home1',
    });
    navigate('/home2')
  };

  return (
    <div>
      <h1>React App Demo</h1>
      <h2>Page Location --- Home</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
