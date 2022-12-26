import React, { useEffect, useState } from "react";
import Base from "../../components/Base/Base";
import { AiOutlinePlus } from "react-icons/ai";
import { TiEye } from "react-icons/ti";
import { FiEdit } from "react-icons/fi";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import box from "../../assets/img/box.jpg";
import box2 from "../../assets/img/box2.png";
import axios from "axios";
import { API } from "../../Constant";
import { Link } from "react-router-dom";

function Cancelled_order() {
  const [allorders, setAllorders] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/orders/order_status/cancelled`)
      .then((res) => {
        console.log(res.data);
        setAllorders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // available soon
  const handleClick = () => {
    alert("This option will available soon");
  };
  return (
    <div>
      <Base>
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="flex w-full">
              <h2 className="md:text-2xl text-[18px] font-semibold">
                Cancelled Order's
              </h2>
            </div>
            <hr className="my-5 border-gray-400" />
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Image
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Product
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Order_By
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Customer_Email
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Payment_Status
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Delivery_Address
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        View
                      </th>
                      {/* <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Delete
                      </th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {allorders.map((item) => {
                      return (
                        <tr key={item._id}>
                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <div className="flex">
                              <div className="flex-shrink-0 w-[70px] h-[70px]">
                                <img
                                  className="w-full h-full rounded"
                                  src={box}
                                  alt=""
                                />
                              </div>
                            </div>
                          </td>
                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 text-[15px] whitespace-no-wrap">
                              {item.product_name}
                            </p>
                          </td>
                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 text-[15px] whitespace-no-wrap">
                              {item.order_by}
                            </p>
                          </td>
                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 text-[15px] whitespace-no-wrap">
                              {item.email}
                            </p>
                          </td>
                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 text-[15px] whitespace-no-wrap">
                              {item.requested_delivery_type}
                            </p>
                          </td>
                          {item.order_status == "delivered" ? (
                            <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                              <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span
                                  aria-hidden=""
                                  className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                />
                                <span className="relative">
                                  {item.order_status}
                                </span>
                              </span>
                            </td>
                          ) : (
                            <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                              <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                <span
                                  aria-hidden=""
                                  className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                                />
                                <span className="relative">
                                  {item.order_status}
                                </span>
                              </span>
                            </td>
                          )}

                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 text-[15px] whitespace-no-wrap">
                              {item.product_price}
                            </p>
                          </td>
                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 text-[15px] whitespace-no-wrap">
                              {item.date}
                            </p>
                          </td>
                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 text-[15px] whitespace-no-wrap">
                              {item.delivery_address}
                            </p>
                          </td>
                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <Link to={`/product_detail/${item._id}`}>
                              <IconButton aria-label="edit">
                                <TiEye size={20} color="#2681d1" />
                              </IconButton>
                            </Link>
                          </td>
                          {/* <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <IconButton
                              aria-label="edit"
                              onClick={() => handleClick()}
                            >
                              <DeleteIcon
                                sx={{
                                  color: "#ff4242",
                                }}
                              />
                            </IconButton>
                          </td> */}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Base>
    </div>
  );
}

export default Cancelled_order;
