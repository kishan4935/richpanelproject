import Image from "next/image";
import Signup from "./auth/signup/page";
import ConnectPage from "./(FBIntegration)/ConnectPage";
import DisconnectPage from "./(FBIntegration)/DisconnectPage";
import Sidebar from "@/components/Sidebar";

import { HiMenuAlt1, HiPhone } from "react-icons/hi";
import { FaArrowRotateRight, FaCircle, FaCircleUser } from "react-icons/fa6";
import UserCard from "@/components/UserCard";
import Link from "next/link";
import MessageCard from "@/components/MessageCard";

export default function Home() {

  const connected = true;

  if(!connected) {
    return <ConnectPage />
  }

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex h-screen w-full">
        <div className="flex flex-col">
          <div className="flex h-fit items-center w-96 justify-between p-4 border-[1px]">
            <div className="flex items-center gap-2">
              <HiMenuAlt1 className="text-[#b3b3b3] text-2xl" />
              <h3 className="text-black text-2xl">Conversations</h3>
            </div>
            <FaArrowRotateRight className="text-[#b3b3b3] text-2xl" />
          </div>
          <div className="border-[1px] flex-1 w-96">
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex-[3] flex flex-col">
            <div className="flex border-[1px] p-4">
              <h4 className="text-2xl">Amit RG</h4>
            </div>
            <div className="bg-[#f6f6f6] flex flex-col flex-1 p-4 justify-between">
              <div>
                <MessageCard user="me" message="Text message" />
                <MessageCard user="user" message="Text message" />
                <MessageCard user="user" message="Text message" />
                <MessageCard user="me" message="Text message" />
                <MessageCard user="user" message="Text message" />
                <MessageCard user="me" message="Text message" />
              </div>
              <div>
                <input
                  placeholder="Write message here "
                  className="p-4 rounded-md w-full focus:border-[#1e4d91] focus:border-[2px] outline-none"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#eff2f7]  flex-[1] border-[1px]">
            <div className="bg-white flex flex-col items-center gap-4 py-6">
              <div>
                <div className="w-16 h-16 bg-red-100 rounded-full my-4"></div>
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-bold">Amit RG</h3>
                  <p className="flex items-center gap-1 text-[#cbcbcb] text-xs">
                    <FaCircle />
                    Offline
                  </p>
                </div>
              </div>
              <div className="flex gap-4 text-[#58595b]">
                <button className="flex items-center gap-2 border-[2px] px-2 rounded-md font-medium">
                  <HiPhone />
                  Call
                </button>
                <button className="flex items-center gap-2 border-[2px] px-2 rounded-md font-medium">
                  <FaCircleUser />
                  Profile
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="rounded-md bg-white p-4 flex flex-col gap-2">
                <h6 className="text-xl font-semibold">Customer details</h6>
                <div className="flex justify-between">
                  <h3>Email</h3>
                  <p>amit@richpanel.com</p>
                </div>
                <div className="flex justify-between">
                  <h3>First Name</h3>
                  <p>Amit</p>
                </div>
                <div className="flex justify-between">
                  <h3>Last Name</h3>
                  <p>RG</p>
                </div>
                <Link className="text-[#1e4d91] font-semibold" href="">
                  View more details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
