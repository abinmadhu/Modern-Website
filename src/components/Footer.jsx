import {
  Facebook,
  Link2Icon,
  Linkedin,
  LoaderPinwheel,
  Twitter,
} from "lucide-react";
import styles from "../style";
import { navLinks } from "../constants";

const Footer = () => {
  return (
    <div className={` `}>
      <div className="flex flex-col md:px-12 md:py-10 items-center bg-secondary text-white md:rounded-t-[30px]">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <LoaderPinwheel className="w-6 h-6 md:w-10 md:h-10" />
            <h1 className={`text-[25px] md:text-[30px]`}>Nagans</h1>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5 mt-5 md:mt-0">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-[16px]  font-normal cursor-pointer hover:text-blue-500"
              >
                {link.title}
              </a>
            ))}
          </div>
          <div className="lg:flex hidden items-center justify-between gap-4">
          <div className="bg-white p-[5px] rounded-full">
            <Linkedin size={"20px"} className="text-black" />
          </div>
          <div className="bg-white p-[5px] rounded-full">
            <Facebook size={"20px"} className="text-black" />
          </div>
          <div className="bg-white p-[5px] rounded-full">
            <Twitter size={"20px"} className="text-black" />
          </div>
        </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row w-full justify-between">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="bg-primary p-2 rounded-lg md:text-[22px] text-secondary font-semibold">
              Contact us:
            </p>
            <p className="mt-3">Email:info@nagans.com</p>
            <p>Phone:444-555-5689</p>
            <p className="text-center md:text-start max-w-[400px]">
              Address: 123 Evergreen Avenue Downtown District Springfield, IL
              62704 United States
            </p>
          </div>
          <div className="bg-gray-600 px-8 flex-1 py-6 rounded-lg mt-5 md:mt-0 flex flex-col lg:flex-row items-center gap-5">
            <input
              type="text"
              placeholder="Email"
              className="w-full px-5 py-3 md:px-6 md:py-6  bg-transparent border rounded-md"
            />
            <button className="w-full px-5 py-3 md:px-6 md:py-6 bg-primary text-secondary font-semibold rounded-md">
              Subscribe to news
            </button>
          </div>
        </div>
        <div className="md:hidden flex items-center justify-between mt-10 gap-4">
          <div className="bg-white p-[5px] rounded-full">
            <Linkedin size={"20px"} className="text-black" />
          </div>
          <div className="bg-white p-[5px] rounded-full">
            <Facebook size={"20px"} className="text-black" />
          </div>
          <div className="bg-white p-[5px] rounded-full">
            <Twitter size={"20px"} className="text-black" />
          </div>
        </div>
        <hr className="h-[1px] bg-white w-full my-5 md:my-10" />
        <div className="flex flex-col md:flex-row w-full items-center gap-3">
          <p className="text-[14px]">© 2023 Nagans. All rights reserved.</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
