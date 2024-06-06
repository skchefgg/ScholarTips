import React from 'react'

const Jobs = ({ result }) => {
  return (
    <>
      <div>
        <h3 className='text-lg bg-blue text-white text-center font-bold mb-2'>{result.length} data fetched</h3>
      </div>
      <section>{result}</section>
    </>
  )
}

export default Jobs