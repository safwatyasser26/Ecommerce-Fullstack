"use client"
import {useRouter} from "next/navigation";
import useSearchStore from "@/store/searchStore";
import { useState } from "react";

import {useSession, signIn, signOut} from "next-auth/react";

import {
    FiSearch,
    FiHeart,
    FiShoppingCart,
    FiMenu,
    FiUser,
    FiX,
} from "react-icons/fi";

import Link from "next/link";
import Image from "next/image";
import DropDownMenu from "@/components/Common/DropDownMenu";
const Navbar = () => {
    const router = useRouter();
    const {data:session, status} = useSession();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    
    const closeMobileMenu = () => setIsMobileMenuOpen(false);
    const handleDropDownMenu = (e) => setIsOpen(!e);
    const setSearchTerm = useSearchStore((state) => state.setSearchTerm);
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(input);
    router.push("/search");
  };
    

    return (
        <header className="shadow-sm w-full z-50 pt-8 pb-4 bg-white">
            <div className="container mx-auto flex justify-between items-center lg:px-12 px-6">
                <div className="flex justify-between w-[675px]">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold">
                        Breez
                    </Link>
                    <nav className="hidden md:flex w-[367px] justify-between items-center px-2">
                        <Link href="/" className="relative group">
                            Home
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
                        </Link>
                        <Link href="/contact" className="relative group">
                            Contact
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
                        </Link>
                        <Link href="/about" className="relative group">
                            About
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
                        </Link>
                        <Link href="/api/auth/signin" className="relative group">
                            Sign Up
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
                        </Link>
                    </nav>
                </div>
                {/* Search Bar and Icons */}
                <div className="hidden md:flex justify-between items-center w-90">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="w-64 pl-5 pr-3 py-2 rounded-sm bg-gray-100 text-gray-600"
                            value={input}
                            onChange={(e)=>setInput(e.target.value)}
                            onKeyDown={
                                (e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault();
                                        setSearchTerm(input);
                                        router.push("/search");
                                       
                                    }
                                }
                            }
                        />
                        <button>
                            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl" />
                        </button>
                    </div>
                    <Link href="/cart">
                        <FiHeart className="text-2xl" />
                    </Link>
                    <Link href="/cart">
                        <FiShoppingCart className="text-2xl" />
                    </Link>
                    <Link href="/api/auth/signin">
                        {session ? 
                        <div className="relative">
                            <Image src={session.user.image} alt="profile" width={24} height={24} className="rounded-full" />
                            <DropDownMenu open={isOpen}/>
                        </div>
                         : <FiUser className="text-2xl" />}
                    </Link>
                </div>
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                 <div className="md:hidden absolute top- 4 left-0 w-full bg-white shadow-md z-50">
                 <div className="container mx-auto flex flex-col items-start px-6 py-4 space-y-4">
                     {/* Mobile Search */}
                     <div className="relative w-full">
                         <input
                             type="text"
                             placeholder="What are you looking for?"
                             className="w-full pl-5 pr-10 py-2 rounded-sm bg-gray-100 text-gray-600 focus:outline-none"
                             value={input}
                             onChange={(e)=>setInput(e.target.value)}
                             onKeyDown={
                                (e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault();
                                        setSearchTerm(input);
                                        router.push("/search");
                                    }
                                }
                            }
                         />
                          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                             <FiSearch className="text-xl" />
                         </button>
                     </div>
                     {/* Mobile Navigation */}
                     <nav className="flex flex-col items-start space-y-3 w-full">
                         <Link href="/" onClick={closeMobileMenu} className="w-full text-lg">Home</Link>
                         <Link href="/contact" onClick={closeMobileMenu} className="w-full text-lg">Contact</Link>
                         <Link href="/about" onClick={closeMobileMenu} className="w-full text-lg">About</Link>
                         <Link href="/signup" onClick={closeMobileMenu} className="w-full text-lg">Sign Up</Link>
                     </nav>
                     <hr className="w-full border-gray-200" />
                     {/* Mobile Icons */}
                     <div className="flex items-center justify-start space-x-6 pt-2">
                          <Link href="/favorite" onClick={closeMobileMenu}>
                             <FiHeart className="text-2xl" />
                         </Link>
                         <Link href="/cart" onClick={closeMobileMenu}>
                             <FiShoppingCart className="text-2xl" />
                         </Link>
                          <button onClick={() => SignIn()}>
                             <FiUser className="text-2xl" />
                          </button>
                     </div>
                 </div>
             </div>
            )}
        </header>
    );
};

export default Navbar;

