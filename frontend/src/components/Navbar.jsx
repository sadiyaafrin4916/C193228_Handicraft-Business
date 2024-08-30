// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle'; // Import the ThemeToggle component

const Navbar = () => {
  const [isLoggedIn] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-orange-500 via-yellow-500  p-5 shadow-lg">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <img src="/images/craft.png" alt="Logo" className="w-10 h-10 sm:w-12 sm:h-12" />
          <h1 className="text-white text-2xl sm:text-2xl font-bold">
            Bangladeshi
            <span className="text-orange-800 text-2xl sm:text-2xl font-bold">Handicrafts||বাংলাদেশী হস্তশিল্প</span>
          </h1>
        </div>
        <ul className="flex items-center space-x-2 sm:space-x-4 mt-4 sm:mt-0 w-full sm:w-auto justify-around sm:justify-end">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-teal-200 px-2 py-1 sm:px-3 sm:py-2 rounded-md text-lg sm:text-xl font-bold ${isActive ? 'bg-orange-800' : 'hover:bg-orange-700'}`
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                `text-teal-200 px-2 py-1 sm:px-3 sm:py-2 rounded-md text-lg sm:text-xl font-bold ${isActive ? 'bg-orange-800' : 'hover:bg-orange-700'}`
              }
            >
              Product
            </NavLink>
         </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `text-teal-200 px-2 py-1 sm:px-3 sm:py-2 rounded-md text-lg sm:text-xl font-bold ${isActive ? 'bg-orange-800' : 'hover:bg-orange-700'}`
              }
            >
              Blog
            </NavLink>
         </li>

          {isLoggedIn ? (
            
<li>
<NavLink
  to="/"
  className={({ isActive }) =>
    `text-teal-200 px-2 py-1 sm:px-3 sm:py-2 rounded-md text-lg sm:text-xl font-bold ${isActive ? 'bg-orange-800' : 'hover:bg-orange-700'}`
  }
  end
>
  Home
</NavLink>
</li>
          ) : (


            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `text-teal-200 px-2 py-1 sm:px-3 sm:py-2 rounded-md text-lg sm:text-xl font-bold ${isActive ? 'bg-orange-800' : 'hover:bg-orange-700'}`
                }
              >
                Login
              </NavLink>
            </li>
          )}
          <li>
            <ThemeToggle /> {/* Add the ThemeToggle component here */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
