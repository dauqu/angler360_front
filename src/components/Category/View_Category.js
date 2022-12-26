import React, { useEffect, useState } from "react";
import Base from "../../components/Base/Base";
import { AiOutlinePlus } from "react-icons/ai";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { API } from "../../Constant";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function View_Category() {
  const [category, setCategory] = useState([]);
  const [error_snackbar, setError_snackbar] = useState(false);

  const getCategories = () => {
    const resp = axios

      .get(`${API}/productcategories`)
      .then((res) => {
        console.log(res);
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getCategories();
  }, []);

  const deleteCategory = (id) => {
    const resp = axios
      .delete(`${API}/productcategories/${id}`)
      .then((res) => {
        setError_snackbar(true);
        console.log(res);
        setTimeout(
          (res) => {
            window.location.href = "/viewcategory";
          },
          [1000]
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
                View Category
              </h2>
            </div>
            <hr className="my-5 border-gray-400" />

            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-3 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Category Name
                      </th>
                      <th className="px-3 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Category Description
                      </th>
                      <th className="px-3 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.map((item, key) => {
                      return (
                        <tr key={item._id}>
                          <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                            <div className="flex">
                              <div className="ml-3">
                                <p className="text-gray-900 text-[16px]    whitespace-no-wrap">
                                  {item.category_name}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 text-[16px]  whitespace-no-wrap">
                              {item.category_description}
                            </p>
                          </td>
                          <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                            <IconButton
                              aria-label="delete"
                              onClick={() => deleteCategory(item._id)}
                            >
                              <DeleteIcon sx={{ color: "red" }} />
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
              Category Deleted Successfully!
            </Alert>
          </Snackbar>
        </div>
      </Base>
    </div>
  );
}

export default View_Category;
