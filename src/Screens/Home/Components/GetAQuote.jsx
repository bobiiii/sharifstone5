import { useState } from 'react';
import axios from 'axios';
import './GetAQuote.css';
import { ImCross } from 'react-icons/im';

import { FaAngleDown } from 'react-icons/fa6';
import Heading from '../../resuable/Heading';
import Button from '../../resuable/Button';

function GetAQuote({ data }) {
  const { openQuote, setOpenQuote } = data;
  const [message, setMessage] = useState('');
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    inquiryType: '',
    message: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const formDataToSend = new FormData();
    formDataToSend.append('firstname', formData.firstName);
    formDataToSend.append('lastname', formData.lastName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('mobile', formData.phoneNumber);
    formDataToSend.append('options', formData.inquiryType);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('image', formData.image);

    try {
      const response = await axios.post(
        'https://sharifstone-backend.vercel.app/api/query/add-query',
        formDataToSend,
        {}
      );
      if (response.status === 200) {
        setMessage(response.data.message);
        setLoader(false);
      }
    } catch (error) {
      setMessage(error.response.data.message);
      setLoader(false);
    }
  };

  return (
    <>
      <div className="fixed h-dvh z-50 flex justify-center items-center w-screen bg-black bg-opacity-55">
        <div className="flex h-max py-4 w-11/12  rounded-3xl flex-col justify-center items-center bg-[#c9c8c8]">
          <button
            onClick={() => setOpenQuote(false)}
            className="text-xl place-self-end w-full flex justify-end ms-4 -mb-2"
          >
            <div className="bg-white rounded-full p-2 lg:p-4 lg:mr-3 z-50">
              <ImCross className="text-black" size={14} />
            </div>
          </button>

          <div className="mb-4">
            <Heading>Get A Quote</Heading>
          </div>
          <div className="w-full px-4">
            <form onSubmit={handleSubmit}>
              <div className="w-full flex justify-between sm:flex-row flex-col gap-4">
                <input
                  className="w-full bg-white py-4 px-4 rounded-xl placeholder-black outline-none xl:text-base text-sm font-light font-albert input-box"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                <input
                  className="w-full bg-white py-4 px-4 rounded-xl placeholder-black outline-none xl:text-base text-sm font-light font-albert input-box"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full flex justify-between sm:flex-row flex-col gap-4 mt-4">
                <input
                  className="w-full bg-white py-4 px-4 input-box rounded-xl placeholder-black outline-none xl:text-base text-sm font-light font-albert"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <input
                  className="w-full bg-white py-4 px-4 rounded-xl placeholder-black outline-none xl:text-base text-sm font-light font-albert input-box"
                  type="number"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full relative mt-4">
                <select
                  className="w-full bg-white py-4 pl-4 pr-10 rounded-xl placeholder-black outline-none xl:text-base text-sm font-light font-albert appearance-none input-box"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                >
                  <option value="CHECK MATCHED STONES">
                    CHECK MATCHED STONES
                  </option>
                  <option value="CHECK STONE AVAILABILITY">
                    CHECK STONE AVAILABILITY
                  </option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none input-box">
                  <FaAngleDown />
                </div>
              </div>

              <div className="w-full mt-4">
                <textarea
                  className="w-full bg-white py-4 px-4 rounded-xl placeholder-black outline-none xl:text-base text-sm font-light font-albert"
                  rows="4"
                  style={{ maxHeight: '100px' }}
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div>
                <div className="w-full text-center bg-white my-2 py-3 px-4 rounded-xl placeholder-black outline-none xl:text-base text-sm font-light font-albert input-box">
                  <label className="w-full">
                    CHOOSE IMAGE
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>

                <div className="w-full flex-col gap-2 flex justify-center items-center mt-4 input-box3">
                  <p>{message}</p>
                  <Button className={'px-10 py-3 lg:px-32'} type="submit">
                    {loader ? 'Loading...' : 'Submit'}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetAQuote;
