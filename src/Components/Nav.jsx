import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import gitIcon from '../assets/icons8-git-40.png';

const Nav = () => {
  const location = useLocation();

  return (
    <div>
      <div className="navbar bg-base-100  px-10 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
                {' '}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li><Link to="/">Home</Link></li>
              <li><Link to="/apps">Apps</Link></li>
              <li><Link to="/installation">Installation</Link></li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl flex items-center text-[#7a59e8]">
            <img src={logo} alt="logo" className="h-8 w-8 mr-2" />
            HERO.IO
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/" className={location.pathname === '/' ? 'bg-gradient-to-r from-[#825ae8] to-[#9a65ef] bg-clip-text text-transparent font-semibold underline' : 'text-black'}>Home</Link>
            </li>
            <li>
              <Link to="/apps" className={location.pathname === '/apps' ? 'bg-gradient-to-r from-[#825ae8] to-[#9a65ef] bg-clip-text text-transparent font-semibold underline' : 'text-black'}>Apps</Link>
            </li>
            <li>
              <Link to="/installation" className={location.pathname === '/installation' ? 'bg-gradient-to-r from-[#825ae8] to-[#9a65ef] bg-clip-text text-transparent font-semibold underline' : 'text-black'}>Installation</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-gradient-to-r from-[#7157e5] to-[#9c60f1] text-white " href="https://github.com/" target="_blank" rel="noopener"> {/* it opens new tab while opening link*/}
            <img src={gitIcon} alt="GitHub" className="h-5 w-5 mr-2 inline-block" />Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
