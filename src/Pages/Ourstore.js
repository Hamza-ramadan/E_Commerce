// import React, { useRef } from 'react'
import BreadCrumb from '../Components/BreadCrumb'
// import Featured from '../Components/Featured'
// import Metaaaa from '../Components/Meeeta'
// import { Helmet } from 'react-helmet'
import featured_1 from "../images/watch.jpg"
import { useState } from 'react'
import Products from '../Components/Products'
import { useSelector } from 'react-redux'
import Pagination from '../Components/Pagination'

    
const Ourstore = ({setSategoryVal,categoryVal,paginate ,setitem ,item ,proPerPage ,currentProducts ,setCurrentPage}) => {
    const [grid , setGrid] = useState(6);
    // const [buttonActive , setButtonActive] = useState(false);

    const products = useSelector((state) => state.Products);
    // const dispatch = useDispatch();

    // const [item , setitem] = useState(products);

    // const [categoryVal , setSategoryVal] = useState("All");
    const menuitems = [...new Set(products.map((val) => val.category))]

    const filterItems =(cat ) => {
        const newItems = products.filter((newVal) => newVal.category === cat);
        setitem(newItems);
        setSategoryVal(cat);
    }

    // color\
    const menuitemscolor = [...new Set(products.map((val) => val.color))]
    const [colorval , setColorval] = useState("white");
    
    const filterItemColor =(col)=> {
        const newItems =products.filter((newcol)=> newcol.color === col);
        setitem(newItems);
        setColorval(col)

}
const AllproductcatColor = () => {
    setitem(products)
    setColorval("white");
}
const [alghsort ] = useState(true);
const [lowhsort ] = useState(true);
const [highsort ] = useState(true);
const [allsort ] = useState(true);


// const [currentPage , setCurrentPage] = useState(1);
// const [proPerPage , setProPerPage] = useState(10);

// const indexOfLastPost =currentPage * proPerPage
// const indexOfFirstPost =indexOfLastPost - proPerPage;
// const currentProducts = products.slice(indexOfFirstPost , indexOfLastPost);
// setitem(currentProducts);


// console.log(currentProducts);



        // sort
    const Sorting = (data) => {
        if (data === "alphabetically") {
            if (alghsort === true) {
                const asd =[...item].sort((a , b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);
                setitem(asd)
            }
                
        }
        if (data === "low") {
            if (lowhsort === true) {
                const asd =[...item].sort((a , b) => a.price - b.price);
                setitem(asd)
            }
            
        }
        if (data === "high") {
            if (highsort === true) {
                const asd =[...item].sort((a , b) => b.price - a.price);
                setitem(asd)
            }
            
        }
        if (data === "all") {
            if (allsort === true) {
                setitem(products)
            }
            
        }
    }
    
    // const SortingAlphabetically = () => {
    //     const asd =[...item].sort((a , b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);
    //     setitem(asd)
    // }
    const Allproductcat = () => {
        setitem(products)
        setSategoryVal("All");
    }
    const[searchFilter ,setSerchfilter]=useState('');


  return (
    <>
    
        <BreadCrumb title="Our-Store"/>
        <div className="store-wrapper py-5 home-wrapper-2">
            <div className="container">
                <div className="row">
                    <div className="filter-cardss col-lg-3  col-12 ">
                        <div className=" filter-card mb-3">
                            <h3 className='filter-title'>Shop By Categories :</h3>
                            <div>
                                <ul className='activebuttons'>
                                    <li><button className={`${"All" === categoryVal ?"active" :""}`} onClick={Allproductcat}>All</button></li>
                                    {menuitems.map((val)=> (
                                        <li key={val}><button className={`${val === categoryVal ?"active" :""}`}   onClick={() => filterItems(val)}>{val}</button></li>
                                    ))}
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className='filter-title'>Filter By:</h3>
                            <div className="">
                                <h5 className="sub-title mt-5">
                                Sort By:
                                </h5>
                                <form action="">
                                <div className="form-check">
                                    <input className='form-check-input' onChange={() => Sorting("all")} type="radio" id='all' name='sorting' />
                                    <label className='form-check-label' htmlFor="all">No Sort.</label>
                                </div>
                                <div className="form-check">
                                    <input className='form-check-input' onChange={() => Sorting("alphabetically")} type="radio" name='sorting' id='alphabetically' />
                                    <label className='form-check-label' htmlFor="alphabetically">Alphabetically, A-Z.</label>
                                </div>
                                <div className="form-check">
                                    <input className='form-check-input' onChange={() => Sorting("low")} type="radio" id='low' name='sorting' />
                                    <label className='form-check-label' htmlFor="low">Price,  Low to high .</label>
                                </div>
                                <div className="form-check">
                                    <input className='form-check-input' onChange={() => Sorting("high")} type="radio" name='sorting' id='high' />
                                    <label className='form-check-label' htmlFor="high">Price, high to Low .</label>
                                </div>
                                </form>

                                
                                <h5 className="sub-title mt-5">
                                    Colors:
                                </h5>
                                <div>
                                <ul className='colors'>
                                <li><button onClick={AllproductcatColor} style={{backgroundColor: 'white'}} className={`${'white' === colorval ?"active" :""}`}>All</button></li>
                                    {menuitemscolor.map((val)=>(
                                        <li key={val}><button className={`${val === colorval ?"active" :""}`}  onClick={() => filterItemColor(val)} style={ {backgroundColor: `${val}`}} ></button></li>
                                    ))}
                                    <li className='colors-1'></li>
                                    
                                </ul>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className="col-lg-9  col-12  ">
                        <div className="filter-sort-grid mb-3">
                            <div className="search-sorting-col d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-10 ">
                                <div className="input-group ">
                                    <input type="text" className="form-control py-1" placeholder="Search Product Here..."
                                    onChange={(e) => setSerchfilter(e.target.value)}
                                    aria-label="Search Product Here..."
                                    aria-describedby="basic-addon2"/>
                                    <button><span className="input-group-text p-2" id="basic-addon2"><i className="fa-solid fa-magnifying-glass fs-4"></i></span></button>
                                </div>
                                </div>
                                <div className=" sassa d-flex align-items-center gap-10 mb-0">
                                    <p className="totatl-pro">({item.length} Product)</p>
                                    <div className="d-flex align-items-center gap-10">
                                        <button className={`${grid === 12 ?"active" :""}`}  onClick={ () => setGrid(12)}  ><i className="fa-solid fa-arrow-up-wide-short mb-0"></i></button>
                                        <button className={`${grid === 6 ?"active" :""}`} onClick={ () => setGrid(6)}  ><i className="fa-solid fa-qrcode"></i></button>
                                        <button id='removebtn' className={`${grid === 3 ?"active" :""}`} onClick={ () => setGrid(3)} ><i className="fa-solid fa-arrow-up-right-dots"></i></button>
                                    </div>
                                </div>
                            </div> 
                            
                        </div>
                        <div className="products-list  ">
                            <div className="pro-store d-flex gap-10 flex-wrap">
                            <Products searchFilter={searchFilter} product={item} grid={grid} imagee={featured_1}/>
                            </div>
                        </div>
                        <div className="pagination-section mt-4 p-3 bg-white text-center">
                                <Pagination setCurrentPage={setCurrentPage} currentProducts={currentProducts} proPerPage={proPerPage}
                                paginate={paginate} totalPro={products.length} setitem={setitem}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Ourstore