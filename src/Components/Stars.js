import React from 'react'


const Stars = ({stars}) => {
  const ratingStar= Array.from({length : 5} , (elme , index ) =>{
    let number =index + 0.5;
    return(
      <span key={index}>
      {
        (stars >= index + 1)  ? (<i className="fa-solid fa-star iconstar"></i>) : (stars >= number) ?
        (<i className="fa-solid fa-star-half-stroke iconstar"></i>)
        : (<i className="fa-regular fa-star iconstars"></i>)
      }
    </span>
    );
    // <span key={index}>
    //   {
    //     stars <= index + 1  ? (<i className="fa-solid fa-star iconstar"></i>) : stars >= number ?
    //     (<i className="fa-solid fa-star-half iconstar"></i>)
    //     : (<i className="fa-regular fa-star iconstar"></i>)
    //   }
    // </span>
    
  })
  return (
    <>
      <div className="icon-style">
        {ratingStar}

      </div>
    </>
  )
}

export default Stars