import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import Navbar from '../Components/Navbar';

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
                        <img src={`https://faux-test.onrender.com${row[key]}`} alt="Document" style={{
                            maxWidth: '160px',
                            maxHeight: '80px', // This will ensure it stays within the row height
                            width: 'auto',
                            height: 'auto',
                            objectFit: 'contain' // This will maintain aspect ratio
                        }} />
                    ) : (
                        row[key] ? row[key].toString() : '-'
                    ),
                sortable: true,
                width: key === 'valid_id' ? '200px' :
                    key === 'email' ? '200px' :
                        key === 'gender' ? '100px' :
                            key === 'dob' ? '150px' :
                                key === 'city' ? '100px' :
                                    key === 'state' ? '150px' :
                                        key === 'address' ? '200px' :
                                            key === 'full_name' ? '150px' :
                                                key === 'phone_number' ? '150px' :
                                                    '150px',
            }))
        : [];

    // New function to download CSV
    const downloadCSV = () => {
        if (data.length === 0) return;

        // Get headers (column names)
        const headers = Object.keys(data[0])
            .filter((key) => !['additional_message', 'created_at', 'id'].includes(key))
            .map(key => key.replace(/_/g, ' ').toUpperCase());

        // Convert data to CSV format
        const csvData = data.map(row => {
            return Object.keys(row)
                .filter((key) => !['additional_message', 'created_at', 'id'].includes(key))
                .map(key => {
                    if (key === 'valid_id') {
                        return row[key] ? `https://faux-test.onrender.com${row[key]}` : '-';
                    }
                    return row[key] ? `"${row[key].toString().replace(/"/g, '""')}"` : '-';
                })
                .join(',');
        });

        // Combine headers and data
        const csv = [headers.join(','), ...csvData].join('\n');

        // Create and trigger download
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        if (navigator.msSaveBlob) { // IE 10+
            navigator.msSaveBlob(blob, 'grant_applications.csv');
        } else {
            const url = URL.createObjectURL(blob);
            link.href = url;
            link.setAttribute('download', 'grant_applications.csv');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

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

    const customStyles = {
        rows: {
            style: {
                height: '100px'
            }
        },
        cells: {
            style: {
                paddingLeft: '16px',
                paddingRight: '16px',
                // border: '1px solid #ddd',  // Add border to cells

            },
        },
        headCells: {
            style: {
                paddingLeft: '16px',
                paddingRight: '16px',
                fontWeight: 'bold',
                border: '1px solid #ddd',  // Add border to cells

            },
        },
    };

    return (
        <div className="bg-[#f6f6f6]">
            <Navbar />
            <div className="p-5">
                <div className="mb-4 flex w-full justify-between items-center">
                    <h1 className='section-title'>Registered Grants Dashboard</h1>
                    <button
                        onClick={downloadCSV}
                        className="bg-blue-700 hover:bg-blue-800 ease-in duration-150 flex gap-2 items-center h-[50px] text-white font-bold py-2 px-5 rounded-full"
                    >
                        Download
                        <img width="28" height="28" src="https://img.icons8.com/sf-black/35/FFFFFF/download.png" alt="download" />
                    </button>
                </div>
                <DataTable
                    // title="Registered Users Admin Dashboard"
                    columns={columns}
                    data={data}
                    pagination
                    borders
                    highlightOnHover
                    // striped
                    customStyles={customStyles}
                />
            </div>
        </div>
    );
};

export default Dashboard;