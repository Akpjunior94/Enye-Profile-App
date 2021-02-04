import React from 'react'

const Pagination = ({ profilePerPage, totalProfiles, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProfiles/profilePerPage); i++) {
     pageNumbers.push(i);
  }


  return (
    <nav className="py-4">
        <ul className="bg-white border rounded-lg">
          <div className='flex justify-end'>
            {pageNumbers.map(number => (
              <li key={number} onClick={() => paginate(number)} className="border border-green-300 hover:bg-green-300 hover:text-white p-3">
                <span>
                  {number}
                </span> 
              </li>
            ))}
          </div>
        </ul>
    </nav>
  )
}

export default Pagination;
