import React from 'react';
import Header from './components/Header';
import Card from './components/Card';

import data from "./data.json"


function App() {
  return (
    <div className='bg-light-grayish-cyan-bg min-h-screen'>
      <Header />
      <div className='mb-8 px-6'>

        {data && data.map((item) => (
          <Card
            company={item.company}
            logo={item.logo}
            new={item.new}
            featured={item.featured}
            position={item.position}
            role={item.role}
            level={item.level}
            postedAt={item.postedAt}
            contract={item.contract}
            location={item.location}
            languages={item.languages}
            tools={item.tools}
          />
        ))}

      </div>

    </div>
  );
}

export default App;
