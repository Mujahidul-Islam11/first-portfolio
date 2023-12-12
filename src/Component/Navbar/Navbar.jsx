import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links=(
    <>
       <li>
       <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? " text-[#F4CE14] font-bold border-y-4 border-[#6c4cdc] " : ""
        }
      >
        <a href="" className="text-2xl">Home</a>
      </NavLink>
        </li>
      <li>
      <NavLink
        to="/About"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? " text-[#F4CE14] font-bold border-y-4 border-[#6c4cdc]" : ""
        }
      >
        <a href="" className="text-2xl ">About</a>
      </NavLink>
      </li>
      <li>
      <NavLink
        to="/Skills"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? " text-[#F4CE14] font-bold border-y-4 border-[#6c4cdc] " : ""
        }
      >
        <a href="" className="text-2xl ">Skills</a>
      </NavLink>
      </li>
      <li>
      <NavLink
        to="/Projects"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? " text-[#F4CE14] font-bold border-y-4 border-[#6c4cdc] " : ""
        }
      >
        <a href="" className="text-2xl ">Projects</a>
      </NavLink>
      </li>
      <li>
      <NavLink
        to="/Contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? " text-[#F4CE14] font-bold border-y-4 border-[#6c4cdc] " : ""
        }
      >
        <a href="" className="text-2xl ">Contact</a>
      </NavLink>
      </li>
        </>
  )
  return (
    <div className="md:w-[1200px] navbar flex justify-between bg-base-100 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <div className={'flex justify-center'}>
    <img src="https://i.postimg.cc/jdPZ61hH/MOJAHIDUL-ISLAM-1-removebg-preview.png" className="w-28" alt="" />
</div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
</div>

  );
};

export default Navbar;
