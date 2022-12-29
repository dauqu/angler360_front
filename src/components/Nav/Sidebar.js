import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineIdcard,
  AiOutlineCloudUpload,
  AiOutlineAudio,
  AiOutlineUserAdd,
  AiOutlineUnlock,
  AiOutlineBell,
} from "react-icons/ai";

import { BsGear, BsRecordCircle, BsListNested } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineUserAdd } from "react-icons/hi";
import { TiContacts } from "react-icons/ti";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { MdAddBusiness, MdOutlineCategory } from "react-icons/md";
import { AiOutlineFundView } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FiUploadCloud } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { BsImages } from "react-icons/bs";
import {
  MdOutlineLocalLibrary,
  MdOutlineDialpad,
  MdOutlineDoNotTouch,
  MdOutlinePayment,
  MdOutlineSecurity,
} from "react-icons/md";
import { IoAnalyticsOutline, IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { ImHistory } from "react-icons/im";
import { BsBoxSeam } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";

const Sidebar = ({ status }) => {
  return (
    <div
      id="sideBar"
      className={`${
        status && "max-lg:hidden"
      } relative top-0 flex flex-col flex-wrap border-r border-gray-300 p-6 lg:w-[18%] h-[100%] animated faster overflow-y-scroll overflow-x-hidden
    max-lg:fixed max-lg:top-[74px] max-lg:pb-[74px] w-[250px] left-0 z-20 bg-white
    `}
    >
      <div className="flex flex-col">
        <Link
          to="/"
          className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center"
        >
          <RxDashboard
            size={20}
            color="#ff5c16"
            className={"mr-3 hover:text-inherit"}
          />
          Dashboard
        </Link>

        {/* <Link to="/campaign" className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center">
          <BsGear size={20} className={"mr-3 hover:text-inherit"} />
          Campaign
        </Link>

        <Link to="/caller" className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center">
          <AiOutlineIdcard size={20} className={"mr-3 hover:text-inherit"} />
          Caller ID
        </Link> */}
        <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">
          Category
        </p>
        <Link
          to="/addcategory"
          className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center"
        >
          <MdOutlineCategory size={20} className={"mr-3 hover:text-inherit"} />
          Add Category
        </Link>
        <Link
          to="/viewcategory"
          className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center"
        >
          <BiCategory size={20} className={"mr-3 hover:text-inherit"} />
          View Category
        </Link>

        <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">
          Product
        </p>
        <Link
          to="/addproduct"
          className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center"
        >
          <MdAddBusiness size={20} className={"mr-3 hover:text-inherit"} />
          Add Product
        </Link>
        <Link
          to="/viewproduct"
          className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center"
        >
          <AiOutlineFundView size={20} className={"mr-3 hover:text-inherit"} />
          View Product
        </Link>
        {/* <Link to="/all-audio" className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center">
          <AiOutlineAudio size={20} className={"mr-3 hover:text-inherit"} />
          All audio files
        </Link>

        <Link to="/upload-audio" className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center">
          <AiOutlineCloudUpload size={20} className={"mr-3 hover:text-inherit"} />
          Upload Audio Files
        </Link>

        <Link to="/celebrity-recording" className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center">
          <BsRecordCircle size={20} className={"mr-3 hover:text-inherit"} />
          Celebrity Recording
        </Link> */}

        {/* orders */}
        <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">
          Orders
        </p>
        <Link
          to="/vieworders"
          className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center"
        >
          <BsBoxSeam size={20} className={"mr-3 hover:text-inherit"} />
          View Orders
        </Link>
        <Link
          to="/cancelled_order"
          className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center"
        >
          <GiCancel size={20} className={"mr-3 hover:text-inherit"} />
          Cancelled Orders
        </Link>

        {/* users */}
        <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">
          Users
        </p>
        <Link
          to="/viewusers"
          className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center"
        >
          <FaUsers size={20} className={"mr-3 hover:text-inherit"} />
          View Users
        </Link>
        <Link
          to="/adduser"
          className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center"
        >
          <HiOutlineUserAdd size={20} className={"mr-3 hover:text-inherit"} />
          Add User
        </Link>
        {/* media */}
        <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">
          Media
        </p>
        <Link
          to="/viewimages"
          className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center"
        >
          <BsImages size={20} className={"mr-3 hover:text-inherit"} />
          View Images
        </Link>

        {/* Analytics  */}

        {/* <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">
          Analytics
        </p>

        <Link
          to="/ananlytics"
          className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center"
        >
          <TbBrandGoogleAnalytics
            size={20}
            className={"mr-3 hover:text-inherit"}
          />
          Statistic
        </Link> */}

        {/* Setting  */}
        <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">
          Settings
        </p>
        <Link
          to="/changepassword"
          className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center"
        >
          <AiOutlineUnlock size={20} className={"mr-3 hover:text-inherit"} />
          Change Password
        </Link>
        {/* <Link
          to="/setting"
          className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center"
        >
          <IoSettingsOutline size={20} className={"mr-3 hover:text-inherit"} />
          General Settings
        </Link>

        <Link
          to="/profile-setting"
          className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center"
        >
          <CgProfile size={20} className={"mr-3 hover:text-inherit"} />
          Profile Settings
        </Link> */}

        {/* <Link
          to="/security"
          className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center"
        >
          <MdOutlineSecurity size={20} className={"mr-3 hover:text-inherit"} />
          Security
        </Link> */}

        {/* <Link
          to="/login-history"
          className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center"
        >
          <ImHistory size={20} className={"mr-3 hover:text-inherit"} />
          Login History
        </Link> */}
        {/* 
        <Link
          to="/notification"
          className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center"
        >
          <AiOutlineBell size={20} className={"mr-3 hover:text-inherit"} />
          Notifications
        </Link> */}
      </div>
    </div>
  );
};

export default Sidebar;
