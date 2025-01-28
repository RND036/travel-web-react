import React from "react";
import { Footer, Button } from "flowbite-react";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";

export default function AppFooter() {
  return (
    <Footer>
      <div className="w-full bg-black p-6 md:p-10">
        <div className="grid w-full grid-cols-2    gap-8 sm:grid-cols-2  lg:grid-cols-4 px-4 py-6  sm:text-left">
          <div>
            <Footer.Title title="About" className="text-white" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="hover:text-white">
                About Us
              </Footer.Link>
              <Footer.Link href="#" className="hover:text-white">
                Blog
              </Footer.Link>
              <Footer.Link href="#" className="hover:text-white">
                Careers
              </Footer.Link>
              <Footer.Link href="#" className="hover:text-white">
                Jobs
              </Footer.Link>
              <Footer.Link href="#" className="hover:text-white">
                In Press
              </Footer.Link>
              <Footer.Link href="#" className="hover:text-white">
                Gallery
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Support" className="text-white" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="hover:text-white">
                Contact Us
              </Footer.Link>
              <Footer.Link href="#" className="hover:text-white">
                Online Chat
              </Footer.Link>
              <Footer.Link href="#" className="hover:text-white">
                WhatsApp
              </Footer.Link>
              <Footer.Link href="#" className="hover:text-white">
                Telegram
              </Footer.Link>
              <Footer.Link href="#" className="hover:text-white">
                Ticketing
              </Footer.Link>
              <Footer.Link href="#" className="hover:text-white">
                Call Center
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="FAQ" className="text-white" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="hover:text-white">
                Account
              </Footer.Link>
              <Footer.Link href="#" className="hover:text-white">
                Booking
              </Footer.Link>
              <Footer.Link href="#" className="hover:text-white">
                Payments
              </Footer.Link>
              <Footer.Link href="#" className="hover:text-white">
                Returns
              </Footer.Link>
              <Footer.Link href="#" className="hover:text-white">
                Privacy Policy
              </Footer.Link>
              <Footer.Link href="#" className="hover:text-white">
                Terms & Conditions
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Newsletter" className="text-white" />
            <p className="text-gray-400 text-sm sm:text-base">
              Don't miss out on the exciting world of travel - subscribe now and
              embark on a journey of discovery with us.
            </p>
            <div className="hidden xl:flex items-center justify-between rounded-full border border-gray-500 p-1 text-white mt-4 sm:mt-8 ">
              <div className="flex flex-row justify-center items-center">
                <HiOutlineMail size={20} className="ml-2" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="flex-grow rounded-lg border-none bg-transparent px-0 focus:ring-2 focus:ring-transparent focus:outline-none text-sm sm:text-base"
                />
              </div>

              <Button className="bg-gray-500 text-white -ml-10  py-1" pill>
                Submit
              </Button>
            </div>
            <div className="xl:flex hidden justify-center sm:justify-end gap-4 mt-4 ">
              <div className="bg-gray-500 border border-gray-300 rounded-full p-2">
                <Footer.Icon
                  href="#"
                  icon={FaInstagram}
                  className="text-white hover:text-red-500"
                />
              </div>
              <div className="bg-gray-500 border border-gray-300 rounded-full p-2">
                <Footer.Icon
                  href="#"
                  icon={FaFacebookSquare}
                  className="text-white hover:text-blue-700"
                />
              </div>
              <div className="bg-gray-500 border border-gray-300 rounded-full p-2">
                <Footer.Icon
                  href="#"
                  icon={FaYoutube}
                  className="text-white hover:text-red-700"
                />
              </div>
            </div>
          </div>
        </div>
        {/*mobile view*/}
        <div className="flex items-center  rounded-full border border-gray-500 p-1 text-white mt-4 sm:mt-8 xl:hidden">
          <HiOutlineMail size={20} className="ml-2" />
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-grow rounded-lg border-none bg-transparent px-2 focus:ring-2 focus:ring-transparent focus:outline-none text-sm sm:text-base"
          />
          <Button className="bg-gray-500 text-white px-3 py-1" pill>
            Submit
          </Button>
        </div>
        <div className="flex justify-center xl:justify-end gap-4 mt-4 xl:hidden">
          <div className="bg-gray-500 border border-gray-300 rounded-full p-2">
            <Footer.Icon
              href="#"
              icon={FaInstagram}
              className="text-white hover:text-red-500"
            />
          </div>
          <div className="bg-gray-500 border border-gray-300 rounded-full p-2">
            <Footer.Icon
              href="#"
              icon={FaFacebookSquare}
              className="text-white hover:text-blue-700"
            />
          </div>
          <div className="bg-gray-500 border border-gray-300 rounded-full p-2">
            <Footer.Icon
              href="#"
              icon={FaYoutube}
              className="text-white hover:text-red-700"
            />
          </div>
        </div>
        <div className="w-full px-4 pt-4 flex flex-col lg:justify-center sm:flex-row justify-center items-center text-white text-center">
          <Footer.Copyright
            href="#"
            by="Indotravi"
            year={2023}
            className="text-base text-white"
          />
          <span className="mt-2 sm:mt-0 text-base">, All Rights Reserved</span>
        </div>
      </div>
    </Footer>
  );
}
