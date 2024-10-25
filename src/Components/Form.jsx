import React, { useState } from 'react';
import axios from 'axios';

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

  const [status, setStatus] = useState({ submitting: false, success: false, error: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
    return <p>Thanks for joining!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
      <label htmlFor="full_name">Full Name</label>
      <input id="full_name" type="text" name="full_name" className="form-input" onChange={handleChange} />

      <label htmlFor="address">Home address</label>
      <input id="address" type="text" name="address" className="form-input" onChange={handleChange} />

      <div className="flex gap-2">

        <div className="flex w-[50%] flex-col items-start">


          <label htmlFor="state">State</label>
          <input id="state" type="text" name="state" className="form-input" onChange={handleChange} />
        </div>

        <div className="flex w-[50%] flex-col items-start">


          <label htmlFor="city">City</label>
          <input id="city" type="text" name="city" className="form-input" onChange={handleChange} />

        </div>
      </div>


      <div className="flex gap-2">

        <div className="flex w-[50%] flex-col items-start">


          <label htmlFor="gender">Gender</label>
      <input id="gender" type="text" name="gender" className="form-input" onChange={handleChange} />

        </div>

        <div className="flex w-[50%] flex-col items-start">


        <label htmlFor="age">Age</label>
        <input id="age" type="number" name="age" className="form-input" onChange={handleChange} />

        </div>
      </div>

      <label htmlFor="marital_status">Marital Status</label>
      <input id="marital_status" type="text" name="marital_status" className="form-input" onChange={handleChange} />

      <label htmlFor="phone_number">Phone Number</label>
      <input id="phone_number" type="tel" name="phone_number" className="form-input" onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" className="form-input" onChange={handleChange} />

      <label htmlFor="monthly_income">Monthly Income</label>
      <input id="monthly_income" type="number" name="monthly_income" className="form-input" onChange={handleChange} />

      <label htmlFor="i_have_a_car">Do you have a car? (True/False)</label>
      <input id="i_have_a_car" type="text" name="i_have_a_car" className="form-input" onChange={handleChange} />

      <label htmlFor="occupation">Occupation</label>
      <input id="occupation" type="text" name="occupation" className="form-input" onChange={handleChange} />

      <label htmlFor="rent_or_own">Do you own a house or rent?</label>
      <input id="rent_or_own" type="text" name="rent_or_own" className="form-input" onChange={handleChange} />

      <label htmlFor="application_purpose">Application purpose</label>
      <input id="application_purpose" type="text" name="application_purpose" className="form-input" onChange={handleChange} />

      <label htmlFor="valid_id">Valid ID (Drivers License, ID Card)</label>
      <input id="valid_id" type="file" name="valid_id" className="form-input rounded-full" onChange={handleFileChange} />

      <label htmlFor="additional_message">Additional Message</label>
      <textarea id="additional_message" name="additional_message" className="form-textbox" onChange={handleChange} />

      <button type="submit" disabled={status.submitting}>
        Submit
      </button>

      {status.error && <p className="error">{status.error}</p>}
    </form>
  );
}

export default Form;
