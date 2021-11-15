import { CartState } from "../../Context/Context";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const CartDrop = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="ml-96 my-20">
      <div className="flex h-64 justify-center">
        <div className="relative ">
          <div className="flex flex-row cursor-pointer truncate p-2 px-4  rounded">
            <div></div>
            <div className="flex flex-row-reverse ml-2 w-full">
              <div slot="icon" className="relative">
                <div className="absolute text-xs rounded-full -mt-1 -mr-2 px-1 font-bold top-0 right-0 bg-red-700 text-white">
                  {cart.length}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-shopping-cart w-6 h-6 mt-2"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute w-full  rounded-b border-t-0 z-10">
            <div className="shadow-xl w-64">
              {cart.length > 0 ? (
                <>
                  {cart.map((product) => (
                    <span
                      className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100"
                      key={product.id}
                    >
                      <div className="p-2 w-12">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div className="flex-auto text-sm w-32">
                        <div className="font-bold">{product.name}</div>

                        <div className="text-black py-2 font-bold">
                          {product.price.split(".")[0]} RWF
                        </div>
                      </div>
                      <div className="flex flex-col w-18 font-medium items-end">
                        <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                          <AiFillDelete
                            onClick={() =>
                              dispatch({
                                type: "ProductRemoveFromCart",
                                payload: product,
                              })
                            }
                          />
                        </div>
                      </div>
                    </span>
                  ))}
                </>
              ) : (
                <span className="text-base  undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                hover:bg-teal-700 hover:text-teal-100 
                bg-teal-100 
                text-teal-700 
                border duration-200 ease-in-out 
                border-teal-600 transition">
                    You've No item in the cart
                  </span>
              )}

              <div className="p-4 justify-center flex">
                <div>
                  <button
                    className="text-base  undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-700 hover:text-teal-100 
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition"
                  >
                    Checkout $36.66
                  </button>
                  <Link to="/CartPage">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4">
                    Go to cart Page
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-32"></div>
    </div>
  );
};

export default CartDrop;
