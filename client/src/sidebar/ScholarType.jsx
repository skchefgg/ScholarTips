import React from 'react'
import InputField from '../components/InputField'
const ScholarType = ({ handleChange }) => {
    return (
        <div>
            <h4 className='text-lg font-medium mb-2'>Category</h4>
            <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name="test" id="test" value="" onChange={handleChange} />
                    <span className='checkmark'></span>ALL
                </label>
                <InputField handleChange={handleChange} value="general" title="GEN" name="test" />
                <InputField handleChange={handleChange} value="SC" title="SC" name="test" />
                <InputField handleChange={handleChange} value="ST" title="ST" name="test" />
                <InputField handleChange={handleChange} value="OBC" title="OBC" name="test" />

            </div>
        </div>
    )
}

export default ScholarType