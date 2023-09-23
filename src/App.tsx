import React from 'react';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <div className='bg-light-grayish-cyan-bg min-h-screen'>
      <Header />
      <div className=' mt-12 mb-8 px-6'>
        <Card />
      </div>

    </div>
  );
}

export default App;
