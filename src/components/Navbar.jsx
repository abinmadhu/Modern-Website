import { X, LoaderPinwheel, Menu } from "lucide-react"
import styles from "../style"
import { navLinks } from "../constants"
import { useState } from "react";


const Navbar = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full flex py-3 justify-between items-center navbar">
        <div className="flex items-center gap-2">
            <LoaderPinwheel size={"40px"}/>
            <h1 className={`${styles.heading2}`}>Nagans</h1>
        </div>
        <div className="flex-1 flex justify-end items-center">
            <ul className="list-none hidden md:flex flex-row gap-10 items-center">
                {navLinks.map((link) => (
                    <li key={link.id} className=" text-[16px] font-normal cursor-pointer hover:text-blue-500">
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
                <li className="text-[16px] border-[1px] border-black h-full px-5 py-4 rounded-lg">Request a quote</li>
            </ul>
        </div>
        <div className="md:hidden flex items-center">
            <button className="text-[24px] text-black" onClick={() => setToggle(!toggle)}>
                {toggle ? <X size={"24px"} /> : <Menu size={"24px"} />  }
            </button>
            <div>
                {toggle && (
                    <div className="absolute top-16 right-0 bg-white shadow-lg rounded-lg p-5 w-full">
                        <ul className="list-none flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <li key={link.id} className="text-[16px] font-normal cursor-pointer hover:text-blue-500">
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                            <li className="text-[16px] border-[1px] border-black h-full px-5 py-4 rounded-lg text-center">Request a quote</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Navbar