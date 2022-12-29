import { Snackbar } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { API } from "../../Constant";
import Base from "../Base/Base";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Add_user() {
  const [open, setOpen] = useState(false); // snackbar

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("username", username);
    formData.append("age", age);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("password", password);
    formData.append("picture", image);
    formData.append("role", role);

    setLoading(true);
    const resp = axios
      .post(`${API}/signup`, formData)
      .then((res) => {
        console.log(res);
        // alert("User Added Successfully");
        setOpen(true);
        // setLoading(false);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        alert("Invalid Credentials");
        // setLoading(false);
      });
  };

  //   snackbar function for close
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <div>
        <Base>
          <div className="py-2 px-4 w-[100%] mt-5">
            <div className="flex w-full">
              <h2 className="md:text-2xl text-[18px] font-semibold">
                Add New User
              </h2>
            </div>
            <hr className="my-2 border-gray-400" />

            <div className="flex flex-col w-full justify-center items-center">
              <div className="flex flex-col justify-center items-center sm:w-[100%] w-[100%] sm:p-6  px-5 py-3 uploadarea bg-white">
                <form
                  action="#"
                  className="w-[100%]"
                  encType="multipart/form-data"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <div className="flex flex-row justify-between items-center w-full mt-2">
                    <label htmlFor="list_name">Name</label>
                    <input
                      type="text"
                      name={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      id="list_name"
                      className="style_input  text-base border-2 outline-none"
                    />
                  </div>
                  <div className="flex flex-row justify-between items-center w-full mt-2">
                    <label htmlFor="list_name">Username</label>
                    <input
                      type="text"
                      name={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Username"
                      id="list_name"
                      className="style_input  text-base border-2 outline-none"
                    />
                  </div>
                  <div className="flex flex-row justify-between items-center w-full mt-2">
                    <label htmlFor="list_name">Email</label>
                    <input
                      type="text"
                      placeholder="Email"
                      name={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="list_name"
                      className="style_input  text-base border-2 outline-none"
                    />
                  </div>
                  <div className="flex flex-row justify-between items-center w-full mt-2">
                    <label htmlFor="list_name">Phone_Number</label>
                    <input
                      type="text"
                      name={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone_Number"
                      id="list_name"
                      className="style_input  text-base border-2 outline-none"
                    />
                  </div>
                  <div className="flex flex-row justify-between items-center w-full mt-2">
                    <label htmlFor="list_name">Password</label>
                    <input
                      type="text"
                      placeholder="Password"
                      id="list_name"
                      name={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="style_input  text-base border-2 outline-none"
                    />
                  </div>
                  <div className="flex flex-row justify-between items-center w-full mt-2">
                    <label htmlFor="list_name">Role</label>
                    <input
                      type="text"
                      placeholder="Role"
                      id="list_name"
                      name={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="style_input  text-base border-2 outline-none"
                    />
                  </div>
                  <div className="flex flex-row justify-between items-center w-full mt-2">
                    <label htmlFor="list_name">Age</label>
                    <input
                      type="text"
                      placeholder="Age"
                      id="list_name"
                      name={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="style_input  text-base border-2 outline-none"
                    />
                  </div>
                  <div className="flex flex-row justify-between items-center w-full mt-2">
                    <label htmlFor="list_name">Address</label>
                    <input
                      type="text"
                      placeholder="Address"
                      name={address}
                      onChange={(e) => setAddress(e.target.value)}
                      id="list_name"
                      className="style_input  text-base border-2 outline-none"
                    />
                  </div>

                  <div className="flex flex-row justify-between items-center w-full mt-2">
                    <label htmlFor="list_name">User Image</label>
                    <input
                      type="file"
                      name="picture"
                      onChange={(e) => setImage(e.target.files[0])}
                      placeholder="User Title"
                      id="list_name"
                      className="style_input  text-base border-2 outline-none"
                    />
                  </div>
                  <div className="w-full">
                    <button
                      type="submit"
                      onSubmit={(e) => handleSubmit(e)}
                      className="w-full flex justify-center 
                  bg-teal-600 text-white items-center py-2 px-4 rounded-md mt-5"
                    >
                      <AiOutlinePlus
                        size={20}
                        color={"white"}
                        className="mx-3"
                      />
                      <span>Add User</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              User added Successfully!
            </Alert>
          </Snackbar>
        </Base>
      </div>
    </div>
  );
}

export default Add_user;
