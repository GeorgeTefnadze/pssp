import React, { useState, useEffect } from "react";
import axios from "axios";
import querys from "./querys.json";
import { useParams } from "react-router-dom";

export default function Projects() {
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    console.log(querys.projects + `${id}`);
    // Fetch data from the backend
    axios
      .get(id ? querys.projectsWithID + `'${id}'` : querys.projects)
      .then((response) => setData((prevData) => [...prevData, response.data]))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {data.length > 0 && (
        <ul>
          {data.map((item, index) => (
            <li key={index} className="text-primaryText">
              {JSON.stringify(item)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
