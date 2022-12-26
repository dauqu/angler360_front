import React, { useEffect, useState } from "react";
import Base from "../../components/Base/Base";
import { AiOutlinePlus } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import box from "../../assets/img/box.jpg";
import box2 from "../../assets/img/box2.png";
import axios from "axios";
import { API } from "../../Constant";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Link } from "react-router-dom";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function ViewProduct() {
  const [product, setProduct] = useState([]);
  const [error_snackbar, setError_snackbar] = useState(false);

  const getAllProduct = () => {
    axios
      .get(`${API}/products`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  // available soon
  const handleClick = () => {
    alert("This option will available soon");
  };

  // code to delete product
  const handleDelete = (id) => {
    const resp = axios

      .delete(`${API}/products/${id}`)
      .then((res) => {
        console.log(res);
        setError_snackbar(true);
        // alert("Product Deleted Successfully");
        setTimeout(
          (res) => {
            window.location.href = "/viewproduct";
          },
          [1500]
        );
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError_snackbar(false);
  };
  return (
    <div>
      <Base>
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="flex w-full">
              <h2 className="md:text-2xl text-[18px] font-semibold">
                View Product
              </h2>
            </div>
            <hr className="my-5 border-gray-400" />
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Image
                      </th>
                      <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Edit
                      </th>
                      <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.map((item) => {
                      return (
                        <tr key={item._id}>
                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <div className="flex">
                              <div className="flex-shrink-0 w-[70px] h-[70px]">
                                <img
                                  className="w-full h-full rounded"
                                  src={item.product_image}
                                  alt=""
                                />
                              </div>
                            </div>
                          </td>
                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 text-[16px]   whitespace-no-wrap">
                              {item.product_name}
                            </p>
                          </td>
                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 text-[16px] whitespace-no-wrap">
                              {item.product_title}
                            </p>
                          </td>
                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 text-[16px] whitespace-no-wrap">
                              {item.product_type}
                            </p>
                          </td>
                          {item.status == "active" ? (
                            <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                              <span className="relative inline-block px-3 py-1 font-semibold text-green-700 leading-tight">
                                <span
                                  aria-hidden=""
                                  className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                />
                                <span className="relative">{item.status}</span>
                              </span>
                            </td>
                          ) : (
                            <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                              <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                <span
                                  aria-hidden=""
                                  className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                                />
                                <span className="relative">{item.status}</span>
                              </span>
                            </td>
                          )}

                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 text-[16px] whitespace-no-wrap">
                              {item.product_price}
                            </p>
                          </td>
                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <Link to={`/editproduct/${item.slug}`}>
                              <IconButton aria-label="edit">
                                <FiEdit size={20} color="#2681d1" />
                              </IconButton>
                            </Link>
                          </td>
                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <IconButton
                              aria-label="delete"
                              onClick={() => handleDelete(item._id)}
                            >
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
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={error_snackbar}
            autoHideDuration={2000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Product Deleted Successfully!
            </Alert>
          </Snackbar>
        </div>
      </Base>
    </div>
  );
}

export default ViewProduct;
