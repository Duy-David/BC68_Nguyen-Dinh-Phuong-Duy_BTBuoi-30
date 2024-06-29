import React from "react";
import "../scss/header.scss"
const Header = () => {
  return (
    <header className="bg-gray-800">
        <div className="container w-10/12 mx-auto text-center px-12">
          <div className=" flex justify-between text-white py-2">
            <a href="#" className=" text-xl py-1">
              Start Bootstrap
            </a>
            <ul className=" flex ">
              <li className=" item p-2">
                <a href="#"id="home" className="">
                  Home
                </a>
              </li>
              <li className=" item p-2">
                <a href="#" className="">
                  About
                </a>
              </li>
              <li className=" item p-2">
                <a href="#" className="">
                  Contract
                </a>
              </li>
            </ul>
          </div>
        </div>
    </header>
  );
};

export default Header;
