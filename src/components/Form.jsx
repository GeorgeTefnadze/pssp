import React, { useEffect, useState } from "react";
import { useDataContext } from "../DataContext";
import axios from "axios";

export default function Form() {
  const [formData, setFormData] = useState({
    projectName: "",
    projectAuthor: "",
    projectCategory: "",
    projectFile: null, // Add file to state
  });

  const { data, loading, error } = useDataContext();

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  function handleFileChange(e) {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      projectFile: file, // Update the file in state
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const submissionData = new FormData();
    submissionData.append("projectName", formData.projectName);
    submissionData.append("projectAuthor", formData.projectAuthor);
    submissionData.append("projectCategory", formData.projectCategory);
    if (formData.projectFile) {
      submissionData.append("projectFile", formData.projectFile); // Add the file to FormData
    }

    axios
      .post("http://localhost/insert.php", submissionData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          alert("Data saved successfully!");
        } else {
          alert("Error saving data.");
        }
      })
      .catch((error) => console.error("Error saving data:", error));
  }

  return (
    <div>
      <form
        className="flex flex-col text-secondaryText"
        onSubmit={handleSubmit}
      >
        <label htmlFor="projectName">Project Name</label>
        <input
          onChange={(e) => {
            setFormData((prevData) => ({
              ...prevData,
              projectName: e.target.value,
            }));
          }}
          value={formData.projectName}
          type="text"
          id="projectName"
          name="projectName"
          required
        />
        <label htmlFor="projectAuthor">Project Author</label>
        <select
          name="projectAuthor"
          id="projectAuthor"
          required
          onChange={(e) => {
            setFormData((prevData) => ({
              ...prevData,
              projectAuthor: e.target.value,
            }));
          }}
        >
          <option value=""></option>
          {!loading &&
            data.author.map((item) => (
              <option key={item.author_id} value={item.author_id}>
                {item.author_name}
              </option>
            ))}
        </select>
        <label htmlFor="projectCategory">Project Category</label>
        <select
          name="projectCategory"
          id="projectCategory"
          required
          onChange={(e) => {
            setFormData((prevData) => ({
              ...prevData,
              projectCategory: e.target.value,
            }));
          }}
        >
          <option value=""></option>
          {!loading &&
            data.categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.categories_name}
              </option>
            ))}
        </select>
        <label htmlFor="projectFile">Project File (only .zip)</label>
        <input
          type="file"
          name="projectFile"
          id="projectFile"
          onChange={handleFileChange} // Handle file input change
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
