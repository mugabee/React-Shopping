import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../../Context/Context";
import Search from "./Search";
import { IoCart } from "react-icons/io5";
import CartDrop from "./CartDrop";

const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [Total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce(
        (newPrice, currentPrice) => newPrice + Number(currentPrice.price),
        0
      )
    );
  }, [cart]);
  return (
    <nav id="header" class="fixed w-full z-30 top-0 bg-blue-500 text-white">
      <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div class="pl-4 flex items-center">
          <Link
            class="toggleColour px-8 text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            to="/"
          >
            CartShop
          </Link>
        </div>
        <Search />
        <div class="block lg:hidden mr-40">
          <button
            class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg
              class="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <to d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul class="list-reset lg:flex justify-center flex-1 items-center">
            <li class="mr-3 inline-block">
              <CartDrop />
            </li>
            <li class="mr-3">
              <Link
                class="inline-block py-2 px-4 text-black font-bold no-underline"
                to="/CartPage"
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
};

export default Header;
