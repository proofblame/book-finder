import React, { useState } from 'react';
import './Main.css';

import Elements from '../Elements/Elements';

const Main = () => {
  const [result, setResult] = useState('');

  return (
    <main className="main section">
      <p className="main__subtitle">Found {result} results</p>
      <Elements />
    </main>
  );
};

export default Main;
