import React, { useState, useEffect } from "react";
import axios from "axios";
import Project from "./components/elements/Project";
import { useParams } from "react-router-dom";

export default function Projects() {
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    // Fetch data from the backend
    axios
      .get("http://localhost/api.php", {
        params: id
          ? { query: "WHERE project_categorie_id =" + id, table: "projects" }
          : { query: "", table: "projects" },
      })
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="flex flex-wrap">
      {data.length > 0 && (
        <ul>
          {data.map((item, index) => (
            <li key={index} className="text-primaryText">
              <Project data={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
