import { Button } from "@/components/ui/button";
import { FC } from "react";
import {
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineMessage,
} from "react-icons/ai";
import { IoDocumentTextOutline, IoCalendarOutline } from "react-icons/io5";
import { HiOutlineBuildingOffice2, HiOutlineUsers } from "react-icons/hi2";
import { BsGear } from "react-icons/bs";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
          <div className="space-y-3">
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <AiOutlineHome className="mr-2 text-lg " /> Home
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <AiOutlineMessage className="mr-2 text-lg " /> Messages
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <HiOutlineBuildingOffice2 className="mr-2 text-lg " /> Company
              Profile
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <HiOutlineUsers className="mr-2 text-lg " /> All Applicants
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <IoDocumentTextOutline className="mr-2 text-lg " /> Job Listings
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <IoCalendarOutline className="mr-2 text-lg " /> My Schedules
            </Button>
          </div>
        </div>
      </div>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Setting</h2>
          <div className="space-y-3">
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <BsGear className="mr-2 text-lg " /> Setting
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <AiOutlineLogout className="mr-2 text-lg " /> Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
