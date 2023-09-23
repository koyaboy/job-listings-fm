import React from 'react'

import { photosnap } from '../images/images'

const Card = () => {
    return (
        <div className='bg-white relative border-l-4 border-desaturated-dark-cyan px-6 pt-12 pb-6 rounded'>
            <img
                src={photosnap}
                alt="photosnap"
                className="absolute -top-8 w-16"
            />

            <div className='flex gap-6 items-end'>
                <div className='text-desaturated-dark-cyan font-bold'>Photosnap</div>
                <div className='flex gap-3'>
                    <div className='bg-desaturated-dark-cyan text-white rounded-full px-2 pt-[0.2em]'>NEW!</div>
                    <div className='bg-very-dark-grayish-cyan text-white px-2 pt-[0.2em] rounded-full'>FEATURED</div>
                </div>
            </div>

            <div className='text-very-dark-grayish-cyan font-bold mt-3'>Senior Frontend Developer</div>

            <ul className='flex list-disc gap-6 mt-2 text-dark-grayish-cyan'>
                <li className='list-none'>1d ago</li>
                <li>Full Time</li>
                <li>USA only</li>
            </ul>

            <hr className='mt-3 bg-very-dark-grayish-cyan border' />

            <div className='flex mt-4'>
                <div className="bg-light-grayish-cyan-bg text-desaturated-dark-cyan font-bold px-3 py-1">Frontend</div>
            </div>
        </div>
    )
}

export default Card