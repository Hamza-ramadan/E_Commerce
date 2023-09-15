import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import { useDispatch, useSelector } from 'react-redux'
import { ClearAll, decrementItem, deleteToCard, incrementItem } from '../Redux TK/Reducers/CartSlice'
import Popup from '../Components/Popup'

const ShopCar = () => {
  const cart =useSelector(state => state.Cart)
    const dispatch=useDispatch();
    const total_price = cart.reduce((acc , product) => {
        acc+= +product.price * +product.quantity;
        return acc;
      } , 0)
  return (
    <>
        <BreadCrumb title="Shopping-Cart"/>

        <div className="container">
            <h3>Total Price: {total_price}$</h3>
            <table className="table table-striped border hover">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        cart.map((product)=>(
                            <tr key={product.id}>
                            <th data-lable="#:" >{product.id}</th>
                            <td data-lable="Name:" >{product.title.slice(0,20)}...</td>
                            <td data-lable="image:" ><img src={product.image} alt={product.title} style={{width :'70px', height :" 70px"}} /></td>
                            <td data-lable="Price:" >{product.price}$</td>
                            <td data-lable="Quantity:"  className='tdquan'><button onClick={() => dispatch(incrementItem(product) ) } className='buttoninc'>+</button>
                            {product.quantity}<button className='buttoninc'disabled={product.quantity<=1} onClick={() => dispatch(decrementItem(product) ) }>-</button></td>
                            
                            <td data-lable="Action:" ><button onClick={()=> dispatch(deleteToCard(product))} className='btn btn-danger'>Delete</button></td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
                <button onClick={()=> dispatch(ClearAll())} className='mb-1 btn btn-danger'>Delete All Product</button>
                <Popup pricee={total_price} titleBtn={"Buy It Now"}/>


        </div>
            
    </>
  )
}

export default ShopCar