import React, { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';

import data from "./data.json"


function App() {

  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const handleFilter = (value: string) => {
    if (selectedFilters == undefined) {
      setSelectedFilters([value])
    } else {
      if (!selectedFilters.includes(value)) {
        setSelectedFilters([...selectedFilters, value])
      }
    }
  }

  const filteredData = data.filter((item) => {
    return selectedFilters?.every((filter) => {
      return (
        item.role == filter || item.level == filter || item.tools.includes(filter) || item.languages.includes(filter)
      )
    })
  })

  // console.log(selectedFilters)

  return (
    <div className='bg-light-grayish-cyan-bg min-h-screen'>
      <Header />


      {/* FILTER BODY */}
      {selectedFilters.length !== 0 &&
        <div className='relative -top-10 bg-white p-5 mx-6 md:mx-12 lg:mx-20 xl:mx-32'>
          <div className="w-[88%] flex flex-wrap gap-4">
            {selectedFilters.map((filter) => (

              <div className='flex gap-2 items-center bg-light-grayish-cyan-bg'>
                <div className='text-desaturated-dark-cyan px-2 py-2'>{filter}</div>
                <div
                  className='bg-desaturated-dark-cyan flex items-center self-stretch p-2 cursor-pointer hover:bg-very-dark-grayish-cyan'
                  onClick={() => setSelectedFilters((prevFilters) => prevFilters?.filter((element) => element !== filter))}
                >
                  <img src="./images/icon-remove.svg" alt="icon-remove" />
                </div>
              </div>

            ))}
          </div>

          <div
            className='absolute left-[86.5%] top-[40%] text-desaturated-dark-cyan cursor-pointer hover:underline lg:left-[92.5%]'
            onClick={() => setSelectedFilters([])}
          >
            Clear
          </div>
        </div>
      }

      <div className='mb-20 px-6 md:px-12 lg:px-20 xl:px-32'>
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
