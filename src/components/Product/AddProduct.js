import React, { useEffect, useState } from "react";
import Base from "../../components/Base/Base";
import axios from "axios";
import { API } from "../../Constant";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { AiOutlinePlus } from "react-icons/ai";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function AddProduct() {
  // code to get category
  const [category, setCategory] = useState([]);
  const [product_name, setProduct_name] = useState("");
  const [product_title, setProduct_title] = useState("");
  const [product_description, setProduct_description] = useState("");
  const [product_type, setProduct_type] = useState("");
  const [product_price, setProduct_price] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
  const [success_snack, setSuccess_snack] = useState(false);

  const getCategories = () => {
    const resp = axios
      .get(`${API}/productcategories`)
      .then((res) => {
        // console.log(res);
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getCategories();
  }, []);

  // // code to add product

  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("product_name", product_name);
    formdata.append("banner", image);
    formdata.append("product_title", product_title);
    formdata.append("product_description", product_description);
    formdata.append("product_type", product_type);
    formdata.append("product_price", product_price);
    formdata.append("status", status);

    console.log(product_name, image);
    axios
      .post(`${API}/products`, formdata)
      .then((res) => {
        console.log(res);
        setSuccess_snack(true);
        setTimeout(
          (res) => {
            window.location.href = "/addproduct";
          },
          [2000]
        );
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  // code for success snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccess_snack(false);
  };

  return (
    <div>
      <Base>
        <div className="py-2 px-4 w-[100%] mt-5">
          <div className="flex w-full">
            <h2 className="md:text-2xl text-[18px] font-semibold">
              Add New Product
            </h2>
          </div>
          <hr className="my-2 border-gray-400" />

          <div className="flex flex-col w-full justify-center items-center">
            <div className="flex flex-col justify-center items-center sm:w-[100%] w-[100%] sm:p-6  px-5 py-3 uploadarea bg-white">
              <form
                action="/"
                className="w-[100%]"
                encType="multipart/form-data"
                onSubmit={(e) => handleSubmit(e)}
              >
                <div className="flex flex-row justify-between items-center w-full mt-2">
                  <label htmlFor="list_name">Product Name</label>
                  <input
                    name={product_name}
                    onChange={(e) => setProduct_name(e.target.value)}
                    type="text"
                    placeholder="Product Name"
                    id="list_name"
                    className="style_input  text-base border-2 outline-none"
                  />
                </div>
                <div className="flex flex-row justify-between items-center w-full mt-2">
                  <label htmlFor="list_name">Product Title</label>
                  <input
                    name={product_title}
                    onChange={(e) => setProduct_title(e.target.value)}
                    type="text"
                    placeholder="Product Title"
                    id="list_name"
                    className="style_input  text-base border-2 outline-none"
                  />
                </div>
                <div className="flex flex-row justify-between items-center w-full mt-2">
                  <label htmlFor="list_name">Product Description</label>
                  <textarea
                    name={product_description}
                    onChange={(e) => setProduct_description(e.target.value)}
                    type="text"
                    placeholder="Product Description"
                    id="list_name"
                    className="style_input  text-base border-2 outline-none"
                  />
                </div>

                <div className="flex flex-row justify-between items-center w-full mt-3">
                  <label htmlFor="anc_status">Product Type</label>
                  <select
                    name={product_type}
                    id="anc_status"
                    defaultChecked={product_type}
                    defaultValue={product_type}
                    onChange={(e) => setProduct_type(e.target.value)}
                    className="style_input text-base border-2 outline-none"
                  >
                    {category.map((item, key) => {
                      return (
                        <>
                          <option
                            value={item.category_name[0].value}
                            defaultValue={item.category_name[0].value}
                            defaultChecked={item.category_name[0].value}
                          >
                            {item.category_name}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </div>
                <div className="flex flex-row justify-between items-center w-full mt-2">
                  <label htmlFor="list_name">Product Price</label>
                  <input
                    name={product_price}
                    onChange={(e) => setProduct_price(e.target.value)}
                    type="number"
                    placeholder="Product Price"
                    id="list_name"
                    className="style_input  text-base border-2 outline-none"
                  />
                </div>

                <div className="flex flex-row justify-between items-center w-full mt-3">
                  <label htmlFor="anc_status">Status</label>
                  <select
                    name={status}
                    onChange={(e) =>
                      setStatus(e.target.selectedOptions[0].value)
                    }
                    id="anc_status"
                    className="style_input text-base border-2 outline-none"
                  >
                    <option selected>Select Option --</option>
                    <option value="active">Active</option>
                    <option value="Inactive">InActive</option>
                  </select>
                </div>
                <div className="flex flex-row justify-between items-center w-full mt-2">
                  <label htmlFor="list_name">Product Image</label>
                  <input
                    type="file"
                    name="banner"
                    placeholder="Product Title"
                    id="list_name"
                    onChange={(e) => setImage(e.target.files[0])}
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
                    <AiOutlinePlus size={20} color={"white"} className="mx-3" />
                    <span>Add Product</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={success_snack}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Product added Successfully!
          </Alert>
        </Snackbar>
      </Base>
    </div>
  );
}

export default AddProduct;
