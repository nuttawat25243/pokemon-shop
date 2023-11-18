import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsTrashFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { removeFromCart  } from '../store/features/CartSlice';
import { increaseQuantity  } from '../store/features/CartSlice';
import { decreaseQuantity  } from '../store/features/CartSlice';
import { totalCartItem } from '../store/features/CartSelector';
import { totalPrice } from '../store/features/CartSelector';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../store/features/CartSlice';
function TotalCart() {
 
  const selectCartItems = (state) => state.cart.items;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
  const Price = useSelector(totalPrice);
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
    const itemIndexToRemove = savedCartItems.findIndex(cartItem => cartItem.id === item.id );

    if (itemIndexToRemove !== -1) {
      savedCartItems.splice(itemIndexToRemove, 1);
      localStorage.setItem("cartItems", JSON.stringify(savedCartItems));
    }
  };
  const handleIncreaseQuantity = (item) => {
    dispatch(increaseQuantity({ id: item.id }));
  };
  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity({ id: item.id }));
  };
  const navigate = useNavigate();
  const showAlert = () => {
    if (cartItems && savedCartItems && savedCartItems.length === 0) {
      Swal.fire({
        icon: 'info',
        title: 'Your cart is empty',
        text: 'Add items to your cart before checking out',
      });
    } else {
      Swal.fire('Purchase Complete').then(() => {
        dispatch(clearCart());
        navigate('/');
      });
    }
  };


  return (
    <div className='max-w-5xl px-4 m-auto block pt-24'>
      <div className='text-center p-4 font-bold h-auto '>
              <h1 className='text-3xl'>CHECK OUT</h1>
      </div>
      <div className='flex gap-4 '>
          <main className='w-full h-[42rem]  border-[1px]   overflow-auto'>
            {cartItems&&savedCartItems && savedCartItems.map((item) => (
            <div key={item.id} className="">
                  <div className='flex p-2 bg-white w-full   border-b-[1px]   '>  
                    <span><img className='w-32 ' src={item.img} alt="" /></span>
                    <ul className='text-sm w-full ml-2 font pl-2 '>
                        <li className='uppercase font-semibold p-0.5'>{item.name} </li>
                        <li className='p-0.5'>Price: {item.price} $ </li>
                        <li className=' w-max flex mt-2'>
                        <button onClick={() => handleDecreaseQuantity(item)} 
                        className='px-2 border-[1px] '>-</button>
                        <p className='px-2 border-y-[1px] '>{item.quantity}</p> 
                        <button onClick={() => handleIncreaseQuantity(item)} 
                        className='px-2 border-[1px] '>+</button></li>
                    </ul>   
                    <button className='flex w-4 cursor-pointer text-2xl mt-0.5' 
                        onClick={() => handleRemoveFromCart(item)}><BsTrashFill size={'16'}/>
                    </button>
                 </div>
             </div>
            ))}
          </main>
          <aside  className='w-1/2 border-[1px] h-min '>
            <div>
              <h1 className='p-4 border-b-[1px] font-bold  '>
                  SHOPPING CART TOTAL 
              </h1>
              <div className='p-4 mt-2 border-b-[1px]'>
                    <p className='text-sm '>ADD A DISCOUNT</p>
                    <input className='border-[1px] mb-4 mt-2 p-2 mr-4 w-24 sm:w-full ' type="text" id="discount" 
                    name="discount" ></input>
                    <button className='border-[1px]  mt-2 p-2'>ADD</button>

              </div>
              <footer className=' h-auto pt-2 text-center w-full  border-b-[1px]'>
                <div className='flex justify-between p-2 mx-2'>
                    <p className='text-sm'>TOTAL </p>
                    <p className='text-sm'> {Price} $ </p>
                </div>
                <button onClick={showAlert} className='bg-black text-white  text-sm w-5/6 h-8 mb-4  '>CHECK OUT</button>
              </footer>   
              </div>
              <div className='p-6'>
                  <div className='text-xs py-2'>
                    <h1 className='font-bold py-1'>Shipping</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Asperiores, exercitationem. Tempore 
                      maiores eaque voluptatem, modi vero deserunt
                       sit nobis amet, sequi voluptate voluptas blanditiis.</p>
                  </div>
                  <div className='text-xs  py-2'>
                  <h1 className='font-bold py-1'>Return</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Asperiores, exercitationem. Tempore 
                      maiores eaque voluptatem, modi vero deserunt
                       sit nobis amet, sequi voluptate voluptas blanditiis.</p>
                  </div>
              </div>
          </aside>
      </div>
    </div>
    
  )
}

export default TotalCart