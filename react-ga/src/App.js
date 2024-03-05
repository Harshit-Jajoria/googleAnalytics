import React, { useEffect } from 'react';
import ReactGA4 from 'react-ga4';

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

  const handleClick = () => {
    ReactGA4.event({
      action: 'button_clicked',
      category: 'User Interaction',
      label: 'My Button Label',
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
