import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../sidebar/Button';

const MyJobs = () => {
    // const email = "shubhamkumar99649@gmail.com"
    const [jobs, setJobs] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    //set cutrrent page
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:3000/myJobs/shubham@gmail.com`).then((res) => res.json()).then((data) => {
            setJobs(data);
            setIsLoading(false);
        });
    }, [searchText]);

    //pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentJobs = jobs.slice(indexOfFirstItem, indexOfLastItem)

    //next button & previous button

    const nextPage = () => {
        if (indexOfLastItem < jobs.length) {
            setCurrentPage(currentPage + 1)
        }

    }



    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }



    const handleSearch = () => {
        const filter = jobs.filter((job) => job.scholarTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
        console.log(filter);
        setJobs(filter);
        setIsLoading(false);


    }

    const handleDelete = (id) => {
        // console.log(id);
        fetch(`http://localhost:3000/job/${id}`, {
            method: "DELETE"
        }).then(res => res.json).then(data => {
            if (data.acknowledged === true) {
                alert("JOB DELETED!!")
            }
        })
    };



    //designing sections

    console.log(searchText);
    return (
        <div className=' max-w-screen-2xl mx-auto xl:px-24 px-4 '>
            <div className='my-jobs-container bg-[rgb(255,255,1)]'>
                <h1 className='text-center p-4 text-xl'>Available Scholarships : {jobs.length}</h1>
                <div className='search-box p-2 text-center mb-2'>
                    <input
                        onChange={(e) => setSearchText(e.target.value)}
                        type="text" name="search" id="search" className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full' />
                    <button className='bg-blue text-white font-semibold px-8 py-2 rounded-sm mb-4' onClick={handleSearch}>search</button>
                </div>
            </div>


            {/* table */}
            <section class="py-1 bg-blueGray-50">
                <div class="w-full xl:w-10/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
                    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded ">
                        <div class="rounded-t mb-0 px-4 py-3 border-0">
                            <div class="flex flex-wrap items-center">
                                <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                                    <h3 class="font-semibold text-base text-blueGray-700">All jobs</h3>
                                </div>
                                <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                    <Link to="/post-job">
                                        <button class="bg-blue text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">post a new job</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div class="block w-full overflow-x-auto">
                            <table class="items-center bg-transparent w-full border-collapse ">
                                <thead>
                                    <tr>
                                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            No.
                                        </th>
                                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Scholarship
                                        </th>
                                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            COMPANY NAME
                                        </th>
                                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            SALARY
                                        </th>
                                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            EDIT
                                        </th>
                                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            DELETE
                                        </th>
                                    </tr>
                                </thead>
                                {
                                    isLoading ? (<div className='flex items-center justify-center h-20'><p>Loading...</p></div>) : (<tbody>
                                        {
                                            currentJobs.map((job, index) => (
                                                <tr key={index}>
                                                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                                        {index + 1}
                                                    </th>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                        {job.scholarTitle}
                                                    </td>
                                                    <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        {job.location}
                                                    </td>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        {job.category}
                                                    </td>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <button className='bg-orange-300 py-2 px-6 text-white rounded-sm'>
                                                            <Link to={`/edit-job/${job?._id}`}>EDIT</Link>
                                                        </button>
                                                    </td>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <button onClick={() => handleDelete(job._id)} className='bg-red-600 py-2 px-6 text-white rounded-sm'>
                                                            DELETE
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>)
                                }


                            </table>
                        </div>
                    </div>
                </div>
                {/* pagination */}
                <div className='flex justify-center text-black space-x-8 mb-8'>
                    {
                        currentPage > 1 && (
                            <button className='hover:underline' onClick={prevPage}>previous</button>
                        )
                    }
                    {
                        indexOfLastItem < jobs.length && (
                            <button onClick={nextPage} className='hover:underline' >NEXT</button>
                        )
                    }
                </div>
            </section >
        </div >
    )
}

export default MyJobs