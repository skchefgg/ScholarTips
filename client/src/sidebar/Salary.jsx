import React from 'react'
import Button from './Button'
import InputField from '../components/InputField'
const Salary = ({ handleChange, handleClick }) => {
    return (
        <div>
            <h4 className='text-lg font-medium mb-2'>Status</h4>
            <div className='mb-4'>
                <Button onClickHandler={handleClick} value="Inactive" title="Inactive" />
                <Button onClickHandler={handleClick} value="active" title="Active" />
            </div>


        </div>
    )
}

export default Salary