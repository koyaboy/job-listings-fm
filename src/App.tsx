import React, { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';

import data from "./data.json"


function App() {

  const [selectedFilters, setSelectedFilters] = useState<string[]>()

  const handleFilter = (value: string) => {
    if (selectedFilters == undefined) {
      setSelectedFilters([value])
    } else {
      if (!selectedFilters.includes(value)) {
        setSelectedFilters([...selectedFilters, value])
      }
    }
  }

  console.log(selectedFilters)

  const filteredData = data.filter((item) => {
    return selectedFilters?.every((filter) => {
      return (
        item.role == filter || item.level == filter || item.tools.includes(filter) || item.languages.includes(filter)
      )
    })
  })

  return (
    <div className='bg-light-grayish-cyan-bg min-h-screen'>
      <Header />

      <div className='mb-8 px-6'>
        {selectedFilters ?

          filteredData.map((item) => (
            <Card
              id={item.id}
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
              onFilterClick={handleFilter}
            />
          ))
          :
          data.map((item) => (
            <Card
              id={item.id}
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
              onFilterClick={handleFilter}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
