import React, { useState, useEffect } from "react";
import axios from "axios";
import Project from "./components/elements/Project";
import { useParams } from "react-router-dom";
import { useDataContext } from "./DataContext";

export default function Projects() {
  const { id } = useParams();

  const { data, loading, error } = useDataContext();

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <div className="flex flex-wrap">
      {!loading &&
        data.projects
          .filter((item) => !id || item.project_categorie_id == id) // Filter items based on the condition
          .map((item, index) => <Project key={index} projectData={item} />)}
    </div>
  );
}
