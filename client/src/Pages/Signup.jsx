import React, { useState } from 'react';
import './Register.css';
const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        state: '',
        email: '',
        password: '',
        course: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, such as sending data to server or performing validation
        console.log(formData);


    };

    return (
        <div className="register-container ">
            <h2 className='text-blue text-3xl font-semibold text-center'>REGISTER</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className='block mb-5'>Name:</label>
                    <input className='sselect' type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className='block mb-5'>State:</label>
                    <select className='sselect' name="course" value={formData.state} onChange={handleChange}>
                        <option value="">Select State</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
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
                <div className="form-group">
                    <label className='block mb-5'>Email:</label>
                    <input className='sselect' type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className='block mb-5'>Password:</label>
                    <input className='sselect' type="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className='block mb-5'>Course:</label>
                    <select className='sselect' name="course" value={formData.course} onChange={handleChange}>
                        <option value="">Select Degree</option>
                        <option value="Doctor of Philosophy (PhD)">Doctor of Philosophy (PhD)</option>
                        <option value="Master of Technology (MTech)">Master of Technology (MTech)</option>
                        <option value="Master of Science (MSc)">Master of Science (MSc)</option>
                        <option value="Master of Computer Applications (MCA)">Master of Computer Applications (MCA)</option>
                        <option value="Master of Business Administration (MBA)">Master of Business Administration (MBA)</option>
                        <option value="Bachelor of Technology (BTech)">Bachelor of Technology (BTech)</option>
                        <option value="Bachelor of Science (BSc)">Bachelor of Science (BSc)</option>
                        <option value="Bachelor of Medicine, Bachelor of Surgery (MBBS)">Bachelor of Medicine, Bachelor of Surgery (MBBS)</option>
                        <option value="Bachelor of Dental Surgery (BDS)">Bachelor of Dental Surgery (BDS)</option>
                        <option value="Bachelor of Ayurvedic Medicine and Surgery (BAMS)">Bachelor of Ayurvedic Medicine and Surgery (BAMS)</option>
                        <option value="Bachelor of Homeopathic Medicine and Surgery (BHMS)">Bachelor of Homeopathic Medicine and Surgery (BHMS)</option>
                        <option value="Bachelor of Pharmacy (BPharma)">Bachelor of Pharmacy (BPharma)</option>
                        <option value="Bachelor of Physiotherapy (BPT)">Bachelor of Physiotherapy (BPT)</option>
                        <option value="Bachelor of Nursing (BSc Nursing)">Bachelor of Nursing (BSc Nursing)</option>
                        <option value="Bachelor of Occupational Therapy (BOT)">Bachelor of Occupational Therapy (BOT)</option>
                        <option value="Bachelor of Veterinary Science & Animal Husbandry (BVSc & AH)">Bachelor of Veterinary Science & Animal Husbandry (BVSc & AH)</option>
                        <option value="Bachelor of Commerce (BCom)">Bachelor of Commerce (BCom)</option>
                        <option value="Bachelor of Arts (BA)">Bachelor of Arts (BA)</option>
                        <option value="Bachelor of Law (LLB)">Bachelor of Law (LLB)</option>
                        <option value="Bachelor of Fine Arts (BFA)">Bachelor of Fine Arts (BFA)</option>
                        <option value="Bachelor of Design (BDes)">Bachelor of Design (BDes)</option>
                        <option value="Bachelor of Education (BEd)">Bachelor of Education (BEd)</option>
                        <option value="Bachelor of Business Administration (BBA)">Bachelor of Business Administration (BBA)</option>
                        <option value="Bachelor of Hotel Management (BHM)">Bachelor of Hotel Management (BHM)</option>
                    </select>
                </div>
                <button className='sbutton' type="submit">Register</button>
            </form>
        </div>
    );
};

export default Signup
