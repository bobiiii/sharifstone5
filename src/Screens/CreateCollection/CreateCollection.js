import React, {useState} from 'react'
import DropImage from '../../components/dropzone'
import './createCollection.css'
import axios from 'axios';

const CreateCollection = () => {
  const [formData, setFormData] = useState({})

  const handleCreateCollection = async () => {
    const newObj = {
      ...formData,
      collection_url: formData.collection_name.replace(' ', '-')
    }
    await axios.post('https://sharifstone-server.vercel.app/api/collection', newObj)
    .then((response) => {
      alert('Collection Created')
      setFormData({})
    })
    .catch(err => console.log('ERROR .. ',err.response.data.message))
  }
  return (
    <div className="login-container">
      <div className="login-innercontainer">
        <div className="login-header">Create Collection</div>
        <input
          className="login-input"
          type="text"
          onChange={(e) => setFormData({...formData, color_name: e.target.value})}
          value={formData.color_name}
          placeholder="Color Name"
        />
        <input
          className="login-input"
          type="text"
          onChange={(e) => setFormData({...formData, collection_name: e.target.value})}
          value={formData.collection_name}
          placeholder="Collection Name"
        />
        <input
          className="login-input"
          type="text"
          onChange={(e) => setFormData({...formData, color_image: e.target.value})}
          value={formData.color_image}
          placeholder="Color Image URL"
        />
        <input
          className="login-input"
          type="text"
          onChange={(e) => setFormData({...formData, display_image: e.target.value})}
          value={formData.display_image}
          placeholder="Display Image URL"
        />
        <input
          className="login-input"
          type="text"
          onChange={(e) => setFormData({...formData, color_url: e.target.value})}
          value={formData.color_url}
          placeholder="Dynamic URL for this Color (It should be unique to other colors)"
        />
        <input
          className="login-input"
          type="text"
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          value={formData.description}
          placeholder="Color Description"
        />
        <input
          className="login-input"
          type="text"
          onChange={(e) => setFormData({...formData, grip: e.target.value})}
          value={formData.grip}
          placeholder="Color Grip"
        />
        <input
          className="login-input"
          type="text"
          onChange={(e) => setFormData({...formData, matte: e.target.value})}
          value={formData.matte}
          placeholder="Color Matte"
        />
        <input
          className="login-input"
          type="text"
          onChange={(e) => setFormData({...formData, thicknesses: e.target.value})}
          value={formData.thicknesses}
          placeholder="Color Thicknesses"
        />
        {/* <DropImage states={color_image} text={"Select Color Image"}/>
        <DropImage states={display_image} customStyle={{backgroundColor: '#a4a7ff'}} text={"Select Present Image"}/> */}
        <button onClick={handleCreateCollection} className="login-btn">Create Collection</button>
      </div>
    </div>
  )
}

export default CreateCollection
