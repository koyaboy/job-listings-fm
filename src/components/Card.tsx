import React from 'react'

type CardProps = {
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
}

const Card = (props: CardProps) => {
    return (
        <div className='bg-white relative border-l-4 border-desaturated-dark-cyan px-6 pt-10 pb-6 rounded mt-16 shadow-desaturated-dark-cyan shadow-custom'>
            <img
                src={props.logo}
                alt={props.company}
                className="absolute -top-8 w-16"
            />

            <div className='flex gap-6 items-end'>
                <div className='text-desaturated-dark-cyan font-bold'>{props.company}</div>
                <div className='flex gap-3'>
                    {props.new && <div className='bg-desaturated-dark-cyan text-white rounded-full px-2 pt-[0.2em]'>NEW!</div>}
                    {props.featured && <div className='bg-very-dark-grayish-cyan text-white px-2 pt-[0.2em] rounded-full'>FEATURED</div>}
                </div>
            </div>

            <div className='text-very-dark-grayish-cyan font-bold mt-3'>{props.position}</div>

            <ul className='flex list-disc gap-6 mt-2 text-dark-grayish-cyan'>
                <li className='list-none'>{props.postedAt}</li>
                <li>{props.contract}</li>
                <li>{props.location}</li>
            </ul>

            <hr className='mt-3 bg-very-dark-grayish-cyan border' />

            <div className='flex mt-4 gap-4 flex-wrap'>
                <div className="bg-light-grayish-cyan-bg text-desaturated-dark-cyan font-bold px-3 py-1">{props.role}</div>
                <div className="bg-light-grayish-cyan-bg text-desaturated-dark-cyan font-bold px-3 py-1">{props.level}</div>
                {props.tools.map((tool) => (
                    <div className="bg-light-grayish-cyan-bg text-desaturated-dark-cyan font-bold px-3 py-1">{tool}</div>
                ))}
                {props.languages.map((language) => (
                    <div className="bg-light-grayish-cyan-bg text-desaturated-dark-cyan font-bold px-3 py-1">{language}</div>
                ))}

            </div>

        </div>
    )
}

export default Card