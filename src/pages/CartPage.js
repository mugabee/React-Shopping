import { useState, useEffect } from "react";
import { CartState } from "../Context/Context";
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect"

const CartPage = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [Total, setTotal] = useState();

// calculating the total price by considering the quantity
  useEffect(() => {
    setTotal(
      cart.reduce(
        (newPrice, currentPrice) =>
          newPrice + Number(currentPrice.price) * currentPrice.quantity, 0)
    );
  }, [cart]);
  

  return (
    <div className="container  mx-auto mt-10">
      <div className="flex  shadow-md my-10">
        <div className="w-3/4 bg-gray-100 px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{cart.length}</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-indigo-600  text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold  text-indigo-600  text-xs uppercase w-1/5 text-center">
              Quantity
            </h3>
            <h3 className="font-semibold  text-indigo-600  text-xs uppercase w-1/5 text-center">
              Price
            </h3>
            <h3 className="font-semibold  text-indigo-600  text-xs uppercase w-1/5 text-center">
              Total
            </h3>
          </div>

          {cart.map((product) => (
            <div
              className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
              key={product.id}
            >
              <div className="flex w-2/5">
                <div className="w-20">
                  <img
                    className="h-24"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold text black text-sm">
                    {product.name}
                  </span>

                  <span
                    onClick={() =>
                      dispatch({
                        type: "ProductRemoveFromCart",
                        payload: product,
                      })
                    }
                    className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                  >
                    {" "}
                    Remove{" "}
                  </span>
                </div>
              </div>
              <div className="flex justify-center w-1/5">
                  <select value={product.quantity} 
                  onChange={(element) =>
                    dispatch({
                        type:"ChangeCartQuantity",
                        payload:{
                            id: product.id,
                            quantity: element.target.value,

                        },

                    })
                }
                  
                  >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                {/* {[...Array(product.instock).keys()].map((quantityNumber) => (
                    <option key={quantityNumber + 1 }> {quantityNumber + 1 }</option>
                )
                )} */}
                </select>

               
              </div>
              <span className="text-center w-1/5 font-semibold text-sm">
                {product.price} RWF
              </span>
              <span className="text-center w-1/5 font-semibold text-sm">
              {product.price} RWF
              </span>
            </div>
          ))}

          <Link
            to="/"
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            <svg
              className="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>
        </div>

        <div  className="w-1/4 bg-gray-600 px-8 py-10">
          <h1 className="font-semibold text-white text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
           
            <h1 className="  text-white  "> Dear Customer,
            <ReactTypingEffect
        text={[` You have added ${cart.length} products to your shopping cart which will cost you ${Total} RWF, Thank You for shopping with us`]}
        speed={100}
        eraseSpeed={100}
        typingDelay={2500}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1 className="text-white">
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      /> </h1>
          </div>
          
          
         
          <div className="border-t mt-8">
            <div className="flex text-white font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>{Total} RWF</span>
            </div>
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
