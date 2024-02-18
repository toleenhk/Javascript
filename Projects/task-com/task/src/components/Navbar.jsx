import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className=" text-white font-bold " href={"/"}>
        Logout
      </Link>
      <Link
        className=" font-bold text-purple-950 bg-white p-2"
        href={"/addBook"}
      >
        {" "}
        Add Book
      </Link>
    </nav>
  );
};

export default Navbar;
