import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [password, setPassword] = useState('');
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://faux-test.onrender.com/get-all');
        setData(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (showTable) fetchData();
  }, [showTable]);

  const columns = data[0]
    ? Object.keys(data[0])
        .filter((key) => !['additional_message', 'created_at', 'id'].includes(key))
        .map((key) => ({
          name: key.replace(/_/g, ' ').toUpperCase(),
          selector: (row) =>
            key === 'valid_id' && row[key] ? (
              <img src={`https://faux-test.onrender.com${row[key]}`} alt="Document" style={{ maxWidth: '100px', height: 'auto' }} />
            ) : (
              row[key] ? row[key].toString() : '-'
            ),
          sortable: true,
        }))
    : [];

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const correctPassword = import.meta.env.VITE_PASSWORD;

    if (password === correctPassword) {
      setShowTable(true);
    } else {
      alert('Incorrect password');
    }
  };

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
      <DataTable
        title="Admin Dashboard"
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        striped
        dense
      />
    </div>
  );
};

export default Dashboard;
