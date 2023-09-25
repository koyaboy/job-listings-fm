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


      {selectedFilters &&
        <div className='relative -top-8 bg-white flex flex-wrap gap-4 p-5 mx-6'>
          {selectedFilters.map((filter) => (
            <div className='flex gap-2 items-center bg-light-grayish-cyan-bg'>
              <div className='text-desaturated-dark-cyan px-2 py-2'>{filter}</div>
              <div className='bg-desaturated-dark-cyan flex items-center self-stretch p-2'>
                <img src="./images/icon-remove.svg" alt="icon-remove" />
              </div>
            </div>
          ))}
        </div>
      }

      <div className='mb-8 px-6'>
        {selectedFilters ? (
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
          )
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
