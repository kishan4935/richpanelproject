'use client'

import Link from 'next/link';
import React from 'react'
import {
  MdSupervisorAccount,
  MdDrafts,
  MdMoving,
  MdPeople,
} from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="bg-[#1e4d91] w-20 h-screen flex flex-col ">
      <div className="w-full flex justify-center">
        <div className="bg-white w-8 h-8 mt-8"></div>
      </div>
      <div className="flex flex-col justify-between flex-1 my-8 text-3xl">
        <div className="flex flex-col gap-6">
          <Link className="bg-white flex justify-center p-4" href="/">
            <MdDrafts />
          </Link>
          <Link className="flex justify-center p-4 text-white" href="/">
            <MdPeople />
          </Link>
          <Link className="flex justify-center p-4 text-white" href="/">
            <MdMoving />
          </Link>
        </div>
        <div className="flex justify-center">
          <div className="rounded-full w-8 h-8 bg-white"></div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar