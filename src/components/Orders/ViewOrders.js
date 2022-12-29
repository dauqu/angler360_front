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
import { FaEdit } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
function ViewOrders() {
  const [allorders, setAllorders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [receive_data, setReceive_data] = useState([]);

  const [payment_Status, setpayment_Status] = useState("");
  const [order_status, setorder_status] = useState("");

  useEffect(() => {
    axios
      .get(`${API}/orders`)
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

  const handleEdit = (props) => {
    // console.log(props);
    setShowModal(true);
    // code to get the data of the order by order_id
    axios.get(`${API}/orders/${props}`).then((res) => {
      console.log(res.data);
      setReceive_data(res.data);
    });

    // code to update the order status and payment status by order_id
  };
  const handleUpdate = (myid) => {
    const data = {
      payment_Status: payment_Status,
      order_status: order_status,
    };
    axios
      .patch(`${API}/orders/update/status/${myid}`, data)
      .then((res) => {
        console.log(res.data);
        alert("Order Updated Successfully");
        setShowModal(false);
        // reload the page
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Base>
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="flex w-full">
              <h2 className="md:text-2xl text-[18px] font-semibold">Order's</h2>
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
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Edit
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
                          {item.payment_Status == "success" ? (
                            <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                              <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span
                                  aria-hidden=""
                                  className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                />
                                <span className="relative">
                                  {item.payment_Status}
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
                                  {item.payment_Status}
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
                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <IconButton
                              aria-label="edit"
                              onClick={() => handleEdit(item._id)}
                            >
                              <FaEdit size={20} color="#2681d1" />
                            </IconButton>
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
          {showModal ? (
            <>
              <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="md-p-0 p-4 relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg  shadow-lg relative flex flex-col md:w-[600px] w-auto bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start  justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Edit Status ( {receive_data.product_name} )
                      </h3>
                      <button
                        className="p-1 ml-auto hover:text-red-600 bg-transparent border-0 text-black opacity-2 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <RxCross2 />
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <div className="  text-gray-600 text-lg leading-relaxed">
                        <p className="p-6 mb-4 text-black text-center">
                          You can Edit the status of your order{" "}
                        </p>
                        {/* <div className="flex  items-center justify-between">
                          <label className="leading-loose">Status</label>
                          <div>
                            <p>{receive_data.payment_Status}</p>
                          </div>
                        </div> */}
                        <div>
                          <div className="flex  items-center justify-between">
                            <label className="leading-loose">
                              Order Status
                            </label>
                            <div>
                              <select
                                name={payment_Status}
                                onChange={(e) =>
                                  setpayment_Status(e.target.value)
                                }
                                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 "
                              >
                                <option>Select Option--</option>
                                <option value="pending">Pending</option>
                                <option value="cancelled">Cancelled</option>
                                <option value="success">Success</option>
                              </select>
                            </div>
                          </div>
                          <div className="flex mt-8 items-center justify-between">
                            <label className="leading-loose">
                              Payment Status
                            </label>
                            <div>
                              <select
                                name={order_status}
                                onChange={(e) =>
                                  setorder_status(e.target.value)
                                }
                                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 "
                              >
                                <option>Select Option--</option>
                                <option value="pending">Pending</option>
                                <option value="cancelled">Cancelled</option>
                                <option value="delivered">Delivered</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => handleUpdate(receive_data._id)}
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </Base>
    </div>
  );
}

export default ViewOrders;
