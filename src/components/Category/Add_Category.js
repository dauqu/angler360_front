import React, { useState } from "react";
import Base from "../../components/Base/Base";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import { API } from "../../Constant";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Add_Category() {
  const [category_name, setCategory_name] = useState("");
  const [category_description, setCategory_description] = useState("");
  const [open, setOpen] = React.useState(false);
  const [geterror, setGeterror] = useState(false);

  const handleSubmit = () => {
    const resp = axios
      .post(`${API}/productcategories`, {
        category_name: category_name,
        category_description: category_description,
      })
      .then((res) => {
        setOpen(true);
        console.log(res);
        // alert("New Category Added Successfully");
        // window.location.href = "/addcategory";
      })
      .catch((err) => {
        console.log(err);
        setGeterror(true);
        // alert(err.response.data.message);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setGeterror(false);
  };
  // input field validation to check field is empty or not

  return (
    <div>
      <Base>
        <div className="py-2 px-4 w-[100%] mt-5">
          <div className="flex w-full">
            <h2 className="md:text-2xl text-[18px] font-semibold">
              Add New Category
            </h2>
          </div>
          <hr className="my-5 border-gray-400" />
          <div className="flex flex-col w-full justify-center items-center">
            <div className="flex flex-col justify-center items-center sm:w-[75%] w-[90%] sm:p-8 px-5 py-3 uploadarea bg-white">
              <div className="flex flex-row justify-between items-center w-full mt-3">
                <label htmlFor="list_name">Category Name</label>
                {/* input field validation to check field is empty or not */}

                <input
                  name={category_name}
                  onChange={(e) => setCategory_name(e.target.value)}
                  type="text"
                  placeholder="Category Name"
                  id="list_name"
                  className="style_input  text-base border-2 outline-none"
                  required
                />
              </div>
              <div className="flex flex-row justify-between items-center w-full mt-3">
                <label htmlFor="list_description">Category Description</label>
                <input
                  name={category_description}
                  onChange={(e) => setCategory_description(e.target.value)}
                  type="text"
                  placeholder="Category Description"
                  id="list_description"
                  className="style_input  text-base border-2 outline-none"
                  required
                />
              </div>

              <div className="mt-6 w-full">
                <button
                  onClick={() => handleSubmit()}
                  className="w-full flex justify-center 
                    bg-teal-600 text-white items-center py-2 px-4 rounded-md mt-5"
                >
                  {/* <AiOutlinePlus size={20} color={"white"} className="mx-3" /> */}
                  <span>Add Category</span>
                </button>
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
              Category Added Successfully!
            </Alert>
          </Snackbar>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={geterror}
            autoHideDuration={2000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleErrorClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              This Category is already exist!
            </Alert>
          </Snackbar>
        </div>
      </Base>
    </div>
  );
}

export default Add_Category;
