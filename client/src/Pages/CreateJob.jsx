import React, { useState } from 'react'
import CreatableSelect from 'react-select/creatable';
import { useForm } from "react-hook-form"
const CreateJob = () => {

    const [selectedOption, setSelectedOption] = useState(null);

    const {
        register,
        handleSubmit, reset,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        //console.log(data);
        fetch("http://localhost:3000/post-job", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then((res) => res.json()).then((result) => {
            console.log(result);
            if (result.acknowledged === true) {
                alert("JOB POSTED SUCCESS!!");
            }
            reset()
        });
    };

    const options = [
        { "value": "Doctor of Philosophy (PhD)", "label": "Doctor of Philosophy (PhD)" },
        { "value": "Master of Technology (MTech)", "label": "Master of Technology (MTech)" },
        { "value": "Master of Science (MSc)", "label": "Master of Science (MSc)" },
        { "value": "Master of Computer Applications (MCA)", "label": "Master of Computer Applications (MCA)" },
        { "value": "Master of Business Administration (MBA)", "label": "Master of Business Administration (MBA)" },
        { "value": "Bachelor of Technology (BTech)", "label": "Bachelor of Technology (BTech)" },
        { "value": "Bachelor of Science (BSc)", "label": "Bachelor of Science (BSc)" },
        { "value": "Bachelor of Computer Applications (BCA)", "label": "Bachelor of Computer Applications (BCA)" },
        { "value": "Bachelor of Commerce (BCom)", "label": "Bachelor of Commerce (BCom)" },
        { "value": "Bachelor of Arts (BA)", "label": "Bachelor of Arts (BA)" }

    ]


    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <div className='bg-[#FAFAFA] py-8 px-4 lg:px-16'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* 1st row */}
                    <div className=' create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 mt-2 text-lg'>Scholarship name</label>
                            <input type="text" {...register("scholarTitle")} className='create-job-input' />
                        </div>

                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 mt-2 text-lg'>Category</label>
                            <select {...register("category")} className='create-job-input'>
                                <option value="">Select Category</option>
                                <option value="OBC">OBC</option>
                                <option value="General">General</option>
                                <option value="SC">SC</option>
                                <option value="ST">ST</option>
                            </select>
                        </div>
                    </div>



                    {/* 2th row */}

                    <div className='mt-8 create-job-flex'>

                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 mt-2 text-lg'>Loaction</label>
                            <select {...register("location")} className='create-job-input'>
                                <option value="">Select State</option>
                                <option value="All india">All India</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                                <option value="Lakshadweep">Lakshadweep</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Puducherry">Puducherry</option>

                            </select>
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 mt-2 text-lg'>Scholarship type</label>
                            <select {...register("scholarType")} className='create-job-input'>
                                <option value="">Select Type</option>
                                <option value="NGO">NGO</option>
                                <option value="Government">Government</option>
                                <option value="Private">Private</option>
                            </select>
                        </div>
                    </div>

                    {/* 3th row */}
                    <div className='mt-8'>
                        <label className='block mb-2 mt-2 text-lg'>Course Applicable</label>
                        <CreatableSelect defaultValue={selectedOption} onChange={setSelectedOption} options={options} isMulti className='create-job-input py-4' />
                    </div>

                    {/* 4th rowe */}

                    <div className='w-full mt-8'>
                        <label className='block mb-2  mt-2 text-lg'>Description / Eligibility</label>
                        <textarea className='w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700'
                            rows={6} placeholder='description'
                            {...register("description")} />
                    </div>

                    {/* last row */}
                    <div className='create-job-flex mt-8'>
                        {/* <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 mt-2 text-lg'>company logo</label>
                            <input type="url" placeholder='photo paste kr as url' {...register("companyLogo")} className='create-job-input' />
                        </div> */}
                        <div className=' lg:w-1/2 w-full'>
                            <label className='block mb-2 mt-2 text-lg'>Posted by</label>
                            <input type="email" placeholder='your email' {...register("postedBy")} className='create-job-input' />
                        </div>
                        <div className=' lg:w-1/2 w-full '>
                            <label className='block mb-2 mt-2 text-lg'>Official Link</label>
                            <input type="url" placeholder='http://example.com' {...register("companyLogo")} className='create-job-input' />
                        </div>
                    </div>

                    <input type="submit" className='block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer' />
                </form>
            </div>
        </div>
    )
}

export default CreateJob