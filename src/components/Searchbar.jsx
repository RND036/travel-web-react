import React from 'react'
import { FaRegCalendarAlt, FaWallet, FaUser } from "react-icons/fa";
import { Button, Datepicker, Dropdown } from "flowbite-react";

export default function Searchbar() {
  return (
    <div className="sm:flex  rounded-lg  items-center sm:rounded-full bg-gray-400 p-1  text-white mt-8 py-1 pl-5">
          {/* Date */}
          <div className="flex items-center  gap-2">
            <FaRegCalendarAlt className="text-white" />
            <Dropdown label="Date" color="transparent">
              <Datepicker
                className="bg-transparent"
                inline
                minDate={new Date()}
                placeholder="Select date"
              />
            </Dropdown>
          </div>
          <hr/>
          <div className="sm:w-px sm:h-8 sm: bg-gray-300 m-1"></div>

          {/* Budget */}
          <div className="flex items-center gap-2">
            <FaWallet className="text-white" />
            <Dropdown label="Budget" color="transparent">
              <Dropdown.Item>$100 - $200</Dropdown.Item>
              <Dropdown.Item>$300 - $400</Dropdown.Item>
              <Dropdown.Item>$500 - $600</Dropdown.Item>
              <Dropdown.Item>$700 - $800</Dropdown.Item>
              <Dropdown.Item>Over $1000</Dropdown.Item>
            </Dropdown>
          </div>
          <hr/>
          <div className="sm:w-px sm:h-8 sm: bg-gray-300 m-1"></div>

          {/* Guest */}
          <div className="flex items-center gap-2">
            <FaUser className="text-white" />
            <Dropdown label="Guest" color="transparent">
              <Dropdown.Item>
                Adults
                <span className="ml-2">
                  <input
                    type="number"
                    className="ml-3 w-20 text-black border rounded"
                  />
                </span>
              </Dropdown.Item>
              <Dropdown.Item>
                Children
                <span className="ml-2">
                  <input
                    type="number"
                    className="w-20 text-black border rounded"
                  />
                </span>
              </Dropdown.Item>
            </Dropdown>
          </div>

          {/* Search Button */}
          <Button color='black' className="bg-white text-black sm:px-4 sm:py-1  hover:bg-black  hover:text-white px-4 py-0.5" pill>
            Search
          </Button>
        </div>
  )
}
