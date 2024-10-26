import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [password, setPassword] = useState('');
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://faux-test.onrender.com/get-all');
        console.log("API response:", response.data); // Log response to check its structure
        setData(response.data.results); // Ensure `data` is an array
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (showTable) fetchData(); // Only fetch data if password is verified
  }, [showTable]);

  const headers = data[0] ? Object.keys(data[0]) : [];

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    console.log('password to be checked', import.meta.env.VITE_PASSWORD)
    
    const correctPassword = import.meta.env.VITE_PASSWORD;
    ;

    if (password === correctPassword) {
      setShowTable(true);
    } else {
      alert("Incorrect password");
      console.log(password)
    }
  };

  // If password hasn't been verified, show password entry form
  if (!showTable) {
    return (
      <div className="p-10 flex justify-center items-center">
        <form onSubmit={handlePasswordSubmit} className="password-form flex items-center justify-center">
          <label>
            Enter Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              style={{ margin: '10px', padding: '5px' }}
            />
          </label>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-10">
      <div className="table-container rounded-lg">
        <table className="data-table" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>#</th>
              {headers.map((header) => (
                <th key={header} style={{ border: '1px solid #ddd', padding: '8px', textTransform: 'capitalize' }}>
                  {header.replace(/_/g, ' ')}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={entry.id}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{index + 1}</td>
                {headers.map((header) => (
                  <td key={header} style={{ border: '1px solid #ddd', padding: '8px' }}>
                    {header === "valid_id" && entry[header] ? (
                      <img
                        src={`https://faux-test.onrender.com${entry[header]}`}
                        alt="Document"
                        style={{ maxWidth: '100px', height: 'auto' }}
                      />
                    ) : (
                      entry[header] ? entry[header].toString() : '-'
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
