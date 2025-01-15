import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Project({ data }) {
  const [axiosData, setAxiosData] = useState([]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="lg:w-1/2 w-full">
      <Link className="imgWrap">
        <img
          src={
            "http://localhost/projects/assets/project_images/" +
            data.project_img_src
          }
          alt=""
        />
      </Link>
      <div className="desc h-24 border-b border-r px-6 border-borderColor flex justify-between items-center">
        <div className="info">
          <p className="title text-primaryText">{data.project_name}</p>
          <p className="author text-secondaryText">{data.project_author_id}</p>
        </div>
        <div className="view">
          <Link className="text-primaryText">View Project</Link>
        </div>
      </div>
    </div>
  );
}
