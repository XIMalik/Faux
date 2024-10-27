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


  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
    "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
    "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
    "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
    "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
    "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ];

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

  if (status.success) 
  {
    return (
      <div className="section-paragraph-black text-[#0C2043] flex items-center absolute top-[250px] flex-col text-center max-w-[60vw]">

        <lord-icon
          src="https://cdn.lordicon.com/lomfljuq.json"
          trigger="loop"
          delay="4000"
          colors="primary:#22c3e6"
          style={{ width: '100px', height: '100px' }}>
        </lord-icon>        
        <h1 className='mt-5'>You have successfully registered for the grant!</h1>
        <p>Kindly check your inbox in 2-5 business days for a confirmation email. </p>
        <button className='underline mt-10' onClick={() => nav('/')}>Go home</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-5 text-center max-w-[50]">
      <h1 className='section-title-black z-12 '>​CSBG Grant Application</h1>
      <form onSubmit={handleSubmit} className="flex flex-col shadow-xl">
        <label htmlFor="full_name">Full Name</label>
        <input
          id="full_name"
          type="text"
          name="full_name"
          className="form-input"
          placeholder="John Doe"
          onChange={handleChange}
          required
        />

        <div className="flex gap-2 my-3">
          <div className="flex w-[50%] flex-col items-start">
            <label htmlFor="gender">Gender</label>
            <select id="gender" name="gender" className="form-input" onChange={handleChange}           required
            >
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
              required
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
          className="form-input mb-3"
          onChange={handleChange}
          required

        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          className="form-input mb-3"
          placeholder="john.doe@gmail.com"
          onChange={handleChange}
          required

        />

        <label htmlFor="address">Home address</label>
        <input
          id="address"
          type="text"
          name="address"
          className="form-input mb-3"
          placeholder="15907 Wilmington Park Lane"
          onChange={handleChange}
          required

        />

        <div className="flex gap-2 mb-3">
          <div className="flex w-[50%] flex-col items-start">
            <label htmlFor="city">City</label>
            <select id="city" name="city" className="form-input" onChange={handleChange}           required
            >
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

          <div className="flex w-[50%] flex-col items-start mb-3">
            <label htmlFor="state">State</label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>

        <label htmlFor="marital_status">Marital Status</label>
        <select id="marital_status" name="marital_status" className="form-input mb-3" onChange={handleChange}           required
        >
          <option value="">Select</option>
          <option value="SIngle">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
          <option value="Prefer not to say">Prefer not to say</option>
        </select>

        <div className="flex gap-2 mb-3">
          <div className="flex w-[50%] flex-col items-start">
            <label htmlFor="monthly_income">Monthly Income</label>
            <select id="monthly_income" name="monthly_income" className="form-input" onChange={handleChange}           required
            >
              <option value="">Select Income Range</option>
              <option value="5000-10000"> Under $1000</option>
              <option value="5000-10000">$1000.00 - $5000.00</option>
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
              required

            />
          </div>
        </div>

        <label htmlFor="occupation">Occupation</label>
        <input
          id="occupation"
          type="text"
          name="occupation"
          className="form-input mb-3"
          placeholder="Software Developer"
          onChange={handleChange}
          required

        />

        <label htmlFor="rent_or_own">Do you own a house or rent?</label>
        <input
          id="rent_or_own"
          type="text"
          name="rent_or_own"
          className="form-input mb-3"
          placeholder="Own"
          onChange={handleChange}
          required

        />

        <label htmlFor="application_purpose">Application purpose</label>
        <textarea
          id="application_purpose"
          name="application_purpose"
          className="form-input mb-3"
          placeholder='Maximum of 1000 words'
          onChange={handleChange}
          required

        />


        <label htmlFor="valid_id">Valid ID (Drivers License, ID Card)</label>
        <input
          id="valid_id"
          type="file"
          name="valid_id"
          className="form-input rounded-full mb-3"
          onChange={handleFileChange}
          required

        />

        <button type="submit" className='bg-[#F58721] hover:bg-[#F58728]' disabled={status.submitting}>
          Submit
        </button>
      </form>
    </div>

  );
}

export default Form;
