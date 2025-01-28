import { Navbar, Button, ToggleSwitch } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbars() {
  
  const path = useLocation().pathname;
  return (
    <Navbar className="absolute  left-0  w-full z-10 bg-transparent  ">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-l sm:text-xl font-bold text-white"
      >
        INDOTRAVI
      </Link>
      <div className="gap-6 md:order-2  lg:flex">
        <div className="hidden lg:flex items-center w-20 h-10 rounded-full bg-gray-400 p-1">
          <div className="flex-1 text-center text-sm font-medium text-white ">
            De
          </div>

          <div className="flex-1 text-center text-sm font-medium text-lack bg-white rounded-full py-2">
            En
          </div>
        </div>

        <Link to="/">
          <Button className="bg-white text-black px-4 py-0 hover:text-white hover:bg-black  hidden sm:flex" color="black"  pill>
            Login
          </Button>
        </Link>
        <Navbar.Toggle className="bg-white" />
      </div>
      <Navbar.Collapse className="rounded-3xl bg-gray-400  hover:text-black sm:bg-gray-400 text-center text-white  py-2 px-12">
        
        <Navbar.Link className="bg-transparent  hover:text-black"
          active={path === "/"}
          as={
            "div"
          } /*cant use two link in a same one thats why use div in here*/
        >
          
          <Link to="/" className="text-white hover:text-black ">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/"} as={"div"}className="bg-transparent " >
          <Link to="/" className="text-white  hover:text-black">Services</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/"} as={"div"}className="bg-transparent">
          <Link to="/" className="text-white  hover:text-black">Tour</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/"} as={"div"}className="bg-transparent">
          <Link to="/" className="text-white  hover:text-black">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/"} as={"div"}className="bg-transparent">
          <Link to="/" className="text-white  hover:text-black">Contact</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/"} as={"div"}className="bg-transparent">
          <Link to="/" className="text-white sm:hidden hover:text-black">SignIn</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
