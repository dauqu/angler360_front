import React, { useEffect, useState } from "react";
import Base from "../../components/Base/Base";
import { AiOutlinePlus } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import box from "../../assets/img/box.jpg";
import box2 from "../../assets/img/box2.png";
import { API } from "../../Constant";
import axios from "axios";
function ViewUsers() {
  const [users, setUsers] = useState([]);

  const getAllUsers = () => {
    const resp = axios
      .get(`${API}/getuser`)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <Base>
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="flex w-full">
              <h2 className="md:text-2xl text-[18px] font-semibold">User's</h2>
            </div>
            <hr className="my-5 border-gray-400" />
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Username
                      </th>
                      <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Phone_NO
                      </th>
                      <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Age
                      </th>
                      <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Address
                      </th>
                      <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => {
                      return (
                        <tr key={user._id}>
                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <div className="flex">
                              <div className="flex-shrink-0 w-10 h-10">
                                <img
                                  className="w-full h-full rounded-full"
                                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                  alt=""
                                />
                              </div>
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {user.name}
                                </p>
                                <p className="text-gray-600 whitespace-no-wrap">
                                  {user.email}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {user.username}
                            </p>
                          </td>
                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {user.phone}
                            </p>
                          </td>
                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {user.age}
                            </p>
                          </td>
                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {user.address}
                            </p>
                          </td>
                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {user.role}
                            </p>
                          </td>
                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <IconButton aria-label="delete">
                              <DeleteIcon
                                sx={{
                                  color: "#ff4242",
                                }}
                              />
                            </IconButton>
                          </td>
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

export default ViewUsers;
