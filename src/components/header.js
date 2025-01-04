
import React from "react";
const Header=()=>{
     return(
        <>
        <nav style={{height:"50px"}}>
         {/* Navigation Links */}

         <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="About" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              Resources
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Login
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              Sign Up
            </button>
          </div>
        
    </nav>
         </>
     )
}
export default Header;