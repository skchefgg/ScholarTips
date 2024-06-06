import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import girl from './../../public/images/girl.avif'
import RedirectButton from '../components/RedirectButton';


const JobDetails = () => {
    const { id } = useParams();
    const [job, setJobs] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/all-jobs/${id}`).then(res => res.json()).then(data => setJobs(data))
    }, [])

    const handleApply = async () => {

    }
    return (
        <>


            <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-3">
                {/* image gallery */}

                {/* description  */}

                <div className="mx-auto px-5 py-5 lg:px-5">
                    <h2 className="pt-3 text-5xl font-bold lg:pt-0 text-blue">
                        {job.scholarTitle}
                    </h2>
                    {/* <p className="mt-5 font-bold">
                    Availability:{" "}
                    {productDetailItem.availability ? (
                        <span className="text-green-600">In Stock </span>
                    ) : (
                        <span className="text-red-600">Expired</span>
                    )}
                </p> */}
                    <p className="font-bold mt-5">
                        LOCATION: <span className="font-normal">{job.location}</span>
                    </p>
                    <p className="font-bold  mt-5">
                        Scholarship type: <span className="font-normal">{job.scholarTitle}</span>
                    </p>
                    <p className="font-bold mt-5">
                        Category: <span className="font-normal">{job.category}</span>
                    </p>
                    <p>

                    </p>
                    {/* //skills ka bhi kro kuch */}
                    <p className="font-bold my-5">
                        Description: <span className="font-normal"></span>
                    </p>
                    <div>
                        {job.description}
                    </div>
                    <RedirectButton url={job.companyLogo} buttonText="Apply" />
                    {/* <button className='my-5 bg-blue py-3 px-8 text-white md:rounded rounded w-full'>Search</button> */}
                </div >

                <div className="">
                    <img src={girl} alt="" />



                </div>
            </section >

        </>


    )
}

export default JobDetails