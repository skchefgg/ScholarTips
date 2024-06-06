import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom';

const SalaryPage = () => {
    const [searchText, setSearchText] = useState("");
    const [salary, setSalary] = useState([]);
    useEffect(() => {
        fetch("salary.json").then(res => res.json()).then(data => setSalary(data))
    }, [])

    const handleSearch = () => {
        const filter = salary.filter((job) => job.bankName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
        console.log(filter)
        setSalary(filter)
    }
    console.log(searchText);
    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <PageHeader title={"Esimate salary"} path={"Salary"} />
            <div className='mt-5'>
                <div className='search-box p-2 text-center mb-2'>
                    <input type="text" name="search" id="search" className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full' onChange={(e) => setSearchText(e.target.value)} />
                    <button onClick={handleSearch} className='bg-blue text-white font-semibold px-8 py-2 rounded-sm mb-4'>Search</button>
                </div>
            </div>

            {/* salary display */}
            <div className=' grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 items-center'>
                {
                    salary.map((data) => (
                        <div key={data.id} className='hover:bg-[rgb(255,255,1)] hover:scale-x-110 hover:scale-y-110 shadow px-4 py-8 '>
                            <h4 className='font-semibold text-xl '>
                                {data.bankName}
                            </h4>

                            <p className='my-2 font-medium text-blue text-lg'>
                                {data.interestRate}
                            </p>

                            <div className='flex flex-wrap gap-4'>
                                {/* <a href="/" className='underline'>{ }</a> */}
                                <Link to={data.officialWebsite} className='hover:underline'>{data.bankName}</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default SalaryPage