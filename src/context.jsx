import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ value1: "", value2: "" });

  useEffect(() => {
    // Fetch data from the backend
    axios
      .get("http://localhost/api.php?query=author")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send data to the backend
    axios
      .post("http://localhost/api.php", formData)
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          alert("Data saved successfully!");
        }
      })
      .catch((error) => console.error("Error saving data:", error));
  };

  return (
    <div>
      <h1>React and PHPMyAdmin Example</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData.value1}
          onChange={(e) => setFormData({ ...formData, value1: e.target.value })}
          placeholder="Value 1"
        />
        <input
          type="text"
          value={formData.value2}
          onChange={(e) => setFormData({ ...formData, value2: e.target.value })}
          placeholder="Value 2"
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
