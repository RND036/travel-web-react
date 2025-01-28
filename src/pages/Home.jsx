import React from "react";
import Header from "../components/Header";
import { Button, Card, Avatar } from "flowbite-react";
import {
  FaMagnifyingGlass,
  FaStar,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { TbBoxMultiple } from "react-icons/tb";
import Searchbar from "../components/searchbar";


export default function Home() {
  return (
    <div>
      {/* Header Section */}
      <Header />
      {/* Best Location Section */}
      <div className=" xl:ml-40 xl:mr-40 mt-20 m-5">
        <h3 className="text-black text-lg font-semibold mb-2 text-center lg:text-left">Best location</h3>
        <div className=" grid   text-center lg:flex lg:justify-between  mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Indonesian tourism
          </h1>
          <p className="text-gray-600 text-center">
            Extraordinary natural beauty, enjoy the rich culture, <br />
            and experience the friendliness of the local people.
          </p>
        </div>

        {/* Grid Section */}
        <div className=" flex flex-col xl:grid grid-cols-4 gap-6 ">
          {/* First Item */}
          <div className="relative col-span-3 rounded-xl shadow-md overflow-hidden h-[300px] group">
            <img
              src="/images/tour1.jpg"
              alt="Bromo Tengger Tour"
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-medium">Bromo, East Java</p>
              <h3 className="text-lg font-bold">Bromo Tengger Tour</h3>
            </div>
          </div>

          {/* Other Items */}
          <div className="relative rounded-xl shadow-md overflow-hidden  h-[300px] group">
            <img
              src="/images/tour2.jpg"
              alt="Bali Beach Tourism"
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-medium">Denpasar, Bali</p>
              <h3 className="text-lg font-bold">Bali Beach Tourism</h3>
            </div>
          </div>
          {/* Other Items */}
          <div className="relative rounded-xl shadow-md overflow-hidden group">
            <img
              src="/images/tour3.jpg"
              alt="sumatra Beach Tourism"
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-medium">Lampung, South Sumatra</p>
              <h3 className="text-lg font-bold">Sumatra Tourism</h3>
            </div>
          </div>
          {/* Other Items */}
          <div className="relative  col-span-3 rounded-xl shadow-md overflow-hidden h-[300px] group">
            <img
              src="/images/tour4.jpg"
              alt="borobudur Beach Tourism"
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-medium">Jogjakarta,Central Java</p>
              <h3 className="text-lg font-bold">Borobudur Temple Tour</h3>
            </div>
          </div>
        </div>
        <div className="xl:grid grid-cols-2 mt-20 gap-3 ">
          {/* First Grid Item */}
          <div className="relative rounded-xl shadow-md overflow-hidden transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
            <img
              src="/images/girlbeach.jpg"
              alt="Bromo Tengger Tour"
              className="w-full h-full object-cover"
            />

            {/* Centered content */}
            <div className="absolute  bottom-6 inset-x-0 flex flex-col items-center justify-center text-white text-center">
              <div className="hidden md:hidden lg:flex ">
                <Searchbar/>
              </div>

              <p className="text-sm  font-medium mt-3">
                Embark on a journey to find your dream destination,<br></br>
                where adventure and relaxation await,creating umforgettable
                memories along the way
              </p>
            </div>
          </div>

          {/* Second Grid Item */}
          <div className="relative flex flex-col gap-10 lg:ml-20  ">
            <div className="mt-10">
              <p className="text-center text-xl   lg:text-lg lg:text-left">
                How it works
              </p>
              <h1 className=" text-center text-3xl lg:text-6xl lg:text-left">
                One click for you
              </h1>
            </div>

            <Card href="#" className="max-w-full ">
              <div className="flex gap-10 items-center">
                <div className="bg-gray-100 border border-gray-300 rounded-lg shadow-md p-4  ">
                  <FaMagnifyingGlass size={30} />
                </div>
                <div>
                  <h1 className=" text-lg font-bold ">Find Your Destination</h1>
                  <p>
                    Embark on a journey to discover your dream destination,where
                    adventure and relaxation await.
                  </p>
                </div>
              </div>
            </Card>
            <Card href="#" className="max-w-full ">
              <div className="flex items-center">
                <div className="flex gap-10 items-center">
                  <div className="bg-gray-100 border border-gray-300 rounded-lg shadow-md p-4  ">
                    <TiMessages size={30} />
                  </div>
                  <div>
                    <h1 className=" text-lg font-bold ">Book a ticket</h1>
                    <p>
                      Ensure a smooth travel experience by booking tickets to
                      your preferred destination via our booking platform
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            <Card href="#" className="max-w-full ">
              <div className="flex items-center">
                <div className="flex gap-10 items-center">
                  <div className="bg-gray-100 border border-gray-300 rounded-lg shadow-md p-4  ">
                    <AiOutlineThunderbolt size={30} />
                  </div>
                  <div>
                    <h1 className=" text-lg font-bold ">Make payment</h1>
                    <p>
                      we offer a variety of payment options to meet your
                      preferences and ensure a hassle-free transaction process
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            <Card href="#" className="max-w-full ">
              <div className="flex items-center">
                <div className="flex gap-10 items-center">
                  <div className="bg-gray-100 border border-gray-300 rounded-lg shadow-md p-4  ">
                    <TbBoxMultiple size={30} />
                  </div>
                  <div>
                    <h1 className=" text-lg font-bold ">Explore destination</h1>
                    <p>
                      You'll be immersed a capativating tapestry of
                      sights,sounds and tastes,as you wind your way through the
                      ancient streets
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        {/*tourist destinations*/}
        <div className="mt-40 ">
          <h3 className="text-gray-600 text-lg font-semibold mb-2  text-center xl:text-left">
            Tour packages
          </h3>
          <div className="xl:flex   justify-between  mb-20">
            <h1 className="text-3xl sm:text-6xl  text-gray-900 text-center xl:text-left ">
              Our tourist destination
            </h1>
            <p className="text-gray-600 pt-3 sm:text-xl text-center xl:text-left xl:pt-0">
              Our tourist destinations offer an unrivaled blend of<br></br>{" "}
              natural beauty and cultural richness.
            </p>
          </div>
          <div className="grid xl:grid-cols-3 gap-20">
            {/*first image*/}
            <div className="relative rounded-xl shadow-md overflow-hidden transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 group">
              {/* Background Image */}
              <img
                src="/images/bali.jpg"
                alt="Bali Tour Package"
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />

              {/* Top Tags */}
              <div className="absolute top-4 left-4 bg-gray-500/80 text-white text-sm font-semibold rounded-full px-4 py-1 shadow-sm">
                7 Days
              </div>
              <div className="absolute top-4 right-4 bg-gray-500/80 text-white text-sm font-semibold rounded-full px-4 py-1 shadow-sm flex items-center">
                <FaStar color="gold" className="mr-1" />
                <p>4.9</p>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 inset-x-0 bg-gray-500/80 text-white text-left py-4 px-2 rounded-xl m-3">
                <p className="text-xs uppercase  tracking-wider text-gray-300">
                  23 August - 29 August
                </p>
                <div className="flex flex-row justify-between">
                  <h3 className="text-2xl font-bold  mt-1">
                    Bali Tour Package
                  </h3>
                  <p className="text-2xl font-bold text-white mt-1">$285</p>
                </div>
              </div>
            </div>
            {/*second image*/}
            <div className="relative rounded-xl shadow-md overflow-hidden transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 group">
              {/* Background Image */}
              <img
                src="/images/java.jpg"
                alt="Bali Tour Package"
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />

              {/* Top Tags */}
              <div className="absolute top-4 left-4 bg-gray-500/80 text-white text-sm font-semibold rounded-full px-4 py-1 shadow-sm">
                5 Days
              </div>
              <div className="absolute top-4 right-4 bg-gray-500/80 text-white text-sm font-semibold rounded-full px-4 py-1 shadow-sm flex items-center">
                <FaStar color="gold" className="mr-1" />
                <p>4.9</p>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 inset-x-0 bg-gray-500/80 text-white text-left py-4 px-2 rounded-t-xl m-3">
                <p className="text-xs uppercase font-medium tracking-wider text-gray-300">
                  23 August - 27 August
                </p>
                <div className="flex flex-row justify-between">
                  <h3 className="text-2xl font-bold  mt-1">
                    Java Tour Package
                  </h3>
                  <p className="text-2xl font-bold text-white mt-1">$218</p>
                </div>
              </div>
            </div>
            {/*third image*/}
            <div className="relative rounded-xl shadow-md overflow-hidden transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 group">
              {/* Background Image */}
              <img
                src="/images/solo.png"
                alt="Bali Tour Package"
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />

              {/* Top Tags */}
              <div className="absolute top-4 left-4 bg-gray-500/80 text-white text-sm font-semibold rounded-full px-4 py-1 shadow-sm">
                7 Days
              </div>
              <div className="absolute top-4 right-4 bg-gray-500/80 text-white text-sm font-semibold rounded-full px-4 py-1 shadow-sm flex items-center">
                <FaStar color="gold" className="mr-1" />
                <p>4.9</p>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 inset-x-0 bg-gray-500/80 text-white text-left py-4 px-2 rounded-t-xl m-3">
                <p className="text-xs uppercase font-medium tracking-wider text-gray-300">
                  23 August - 25 August
                </p>
                <div className="flex flex-row justify-between">
                  <h3 className="text-2xl font-bold  mt-1">
                    Solo Tour Package
                  </h3>
                  <p className="text-2xl font-bold text-white mt-1">$163</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center h-full pt-20">
            <Button
              className="bg-black text-white rounded-3xl px-12 hover:bg-gray-600"
              color="gray-600"
            >
              View more
            </Button>
          </div>
        </div>
        {/* Testimonial */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-40 mb-40">
          <div className="flex gap-2 mb-12 sm:hidden">
            <Button className="bg-transparent hover:bg-gray " color="gray" pill>
              <FaArrowLeft color="black" />
            </Button>
            <Button className="bg-transparent hover:bg-gray" color="gray" pill>
              <FaArrowRight />
            </Button>
          </div>
          {/* Avatar and User Info */}
          <div className="flex items-start space-x-4">
            <div>
              <Avatar img="/images/man.jpg" rounded />
              <div className="hidden sm:flex gap-2 mt-10 ">
                <Button
                  className="bg-transparent hover:bg-gray "
                  color="gray"
                  pill
                >
                  <FaArrowLeft color="black" />
                </Button>
                <Button
                  className="bg-transparent hover:bg-gray"
                  color="gray"
                  pill
                >
                  <FaArrowRight />
                </Button>
              </div>
            </div>

            <div>
              <div className="space-y-1 font-medium dark:text-white">
                <div>Donald Sullivan</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Founder Fiko
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Text */}
          <div>
            <p className="text-gray-700 dark:text-gray-300">
              This travel website is very informative and easy to use. I like
              how they present various destination options and travel packages
              with clear details. Offering pictures and destination descriptions
              helps me decide where I want to visit. Additionally, the ability
              to compare prices and reviews from other users is very helpful in
              decision-making.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-20 mb-20">
          <h1 className="text-xl ">Our Blog</h1>
          <h1 className="text-3xl sm:text-6xl text-gray-600">
            Our travel memories
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* First Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
            <img
              src="/images/traveltrends.jpg"
              alt="2023 Travel Trends"
              className="w-full rounded-xl object-cover"
            />
            <div className="p-4">
              <p className="text-gray-500 text-sm mb-2">Nov 14, 2022</p>
              <h2 className="text-2xl  text-gray-900">
                2023 Travel Trends – what you need to know
              </h2>
              <p className="text-gray-400 text-lg mt-2 overflow-hidden">
                2023 taught us valuable life lessons. Plans don’t always work
                out, flexibility in life is key, and other things
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden  transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
            <img
              src="/images/jeep.jpg"
              className="w-full rounded-xl object-cover"
            />
            <div className="p-4">
              <p className="text-gray-500 text-sm mb-2">Nov 18, 2022</p>
              <h2 className="text-2xl  text-gray-900">
                Jeep Adventure is a new attraction for tourists visiting Garut
              </h2>
              <p className="text-gray-400 text-lg mt-2 overflow-hidden">
                Jeep Adventure is one of the tourist attractions that has been
                popular recently. The sensation
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-full pt-20 pb-20">
          <Button className="bg-black text-white rounded-3xl px-12 hover:bg-gray-600"
              color="gray-600">View more</Button>
        </div>
      </div>
    </div>
  );
}
