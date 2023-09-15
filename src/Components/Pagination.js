import React from 'react'

const Pagination = ({setitem,setCurrentPage,currentProducts,proPerPage ,totalPro }) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalPro /proPerPage); i++) {
        pageNumber.push(i);
        
    }
    const paginate= (pageNumber) => {
        setCurrentPage(pageNumber);
        setitem(currentProducts);
    console.log(currentProducts);
    
      }
  return (
    <div>
        <ul className='pagination'>
            {pageNumber.map(number => (
                <button onClick={() => paginate(number)} key={number} className='page-link'>
                    <li  >{number}</li>
                </button>
            ))}
        </ul>
    </div>
  )
}

export default Pagination