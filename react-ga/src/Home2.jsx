import React, { useEffect } from 'react';
import ReactGA4 from 'react-ga4';
import { useNavigate } from 'react-router-dom';
const Home2 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    ReactGA4.event({
      action: 'button_clicked home2',
      category: 'User Interaction home2',
      label: 'My Button Label home2',
    });
    navigate('/');
  };

  return (
    <div>
      <h2>Page Location --- Home2</h2>
      <button onClick={handleClick}>Back</button>
    </div>
  );
};

export default Home2;
