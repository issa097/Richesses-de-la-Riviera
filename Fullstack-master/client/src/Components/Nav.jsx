// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faComments } from "@fortawesome/free-solid-svg-icons"; // Import the chat icon
// import Logoo from "../assests/Logoo.png";
// const Nav = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   function check() {
//     if (window.localStorage.getItem("token")) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div>
//       <header>
//         {/* lg+ */}
//         <div className="bg-[#C08261]">
//           <div className="px-4 mx-auto sm:px-6 lg:px-8">
//             <nav className="relative flex items-center justify-between h-16 lg:h-24">
//               <div className="hidden lg:flex lg:items-center lg:space-x-10">
//                 <Link
//                   to="/"
//                   title=""
//                   className="text-base font-medium text-white"
//                 >
//                   {" "}
//                   Home
//                 </Link>

//                 <Link
//                   to="/AllProducts"
//                   title=""
//                   className="text-base font-medium text-white"
//                 >
//                   {" "}
//                   Products
//                 </Link>

//                 <Link
//                   to="/Aboutus"
//                   title=""
//                   className="text-base font-medium text-white"
//                 >
//                   {" "}
//                   AboutUs
//                 </Link>

//                 <Link
//                   to="/Contactus"
//                   title=""
//                   className="text-base font-medium text-white"
//                 >
//                   {" "}
//                   ContactUs
//                 </Link>

//                 <Link
//                   to="/Faq"
//                   title=""
//                   className="text-base font-medium text-white"
//                 >
//                   {" "}
//                   FAQ
//                 </Link>
//               </div>

//               <div className="hidden lg:flex lg:items-center lg:justify-center lg:h-24 lg:w-full">
//                 <Link to="/" title="" className="flex items-center text-white">
//                   <div className="mx-auto mt-4">
//                     {" "}
//                     {/* Adjusted margin-top */}
//                     <img
//                       className="w-auto h-48 lg:h-60 max-w-full"
//                       src={Logoo}
//                       alt="Logo"
//                     />
//                   </div>
//                   {/* <div>Richesses de la Riviera</div> */}
//                 </Link>
//               </div>

//               <button
//                 type="button"
//                 className="flex items-center justify-center ml-auto text-white w-9 h-9 lg:hidden"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12M6 18L18 6"
//                   />
//                 </svg>
//               </button>

//               <button
//                 type="button"
//                 onClick={toggleMenu}
//                 className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
//               >
//                 <svg
//                   className="w-6 h-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 </svg>
//               </button>

//               <div className="flex space-x-10">
//                 {check() ? (
//                   <div className="hidden lg:flex justify-end lg:items-center lg:space-x-10">
//                     <Link
//                       to="/side"
//                       title=""
//                       className="flex items-center justify-center w-10 h-10 text-white"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="currentColor"
//                         className="w-6 h-6"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
//                         />
//                       </svg>{" "}
//                     </Link>{" "}
//                   </div>
//                 ) : (
//                   // Authenticated User Buttons
//                   <div className="hidden lg:flex lg:items-center lg:space-x-10">
//                     <Link
//                       to="/register"
//                       title=""
//                       className="text-base font-medium text-white"
//                     >
//                       {" "}
//                       Signup
//                     </Link>

//                     <Link
//                       to="/login"
//                       title=""
//                       className="text-base font-medium text-white"
//                     >
//                       {" "}
//                       Signin
//                     </Link>
//                   </div>
//                 )}
//                 <div className="hidden lg:flex lg:items-center lg:space-x-10">
//                   <Link
//                     to="/Cart"
//                     title=""
//                     className="flex items-center justify-center w-10 h-10 text-white"
//                   >
//                     <svg
//                       className="w-6 h-6"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                       />
//                     </svg>
//                   </Link>{" "}
//                 </div>{" "}
//                 {/* Chat Icon */}
//                 {check() && (
//                   <div className="hidden lg:flex justify-end lg:items-center lg:space-x-10">
//                     <Link
//                       to="/chat"
//                       title=""
//                       className="flex items-center justify-center w-10 h-10 text-white"
//                     >
//                       <FontAwesomeIcon icon={faComments} className="w-6 h-6" />
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             </nav>
//           </div>
//         </div>

//         {/* xs to lg */}
//         <nav
//           className={`py-4 bg-transparent lg:hidden ${
//             isMenuOpen ? "block" : "hidden"
//           }`}
//         >
//           <div className="px-4 mx-auto sm:px-6 lg:px-8">
//             <div className="flex items-center justify-between">
//               <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
//                 Menu
//               </p>

//               <button
//                 type="button"
//                 className="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100"
//                 onClick={toggleMenu}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-6 h-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12M6 18L18 6"
//                   />
//                 </svg>
//               </button>
//             </div>

//             <div className={`mt-6 ${isMenuOpen ? "block" : "hidden"}`}>
//               <div className="flex flex-col space-y-2">
//                 <a
//                   href="#"
//                   title=""
//                   className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
//                 >
//                   {" "}
//                   Features
//                 </a>

//                 <a
//                   href="#"
//                   title=""
//                   className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
//                 >
//                   {" "}
//                   Solutions
//                 </a>

//                 <a
//                   href="#"
//                   title=""
//                   className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
//                 >
//                   {" "}
//                   Resources
//                 </a>

