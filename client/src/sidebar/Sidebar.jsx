import React from 'react'
import Location from './Location'
import Salary from './Salary'
import JobPostingData from './JobPostingData'
import WorkExperience from './WorkExperience'
import ScholarType from './ScholarType'

const Sidebar = ({ handleChange, handleClick }) => {
    return (
        <div className='space-y-5'>
            <h3 className='text-lg text-center font-bold text-white bg-blue mb-2'>Filters</h3>
            <Location handleChange={handleChange} />
            <ScholarType handleChange={handleChange} />
        </div>
    )
}

export default Sidebar