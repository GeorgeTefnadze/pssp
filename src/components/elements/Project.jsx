import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDataContext } from "../../DataContext";

export default function Project({ projectData }) {
  const [axiosData, setAxiosData] = useState([]);
  const { data, loading, error } = useDataContext();
  const To = "/iframe/" + projectData.project_src;

  useEffect(() => {
    console.log(projectData);
  }, [projectData]);

  return (
    <div className="lg:w-1/2 w-full">
      <Link to={To} className="imgWrap">
        <img
          src={
            "http://localhost/projects/assets/project_images/" +
            projectData.project_img_src
          }
          alt=""
          className="aspect-video object-fill"
        />
      </Link>
      <div className="desc h-24 border-b border-r px-6 border-borderColor flex justify-between items-center">
        <div className="info">
          <p className="title text-primaryText">{projectData.project_name}</p>
          <p className="author text-secondaryText">
            {!loading &&
              data.author.find(
                (item) => item.author_id == projectData.project_author_id
              ).author_name}
          </p>
        </div>
        <div className="view">
          <Link to={To} className="text-primaryText">
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
}
