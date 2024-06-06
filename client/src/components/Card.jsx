import React from 'react'
import { Link } from 'react-router-dom';
import { FiAlertCircle, FiAlertOctagon, FiArchive, FiCalendar, FiClock, FiDollarSign, FiMapPin } from 'react-icons/fi'
import { FaBriefcase } from "react-icons/fa";

const Card = ({ data }) => {
    const { _id, companyName, scholarTitle, companyLogo, minPrice, maxPrice, category, location, scholarType, postingDate, description } = data;
    return (
        <section className='card'>
            <Link to={`/job/${_id}`} className='flex gap-4 flex-col sm:flex-row items-start'>
                <img src="images\book_3330314.png" alt="" />
                <div >
                    <h4 className='text-primary mb-1 text-lg font-semibold mb-2'>
                        {scholarTitle}
                    </h4>
                    {/* <h3 className='text-lg font-semibold mb-2'>{scholarTitle}</h3> */}
                    <div className='text-primary/70 text-base flex flex-wrap gap-2 mb-2'>
                        <span className='flex items-center gap-2'>
                            <FiMapPin /> {location}
                        </span>
                        <span className='flex items-center gap-2'>
                            <FaBriefcase /> {scholarType}
                        </span>
                        {/* <span className='flex items-center gap-2'>
                            <FiDollarSign /> {minPrice}-{maxPrice}
                        </span> */}
                        {/* <span className='flex items-center gap-2'>
                            <FiCalendar /> {postingDate}
                        </span> */}
                        <span className='flex items-center gap-2'>
                            <FiArchive /> {category}
                        </span>
                    </div>
                </div>
            </Link>
        </section>
    )
}

export default Card