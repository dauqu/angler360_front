import React, { useEffect, useState } from "react";
import "./analytical.css";
import { BiCoinStack } from "react-icons/bi";
import { AiOutlineCalculator } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { IoStatsChartOutline, IoAppsOutline } from "react-icons/io5";
import { TbPhoneCalling } from "react-icons/tb";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { SlCallOut } from "react-icons/sl";
import { MdOutlineCallToAction } from "react-icons/md";
import { FcEndCall } from "react-icons/fc";
import { FiDollarSign } from "react-icons/fi";
import { FaUsers, FaBoxes } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { API } from "../../Constant";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const Analytical = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  // code to get total users
  const getAllUsers = () => {
    const resp = axios
      .get(`${API}/Getuser/count/alluser`)
      .then((res) => {
        // console.log(res.data);
        setTotalUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // useEffect(() => {}, []);

  // code to get total products
  const getAllProducts = () => {
    const resp = axios
      .get(`${API}/products/count/allproduct`)
      .then((res) => {
        console.log(res.data);
        setTotalProducts(res.data.total_products);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // useEffect(() => {}, []);

  // code to get total categories
  const getAllCategories = () => {
    const resp = axios
      .get(`${API}/productcategories/count/allproductcategory`)
      .then((res) => {
        // console.log(res.data);
        setTotalCategories(res.data.total_product_categories);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // code to get total orders
  const getAllOrders = () => {
    const resp = axios
      .get(`${API}/orders/count/allorders`)
      .then((res) => {
        // console.log(res.data);
        setTotalOrders(res.data.total_orders);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllUsers();
    getAllProducts();
    getAllCategories();
    getAllOrders();
  }, []);

  return (
    <>
      <div>
        <div className="p-6 grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex flex-col space-y-2">
                <span className="text-gray-800">Total Users's</span>
                <span className="text-lg font-semibold">
                  {totalUsers ? (
                    totalUsers
                  ) : (
                    <Box sx={{ display: "flex" }}>
                      <CircularProgress size={17} />
                    </Box>
                  )}
                </span>
              </div>
              <div className="p-6 bg-gray-200 items-center text-center justify-center rounded-md">
                <FaUsers size={25} color="red" className="font-bold" />
              </div>
            </div>
          </div>
          <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex flex-col space-y-2">
                <span className="text-gray-800">Total Product's</span>
                <span className="text-lg font-semibold">
                  {totalProducts ? (
                    totalProducts
                  ) : (
                    <Box sx={{ display: "flex" }}>
                      <CircularProgress size={17} />
                    </Box>
                  )}
                </span>
              </div>
              <div className="p-6 bg-gray-200 items-center text-center justify-center rounded-md">
                <FaBoxes size={25} color="#F55D0B" className="font-bold" />
              </div>
            </div>
          </div>
          <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex flex-col space-y-2">
                <span className="text-gray-800">Total Category</span>
                <span className="text-lg font-semibold">
                  {totalCategories ? (
                    totalCategories
                  ) : (
                    <Box sx={{ display: "flex" }}>
                      <CircularProgress size={17} />
                    </Box>
                  )}
                </span>
              </div>
              <div className="p-6 bg-gray-200 items-center text-center justify-center rounded-md">
                <BiCategoryAlt
                  size={25}
                  color="#187FFF"
                  className="font-bold"
                />
              </div>
            </div>
            {/* <div>
              <span className="inline-block px-2 text-sm text-white bg-green-300 rounded">
                14%
              </span>
              <span>from 2019</span>
            </div> */}
          </div>
          <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex flex-col space-y-2">
                <span className="text-gray-800">Total Orders</span>
                <span className="text-lg font-semibold">
                  {totalOrders ? (
                    totalOrders
                  ) : (
                    <Box sx={{ display: "flex" }}>
                      <CircularProgress size={17} />
                    </Box>
                  )}
                </span>
              </div>
              <div className="p-6 bg-gray-200 items-center text-center justify-center rounded-md">
                <FiDollarSign size={25} color="#3EAF40" className="font-bold" />
              </div>
            </div>
            {/* <div>
              <span className="inline-block px-2 text-sm text-white bg-green-300 rounded">
                14%
              </span>
              <span>from 2019</span>
            </div> */}
          </div>
        </div>
      </div>
      <div className="p-6 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 xl:gap-6 lg:gap-6 md:gap-4 sm:gap-3">
        <div className="report-card flex flex-col">
          <div className="card">
            <div className="card-body border p-5 flex bg-white flex-col">
              <div className="flex flex-row justify-between items-center">
                <BiCoinStack size={28} className={"text-indigo-700"} />
                <span className="rounded-full px-3 py-2 text-white badge bg-teal-400 text-xs">
                  12%
                  <i className="fal fa-chevron-up ml-1"></i>
                </span>
              </div>

              <div className="mt-8">
                <h1 className="h5 num-4 text-3xl">544</h1>
                <p className="capitalize text-gray-400 font-bold">Usage</p>
              </div>
            </div>
          </div>
          <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
        </div>

        <div className="report-card">
          <div className="card">
            <div className="card-body border p-5 flex bg-white flex-col">
              <div className="flex flex-row justify-between items-center">
                {/* <div className="h6 text-red-700 fad fa-store"></div> */}
                <AiOutlineCalculator size={28} className={"text-red-700"} />
                <span className="rounded-full px-3 py-2 text-white badge bg-red-400 text-xs">
                  6%
                  <i className="fal fa-chevron-down ml-1"></i>
                </span>
              </div>

              <div className="mt-8">
                <h1 className="h5 num-4 text-3xl">8741</h1>
                <p className="capitalize text-gray-400 font-bold">ASR</p>
              </div>
            </div>
          </div>
          <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
        </div>

        <div className="report-card">
          <div className="card">
            <div className="card-body border p-5 flex bg-white flex-col">
              <div className="flex flex-row justify-between items-center">
                <IoStatsChartOutline size={28} className={"text-yellow-700"} />
                <span className="rounded-full py-2 px-3 text-white badge bg-teal-400 text-xs">
                  72%
                  <i className="fal fa-chevron-up ml-1"></i>
                </span>
              </div>

              <div className="mt-8">
                <h1 className="h5 num-4 text-3xl">75</h1>
                <p className="capitalize text-gray-400 font-bold">
                  Progress Call
                </p>
              </div>
            </div>
          </div>
          <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
        </div>
        <div className="report-card">
          <div className="card">
            <div className="card-body border p-5 flex bg-white flex-col">
              <div className="flex flex-row justify-between items-center">
                <FiPhoneCall size={28} className={"text-green-700"} />
                <span className="rounded-full px-3 py-2 text-white badge bg-teal-400 text-xs">
                  150%
                  <i className="fal fa-chevron-up ml-1"></i>
                </span>
              </div>

              <div className="mt-8">
                <h1 className="h5 num-4 text-3xl">857</h1>
                <p className="capitalize font-bold text-gray-400">
                  Active Call
                </p>
              </div>
            </div>
          </div>
          <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
        </div>

        <div className="report-card">
          <div className="card">
            <div className="card-body border p-5 flex bg-white flex-col">
              <div className="flex flex-row justify-between items-center">
                <IoAppsOutline size={28} className={"text-blue-700"} />
                <span className="rounded-full px-3 py-2 text-white badge bg-teal-400 text-xs">
                  150%
                  <i className="fal fa-chevron-up ml-1"></i>
                </span>
              </div>

              <div className="mt-8">
                <h1 className="h5 num-4 text-3xl">0</h1>
                <p className="capitalize font-bold text-gray-400">
                  Dialed Call
                </p>
              </div>
            </div>
          </div>
          <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
        </div>

        {/* card 6 wraped  */}
        {/* <div className="report-card">
          <div className="card">
            <div className="card-body border p-5 flex bg-white flex-col">
              <div className="flex flex-row justify-between items-center">
                <TbPhoneCalling size={28} className={"text-green-700"} />
                <span className="rounded-full px-3 py-2 text-white badge bg-yellow-400 text-xs">
                  50%
                  <i className="fal fa-chevron-up ml-1"></i>
                </span>
              </div>

              <div className="mt-8">
                <h1 className="h5 num-4 text-3xl">0</h1>
                <p className="capitalize font-bold text-gray-400">
                  Answered Call
                </p>
              </div>
            </div>
          </div>
          <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
        </div>

        <div className="report-card">
          <div className="card">
            <div className="card-body border p-5 flex bg-white flex-col">
              <div className="flex flex-row justify-between items-center">
                <HiOutlinePhoneMissedCall
                  size={28}
                  className={"text-red-700"}
                />
                <span className="rounded-full px-3 py-2 text-white badge bg-orange-400 text-xs">
                  50%
                  <i className="fal fa-chevron-up ml-1"></i>
                </span>
              </div>

              <div className="mt-8">
                <h1 className="h5 num-4 text-3xl">0</h1>
                <p className="capitalize font-bold text-gray-400">
                  Unanswered Call
                </p>
              </div>
            </div>
          </div>
          <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
        </div>

        <div className="report-card">
          <div className="card">
            <div className="card-body border p-5 flex bg-white flex-col">
              <div className="flex flex-row justify-between items-center">
                <MdOutlineCallToAction size={28} className={"text-gray-700"} />
                <span className="rounded-full px-3 py-2 text-white badge bg-red-400 text-xs">
                  90%
                  <i className="fal fa-chevron-up ml-1"></i>
                </span>
              </div>

              <div className="mt-8">
                <h1 className="h5 num-4 text-3xl">0</h1>
                <p className="capitalize font-bold text-gray-400">
                  Machine Call
                </p>
              </div>
            </div>
          </div>
          <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
        </div>

        <div className="report-card">
          <div className="card">
            <div className="card-body border p-5 flex bg-white flex-col">
              <div className="flex flex-row justify-between items-center">
                <SlCallOut size={28} className={"text-orange-700"} />
                <span className="rounded-full px-3 py-2 text-white badge bg-red-400 text-xs">
                  90%
                  <i className="fal fa-chevron-up ml-1"></i>
                </span>
              </div>

              <div className="mt-8">
                <h1 className="h5 num-4 text-3xl">0</h1>
                <p className="capitalize font-bold text-gray-400">
                  Live Transfer
                </p>
              </div>
            </div>
          </div>
          <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
        </div>

        <div className="report-card">
          <div className="card">
            <div className="card-body border p-5 flex bg-white flex-col">
              <div className="flex flex-row justify-between items-center">
                <FcEndCall size={28} className={"text-red-800"} />
                <span className="rounded-full px-3 py-2 text-white badge bg-red-800 text-xs">
                  150%
                  <i className="fal fa-chevron-up ml-1"></i>
                </span>
              </div>

              <div className="mt-8">
                <h1 className="h5 num-4 text-3xl">0</h1>
                <p className="capitalize font-bold text-gray-400">DNC</p>
              </div>
            </div>
          </div>
          <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
        </div> */}
      </div>
    </>
  );
};

export default Analytical;
