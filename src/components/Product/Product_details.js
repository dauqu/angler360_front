import React, { useEffect, useState } from "react";
import { BsBoxSeam, BsImage } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import Base from "../Base/Base";
import box from "../../assets/img/box.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API } from "../../Constant";
function Product_details() {
  const [product, setProduct] = useState([]);
  const { _id } = useParams();

  // code to get product by id
  useEffect(() => {
    axios
      .get(`${API}/orders/${_id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-gray-100">
      <Base>
        <div className=" ">
          <div className="container mx-auto my-5 p-5">
            <div className="flex w-full">
              <h2 className="md:text-2xl pb-6 text-[18px] font-semibold">
                Product Details
              </h2>
            </div>
            <div className="md:flex no-wrap md:-mx-2 ">
              {/* Left Side */}
              <div className="w-full md:w-3/12 md:mx-2  bg-white   border-t-4 border-gray-300">
                {/* Friends card */}
                <div className="bg-white p-3 hover:shadow">
                  <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                    <span className="text-green-500">
                      <BsImage />
                    </span>
                    <span>Product Pic</span>
                  </div>
                  <div className="p-2 justify-center items-center flex">
                    <div className="flex flex-wrap">
                      <img
                        className="align-middle border-none rounded-full w-[100%]  object-cover"
                        src={box}
                        alt="profile"
                      />
                    </div>
                  </div>
                </div>
                {/* End of friends card */}

                <div className="my-4" />
              </div>
              {/* Right Side */}
              <div className="w-full md:w-9/12   h-auto">
                {/* Profile tab */}
                {/* About Section */}
                <div className="bg-white p-3 shadow-sm rounded-sm">
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                    <BsBoxSeam size={20} />
                    <span className="tracking-wide text-[20px]">
                      Product Details
                    </span>
                  </div>
                  <div className="text-gray-700 ">
                    <div className="p-2 text-sm">
                      <div className="grid grid-cols-2 m-2 border-b-[1px] ">
                        <div className="px-4 py-2 font-semibold text-[18px]">
                          Product
                        </div>
                        <div className="px-4 py-2 text-[16px]">
                          {product.product_name}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 m-2 border-b-[1px]">
                        <div className="px-4 py-2 font-semibold text-[18px]">
                          Product Type
                        </div>
                        <div className="px-4 py-2 text-[16px]">
                          {product.requested_delivery_type}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 m-2 border-b-[1px]">
                        <div className="px-4 py-2 font-semibold text-[18px]">
                          Price
                        </div>
                        <div className="px-4 py-2 text-[16px]">
                          {product.product_price}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 m-2 border-b-[1px]">
                        <div className="px-4 py-2 font-semibold text-[18px]">
                          Order By
                        </div>
                        <div className="px-4 py-2 text-[16px]">
                          {product.order_by}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 m-2 border-b-[1px]">
                        <div className="px-4 py-2 font-semibold text-[18px]">
                          Order ID
                        </div>
                        <div className="px-4 py-2 text-[16px]">
                          {product.order_id}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 m-2 border-b-[1px]">
                        <div className="px-4 py-2 font-semibold text-[18px]">
                          Order Quantity
                        </div>
                        <div className="px-4 py-2 text-[16px]">
                          {product.product_quantity}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 m-2 border-b-[1px]">
                        <div className="px-4 py-2 font-semibold text-[18px]">
                          Date
                        </div>
                        <div className="px-4 py-2 text-[16px]">
                          {product.date}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 m-2 border-b-[1px]">
                        <div className="px-4 py-2 font-semibold text-[18px]">
                          Customer_Email
                        </div>
                        <div className="px-4 py-2 text-[16px]">
                          {product.email}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 m-2 border-b-[1px]">
                        <div className="px-4 py-2 font-semibold text-[18px]">
                          Address
                        </div>
                        <div className="px-4 py-2 text-[16px]">
                          {product.delivery_address}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 m-2 border-b-[1px]">
                        <div className="px-4 py-2 font-semibold text-[18px]">
                          Payment_Status
                        </div>
                        {product.payment_Status == "success" ? (
                          <div className="px-4 py-2 text-[16px]">
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden=""
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                              />
                              <span className="relative">
                                {product.payment_Status}
                              </span>
                            </span>
                          </div>
                        ) : (
                          <div className="p-2 text-[16px]">
                            <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                              <span
                                aria-hidden=""
                                className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                              />
                              <span className="relative">
                                {product.payment_Status}
                              </span>
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="grid grid-cols-2 m-2 border-b-[1px]">
                        <div className="px-4 py-2 font-semibold text-[18px]">
                          Order_Status
                        </div>
                        {product.order_status == "delivered" ? (
                          <div className="px-4 py-2 text-[16px]">
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden=""
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                              />
                              <span className="relative">
                                {product.order_status}
                              </span>
                            </span>
                          </div>
                        ) : (
                          <div className="p-2 text-[16px]">
                            <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                              <span
                                aria-hidden=""
                                className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                              />
                              <span className="relative">
                                {product.order_status}
                              </span>
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-200 hover:shadow-xs p-3 my-4">
                    Edit Profile
                  </button> */}
                </div>
                {/* End of about section */}
                <div className="my-4" />
              </div>
            </div>
          </div>
        </div>
      </Base>
    </div>
  );
}

export default Product_details;
