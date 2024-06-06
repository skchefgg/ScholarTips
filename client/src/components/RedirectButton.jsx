import React from 'react';

const RedirectButton = ({ url, buttonText }) => {
    const redirectToUrl = () => {
        window.location.href = url;
    };

    return (
        <button className='my-5 bg-blue py-3 px-8 text-white md:rounded rounded w-full' onClick={redirectToUrl}>{buttonText}</button>
    );
};

export default RedirectButton;
