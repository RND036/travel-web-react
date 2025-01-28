import React from "react";
import Navbars from "./Navbars";
import { Card } from "flowbite-react";
import Searchbar from "./searchbar";

export default function Header() {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <div
        className="relative min-h-screen mb-12 bg-cover bg-center flex flex-col items-center justify-center  sm:p-8 rounded-3xl sm:mx-4 shadow-lg overflow-hidden sm:my-3"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url('./images/river1.jpg')",
        }}
      >
        {/* Hero Section */}
        <div className="text-center sm:z-10 mt-28">
          <h1 className="text-white sm:text-6xl font-bold leading-tight text-4xl">
            Extraordinary natural and cultural charm
          </h1>
          <p className="text-white mt-4 sm:text-lg text-xl">
            Exploring Indonesia is an unforgettable adventure
          </p>
        </div>

        {/* Search Bar */}
        <Searchbar />
      </div>

      {/* Cards Section */}
      <div className="lg:absolute  bottom-[-4rem] grid md:grid-cols-2 lg:flex gap-8 justify-center w-full z-20 ">
        {/* Total Customers */}
        <Card className=" text-center shadow-lg bg-white rounded-lg px-12  transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
          <h1 className="text-3xl font-bold text-gray-900">10M+</h1>
          <p className="text-gray-700">
            <span className="px-2 py-1">Total Customers</span>
          </p>
        </Card>

        {/* Years of Experience */}
        <Card className=" text-center shadow-lg bg-white rounded-lg px-12  transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
          <h1 className="text-3xl font-bold text-gray-900">09+</h1>
          <p className="text-gray-700">
            <span className="px-2 py-1">Years of Experience</span>
          </p>
        </Card>

        {/* Total Destinations */}
        <Card className=" text-center shadow-lg bg-white rounded-lg px-12  transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
          <h1 className="text-3xl font-bold text-gray-900">12K</h1>
          <p className="text-gray-700">
            <span className="px-2 py-1">Total Destinations</span>
          </p>
        </Card>

        {/* Average Rating */}
        <Card className=" text-center shadow-lg bg-white rounded-lg px-12  transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
          <h1 className="text-3xl font-bold text-gray-900">5.0</h1>
          <p className="text-gray-700">
            <span className="px-2 py-1">Average Rating</span>
          </p>
        </Card>
      </div>
    </div>
  );
}
