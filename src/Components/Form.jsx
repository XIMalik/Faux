import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Form() {
  const [formData, setFormData] = useState({
    full_name: '',
    address: '',
    state: '',
    city: '',
    gender: '',
    age: '',
    marital_status: '',
    phone_number: '',
    email: '',
    monthly_income: '',
    i_have_a_car: '',
    occupation: '',
    rent_or_own: '',
    application_purpose: '',
    valid_id: null, // for file uploads
    additional_message: '',
  });

  const nav = useNavigate()

  const [status, setStatus] = useState({ submitting: false, success: false, error: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(value)
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, valid_id: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: '' });

    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await axios.post('https://faux-test.onrender.com/submit', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setStatus({ submitting: false, success: true, error: '' });
      console.log(response.data);
    } catch (error) {
      setStatus({ submitting: false, success: false, error: error.response ? error.response.data : 'An error occurred' });
    }
  };

  if (status.success) {
    return (
      <div className="section-paragraph-light text-center">

        <h1>You have successfully registered for the grant!</h1>
        <p>Please be on standby and be expectant of an email in the coming days. Instructions will be relayed concerning steps of continuation.</p>
        <button className='underline mt-10' onClick={() => nav('/')}>Go home</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 shadow-xl">
      <label htmlFor="full_name">Full Name</label>
      <input
        id="full_name"
        type="text"
        name="full_name"
        className="form-input"
        placeholder="John Doe"
        onChange={handleChange}
      />

      <div className="flex gap-2">
        <div className="flex w-[50%] flex-col items-start">
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" className="form-input" onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="female">Other</option>
          </select>
        </div>

        <div className="flex w-[50%] flex-col items-start">
          <label htmlFor="dob">Date of birth</label>
          <input
            id="dob"
            type="date"
            name="dob"
            className="form-input"
            onChange={handleChange}
            max={new Date().toISOString().split('T')[0]} // Optional: prevents future dates
          />
        </div>
      </div>

      <label htmlFor="phone_number">Phone Number</label>
      <input
        id="phone_number"
        type="tel"
        name="phone_number"
        placeholder="+1-234-567-8901"
        className="form-input"
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        className="form-input"
        placeholder="grace.jennings@gmail.com"
        onChange={handleChange}
      />

      <label htmlFor="address">Home address</label>
      <input
        id="address"
        type="text"
        name="address"
        className="form-input"
        placeholder="15907 Wilmington Park Lane"
        onChange={handleChange}
      />

      <div className="flex gap-2">
        <div className="flex w-[50%] flex-col items-start">
          <label htmlFor="city">City</label>
          <select id="city" name="city" className="form-input" onChange={handleChange}>
            <option value="">Select City</option>
            <option value="Seattle">Seattle</option>
            <option value="Spokane">Spokane</option>
            <option value="Tacoma">Tacoma</option>
            <option value="Vancouver">Vancouver</option>
            <option value="Bellevue">Bellevue</option>
            <option value="Kent">Kent</option>
            <option value="Everett">Everett</option>
            <option value="Renton">Renton</option>
            <option value="Yakima">Yakima</option>
            <option value="Federal Way">Federal Way</option>
            <option value="Spokane Valley">Spokane Valley</option>
            {/* Add more cities as needed */}
          </select>
        </div>

        <div className="flex w-[50%] flex-col items-start">
          <label htmlFor="state">State</label>
          <input
            id="state"
            type="text"
            name="state"
            className="form-input"
            placeholder="Washington"
            readOnly
          />
        </div>
      </div>

      <label htmlFor="marital_status">Marital Status</label>
      <select id="city" name="city" className="form-input" onChange={handleChange}>
        <option value="">Select</option>
        <option value="Seattle">Single</option>
        <option value="Spokane">Married</option>
        <option value="Tacoma">Divorced</option>
        <option value="Vancouver">Prefer not to say</option>
        {/* Add more cities as needed */}
      </select>

      <div className="flex gap-2">
        <div className="flex w-[50%] flex-col items-start">
          <label htmlFor="monthly_income">Monthly Income</label>
          <select id="monthly_income" name="monthly_income" className="form-input" onChange={handleChange}>
            <option value="">Select Income Range</option>
            <option value="5000-10000">$5000.00 - $10000.00</option>
            <option value="10000-50000">$10000.00 - $50000.00</option>
            <option value="50000-100000">$50000.00 - $100000.00</option>
            <option value="100000-500000">$100000.00 - $500000.00</option>
          </select>
        </div>

        <div className="flex w-[50%] flex-col items-start">
          <label htmlFor="i_have_a_car">I own a car (T/F)</label>
          <input
            id="i_have_a_car"
            type="text"
            name="i_have_a_car"
            placeholder="True"
            className="form-input"
            onChange={handleChange}
          />
        </div>
      </div>

      <label htmlFor="occupation">Occupation</label>
      <input
        id="occupation"
        type="text"
        name="occupation"
        className="form-input"
        placeholder="Software Developer"
        onChange={handleChange}
      />

      <label htmlFor="rent_or_own">Do you own a house or rent?</label>
      <input
        id="rent_or_own"
        type="text"
        name="rent_or_own"
        className="form-input"
        placeholder="Own"
        onChange={handleChange}
      />

      <label htmlFor="application_purpose">Application purpose</label>
      <input
        id="application_purpose"
        type="text"
        name="application_purpose"
        className="form-input"
        onChange={handleChange}
      />

      <label htmlFor="valid_id">Valid ID (Drivers License, ID Card)</label>
      <input
        id="valid_id"
        type="file"
        name="valid_id"
        className="form-input rounded-full"
        onChange={handleFileChange}
      />

      <button type="submit" className='bg-[#F58721] hover:bg-[#F58728]' disabled={status.submitting}>
        Submit
      </button>
    </form>

  );
}

export default Form;
