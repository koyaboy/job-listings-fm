import React from 'react'

type CardProps = {
    id: number
    company: string
    logo: string
    new: boolean
    featured: boolean,
    position: string,
    role: string,
    level: string,
    postedAt: string,
    contract: string,
    location: string,
    languages: string[],
    tools: string[]
    onFilterClick: (filterValue: string) => void
}

const Card = (props: CardProps) => {

    function handleFilterClick(value: string) {
        props.onFilterClick(value)
    }

    return (
        <div className={`bg-white relative ${props.featured && 'border-l-4'} border-desaturated-dark-cyan px-6 pt-10 pb-6 rounded mt-16 shadow-desaturated-dark-cyan shadow-custom lg:flex lg:items-center lg:justify-between`}>
            <div className='lg:flex lg:gap-4'>
                <img
                    src={props.logo}
                    alt={props.company}
                    className="absolute -top-8 w-16 lg:relative lg:top-0 lg:w-24"
                />

                <div>
                    <div className='flex gap-6 items-end'>
                        <div className='text-desaturated-dark-cyan font-bold'>{props.company}</div>
                        <div className='flex gap-3'>
                            {props.new && <div className='bg-desaturated-dark-cyan text-white rounded-full px-2 pt-[0.2em]'>NEW!</div>}
                            {props.featured && <div className='bg-very-dark-grayish-cyan text-white px-2 pt-[0.2em] rounded-full'>FEATURED</div>}
                        </div>
                    </div>

                    <div className='text-very-dark-grayish-cyan font-bold mt-3 cursor-pointer text-lg hover:text-desaturated-dark-cyan lg:mt-1 lg:text-xl'>{props.position}</div>

                    <ul className='flex list-disc gap-6 mt-2 text-dark-grayish-cyan lg:mt-1'>
                        <li className='list-none'>{props.postedAt}</li>
                        <li>{props.contract}</li>
                        <li>{props.location}</li>
                    </ul>
                </div>
            </div>

            <hr className='mt-3 bg-very-dark-grayish-cyan border lg:hidden' />


            <div className='flex mt-4 gap-4 flex-wrap'>
                <div className="bg-light-grayish-cyan-bg text-desaturated-dark-cyan font-bold px-3 py-1 cursor-pointer hover:bg-desaturated-dark-cyan hover:text-white" onClick={() => handleFilterClick(props.role)}>{props.role}</div>
                <div className="bg-light-grayish-cyan-bg text-desaturated-dark-cyan font-bold px-3 py-1 cursor-pointer hover:bg-desaturated-dark-cyan hover:text-white" onClick={() => handleFilterClick(props.level)}>{props.level}</div>
                {props.tools.map((tool, index) => (
                    <div key={index} className="bg-light-grayish-cyan-bg text-desaturated-dark-cyan font-bold px-3 py-1 cursor-pointer hover:bg-desaturated-dark-cyan hover:text-white" onClick={() => handleFilterClick(tool)}>{tool}</div>
                ))}
                {props.languages.map((language, index) => (
                    <div key={index} className="bg-light-grayish-cyan-bg text-desaturated-dark-cyan font-bold px-3 py-1 cursor-pointer hover:bg-desaturated-dark-cyan hover:text-white" onClick={() => handleFilterClick(language)}>{language}</div>
                ))}
            </div>

        </div>
    )
}

export default Card