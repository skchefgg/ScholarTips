import React from 'react'
import InputField from '../components/InputField'


const Location = ({ handleChange }) => {
    return (
        <div>
            <h4 className='text-lg font-medium mb-2'>Location</h4>
            <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name="test" id="test" value="" onChange={handleChange} />
                    <span className='checkmark'></span>All state
                </label>

                <InputField handleChange={handleChange} value="Andhra Pradesh" title="Andhra Pradesh" name="test" />
                <InputField handleChange={handleChange} value="Arunachal Pradesh" title="Arunachal Pradesh" name="test" />
                <InputField handleChange={handleChange} value="Assam" title="Assam" name="test" />
                <InputField handleChange={handleChange} value="Bihar" title="Bihar" name="test" />
                <InputField handleChange={handleChange} value="Chhattisgarh" title="Chhattisgarh" name="test" />
                <InputField handleChange={handleChange} value="Goa" title="Goa" name="test" />
                <InputField handleChange={handleChange} value="Gujarat" title="Gujarat" name="test" />
                <InputField handleChange={handleChange} value="Haryana" title="Haryana" name="test" />
                <InputField handleChange={handleChange} value="Himachal Pradesh" title="Himachal Pradesh" name="test" />
                <InputField handleChange={handleChange} value="Jharkhand" title="Jharkhand" name="test" />
                <InputField handleChange={handleChange} value="Karnataka" title="Karnataka" name="test" />
                <InputField handleChange={handleChange} value="Kerala" title="Kerala" name="test" />
                <InputField handleChange={handleChange} value="Madhya Pradesh" title="Madhya Pradesh" name="test" />
                <InputField handleChange={handleChange} value="Maharashtra" title="Maharashtra" name="test" />
                <InputField handleChange={handleChange} value="Manipur" title="Manipur" name="test" />
                <InputField handleChange={handleChange} value="Meghalaya" title="Meghalaya" name="test" />
                <InputField handleChange={handleChange} value="Mizoram" title="Mizoram" name="test" />
                <InputField handleChange={handleChange} value="Nagaland" title="Nagaland" name="test" />
                <InputField handleChange={handleChange} value="Odisha" title="Odisha" name="test" />
                <InputField handleChange={handleChange} value="Punjab" title="Punjab" name="test" />
                <InputField handleChange={handleChange} value="Rajasthan" title="Rajasthan" name="test" />
                <InputField handleChange={handleChange} value="Sikkim" title="Sikkim" name="test" />
                <InputField handleChange={handleChange} value="Tamil Nadu" title="Tamil Nadu" name="test" />
                <InputField handleChange={handleChange} value="Telangana" title="Telangana" name="test" />
                <InputField handleChange={handleChange} value="Tripura" title="Tripura" name="test" />
                <InputField handleChange={handleChange} value="Uttar Pradesh" title="Uttar Pradesh" name="test" />
                <InputField handleChange={handleChange} value="Uttarakhand" title="Uttarakhand" name="test" />
                <InputField handleChange={handleChange} value="West Bengal" title="West Bengal" name="test" />
                <InputField handleChange={handleChange} value="Andaman and Nicobar Islands" title="Andaman and Nicobar Islands" name="test" />
                <InputField handleChange={handleChange} value="Chandigarh" title="Chandigarh" name="test" />
                <InputField handleChange={handleChange} value="Dadra and Nagar Haveli and Daman and Diu" title="Dadra and Nagar Haveli and Daman and Diu" name="test" />
                <InputField handleChange={handleChange} value="Lakshadweep" title="Lakshadweep" name="test" />
                <InputField handleChange={handleChange} value="Delhi" title="Delhi" name="test" />
                <InputField handleChange={handleChange} value="Puducherry" title="Puducherry" name="test" />

            </div>
        </div>
    )
}

export default Location