//                 <a
//                   href="#"
//                   title=""
//                   className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
//                 >
//                   {" "}
//                   Pricing
//                 </a>
//               </div>

//               <hr className="my-4 border-gray-200" />

//               <div className="flex flex-col space-y-2">
//                 <a
//                   href="#"
//                   title=""
//                   className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
//                 >
//                   {" "}
//                   Sign up
//                 </a>

//                 <a
//                   href="#"
//                   title=""
//                   className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
//                 >
//                   {" "}
//                   Sign in
//                 </a>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Nav;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons"; // Import the chat icon
import Logoo from "../assests/Logoo.png";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function check() {
    if (document.cookie.includes("Token")) {
      return true;
    } else {
      return false;
    }
  }
  console.log(document.cookie.includes("Token"))


  // function check() {
  //   const cookies = document.cookie.split(';');
  //   for (const cookie of cookies) {
  //     const [name, value] = cookie.trim().split('=');
  //     if (name === 'Token') {
  //       return true;
  //     }
  //   }
  //   return false;
  // }


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header>
        {/* lg+ */}
        <div className="bg-[#C08261]">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between h-16 lg:h-24">
              <div className="hidden lg:flex lg:items-center lg:space-x-10">
                <Link
                  to="/"
                  title=""
                  className="text-base font-medium text-white"
                >
                  {" "}
                  Home
                </Link>

                <Link
                  to="/AllProducts"
                  title=""
                  className="text-base font-medium text-white"
                >
                  {" "}
                  Products
                </Link>

                <Link
                  to="/Aboutus"
                  title=""
                  className="text-base font-medium text-white"
                >
                  {" "}
                  AboutUs
                </Link>

                <Link
                  to="/Contactus"
                  title=""
                  className="text-base font-medium text-white"
                >
                  {" "}
                  ContactUs
                </Link>

                <Link
                  to="/Faq"
                  title=""
                  className="text-base font-medium text-white"
                >
                  {" "}
                  FAQ
                </Link>
              </div>

              <div className="hidden lg:flex lg:items-center lg:justify-center lg:h-24 lg:w-full">
                <Link to="/" title="" className="flex items-center text-white">
                  <div className="mx-auto mt-4">
                    {" "}
                    {/* Adjusted margin-top */}
                    <img
                      className="w-auto h-48 lg:h-60 max-w-full"
                      src={Logoo}
                      alt="Logo"
                    />
                  </div>
                  {/* <div>Richesses de la Riviera</div> */}
                </Link>
              </div>

              <button
                type="button"
                className="flex items-center justify-center ml-auto text-white w-9 h-9 lg:hidden"
              >
                {/* <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12M6 18L18 6"
                  />
                </svg> */}
              </button>

              <button
                type="button"
                onClick={toggleMenu}
                className="inline-flex p-2 ml-5 text-white transition-all duration-200 rounded-md lg:hidden"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>

              <div className="flex space-x-10">
                {check() ? (
                  <div className="hidden lg:flex justify-end lg:items-center lg:space-x-10">
                    <Link
                      to="/side"
                      title=""
                      className="flex items-center justify-center w-10 h-10 text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>{" "}
                    </Link>{" "}
                  </div>
                ) : (
                  // Authenticated User Buttons
                  <div className="hidden lg:flex lg:items-center lg:space-x-10">
                    <Link
                      to="/register"
                      title=""
                      className="text-base font-medium text-white"
                    >
                      {" "}
                      Signup
                    </Link>

                    <Link
                      to="/login"
                      title=""
                      className="text-base font-medium text-white"
                    >
                      {" "}
                      Signin
                    </Link>
                  </div>
                )}
                <div className="hidden lg:flex lg:items-center lg:space-x-10">
                  <Link
                    to="/Cart"
                    title=""
                    className="flex items-center justify-center w-10 h-10 text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </Link>{" "}
                </div>{" "}
                {/* Chat Icon */}
                {check() && (
                  <div className="hidden lg:flex justify-end lg:items-center lg:space-x-10">
                    <Link
                      to="/chat"
                      title=""
                      className="flex items-center justify-center w-10 h-10 text-white"
                    >
                      <FontAwesomeIcon icon={faComments} className="w-6 h-6" />
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>

        {/* xs to lg */}
        <nav
          className={`py-4 bg-transparent lg:hidden ${isMenuOpen ? "block" : "hidden"
            }`}
        >
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Menu
              </p>

              <button
                type="button"
                className="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12M6 18L18 6"
                  />
                </svg>
              </button>
            </div>

            <div className={`mt-6 ${isMenuOpen ? "block" : "hidden"}`}>
              <div className="flex flex-col space-y-2">
                <Link
                  to="/"
                  title=""
                  className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                >
                  {" "}
                  Home
                </Link>

                <Link
                  to="/allproducts"
                  title=""
                  className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                >
                  {" "}
                  Products
                </Link>

                <Link
                  to="/aboutus"
                  title=""
                  className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                >
                  {" "}
                  Aboutus
                </Link>

                <Link
                  to="/contactus"
                  title=""
                  className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                >
                  {" "}
                  Contactus
                </Link>
              </div>

              <hr className="my-4 border-gray-200" />

              <div className="flex flex-col space-y-2">
                <Link
                  to="/register"
                  title=""
                  className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                >
                  {" "}
                  Sign up
                </Link>

                <Link
                  to="/login"
                  title=""
                  className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                >
                  {" "}
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
