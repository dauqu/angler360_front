import React, { useEffect, useState } from "react";
import { FiDollarSign } from "react-icons/fi";
import { FaUsers, FaBoxes } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Base from "../../components/Base/Base";
import box from "../../assets/img/box.jpg";
import box2 from "../../assets/img/box2.png";
import box3 from "../../assets/img/box3.png";
import box4 from "../../assets/img/box5.png";
import axios from "axios";
import { API } from "../../Constant";

function ViewImages() {
  const [image, setImage] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/products/image`)
      .then((res) => {
        console.log(res.data);
        setImage(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Base>
        <div className="container mx-auto px-4  ">
          <div className="py-8">
            <div className="flex w-full">
              <h2 className="md:text-2xl text-[18px] font-semibold">Images</h2>
            </div>
            <hr className="my-5 border-gray-400" />
            <div className="md:p-6 p-2 grid grid-cols-2 md:grid-cols-4 gap-5 mt-6 sm:grid-cols-4 lg:grid-cols-8">
              {image.length > 0 &&
                image.map((item) => (
                  <div
                    key={item._id}
                    className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg"
                  >
                    <img src={item.product_image} />
                  </div>
                ))}
              {/* <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box2} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box3} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box3} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box2} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box3} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box2} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box3} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box3} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box3} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box3} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box3} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box3} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box3} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box3} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box3} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box3} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box3} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box3} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box3} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box} />
              </div>

              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box} />
              </div>
              <div className="p-4 transition-shadow bg-[#ffffff] border rounded-lg shadow-sm hover:shadow-lg">
                <img src={box2} />
              </div> */}
            </div>
          </div>
        </div>
      </Base>
    </div>
  );
}

export default ViewImages;
