import React, { useState } from "react";
import DropImage from "../../components/dropzone";
import { IoIosArrowDown } from "react-icons/io";
import './createVisualizer.css';
import axios from 'axios';

const CreateVisualizer = () => {
  const [formData, setFormData] = useState({color_name: ""});
  console.log(formData);
  const handleCreateVisualizer = async () => {
    const newObj = {
      ...formData,
      ambient_url: formData?.ambient.replaceAll(' ', '-')
    }
    console.log(newObj);
    await axios.post('https://sharifstone-server.vercel.app/api/visualizer', newObj)
    .then((response) => {
      alert('Visualizer Created')
      setFormData({
        color_name: "",
        room: "",
        ambient: "",
        ambient_one: "",
        color_image: "",
        ambient_url: "",
        ambient_image_url: "",
    })
    })
    .catch(err => console.log('ERROR .. ',err?.response?.data?.message))
  }
  return (
    <div className="login-container">
      <div className="login-innercontainer">
        <div className="login-header">Create Visualizer</div>
        <input
          className="login-input"
          type="text"
          onChange={(e) => setFormData({ ...formData, color_name: e.target.value })}
          value={formData?.color_name}
          placeholder="Color Name"
        />
        <div className="select-container">
          <select className="form-select" value={formData?.room} onChange={(e) => setFormData({ ...formData, room: e.target.value })}>
            <option value="">Select Room</option>
            <option value="Kitchen">
              Kitchen
            </option>
            <option value="Bathroom">
              Bathroom
            </option>
          </select>
          <IoIosArrowDown className="select-form-icon" />
        </div>
        <div className="select-container">
          <select className="form-select" value={formData?.ambient} onChange={(e) => setFormData({ ...formData, ambient: e.target.value })}>
            <option>Select Ambient</option>
            <option value="Stylish Kitchen">
              Stylish Kitchen
            </option>
            <option value="Modern Kitchen">
              Modern Kitchen
            </option>
            <option value="Stylish Bathroom Vanity">
              Stylish Bathroom Vanity
            </option>
            <option value="Modern Bathroom Vanity">
              Modern Bathroom Vanity
            </option>
          </select>
          <IoIosArrowDown className="select-form-icon" />
        </div>
        <input
          className="login-input"
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, color_image: e.target.value })
          }
          value={formData.color_image}
          placeholder="Color Image URL"
        />
        <input
          className="login-input"
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, ambient_image_url: e.target.value })
          }
          value={formData?.ambient_image_url}
          placeholder="Ambient Image URL"
        />
        <button onClick={handleCreateVisualizer} className="login-btn">
          Create Visualizer
        </button>
      </div>
    </div>
  );
};

export default CreateVisualizer;
