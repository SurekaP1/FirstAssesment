import React from 'react'
import './programs.css'
import program_1 from '../../assets/programs-1.png'
import program_2 from '../../assets/programs-2.png'
import program_3 from '../../assets/programs-3.png'


const programs = () => {
  return (
    <div className='programs'>
    <div className="program">
        <img src={program_1} alt="" />
    </div> 
    <div className="program">
        <img src={program_2} alt="" />
    </div>   
    <div className="program">
        <img src={program_3} alt="" />
    </div>
    </div>
  )
}

export default programs