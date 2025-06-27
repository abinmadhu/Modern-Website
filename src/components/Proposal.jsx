import React from 'react'
import styles from '../style'
import proposalImg from '../assets/proposal.png'

const Proposal = () => {
  return (
    <div className={`${styles.paddingY} ${styles.flexCenter}`}>
        <div className='flex flex-row items-center justify-between w-full bg-gray-100 px-6 py-10 md:px-8 md:py-12 rounded-[35px] relative'>
            <div className='flex flex-col items-start w-full  '>
            <h2 className={`${styles.heading2} `}>
                    Let’s make things happen
            </h2>
            <p className='mt-6 text-lg max-w-[470px]'>
                Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
            </p>
            <button className='mt-4 px-6 py-3 bg-secondary text-white rounded-lg hover:bg-blue-700 transition-colors duration-300'>
                Get your free proposal
            </button>
        </div>
        <div className=''>
            <img src={proposalImg} alt="proposal" className='sm:absolute top-[-50px] right-[50px] lg:right-[-25px]  h-[400px]  w-[600px] object-contain hidden lg:block'/>
        </div>
        </div>
        
    </div>
  )
}

export default Proposal