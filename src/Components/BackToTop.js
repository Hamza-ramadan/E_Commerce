import React, { useEffect, useState } from 'react'

const BackToTop = () => {
    const [topButton , setButtonTop] =useState(false);

    useEffect(() => {
        window.addEventListener("scroll" ,() => {
            if (window.scrollY > 200) {
                setButtonTop(true);
            }else{
                setButtonTop(false);
            }
        })
    },[])

    const scrollUp = () => {
        window.scrollTo({
            top:0,
             behavior:"smooth"
        })
    }
  return (
    <>
        {topButton && (
            <button onClick={scrollUp} className='btn-top'><i className="fa-solid fa-angles-up"></i></button>
        )}
    </>
  )
}

export default BackToTop