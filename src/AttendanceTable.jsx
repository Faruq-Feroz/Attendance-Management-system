import { useState } from 'react';

const AttendanceTable = ({ records, onDeleteRecord }) => {
    const [searchInput, setSearchInput] = useState('');

    const filteredRecords = records.filter(record => 
        record.studentName.toLowerCase().includes(searchInput.toLowerCase()) ||
        record.attendanceDate.includes(searchInput)
    );

    return (
        <div className="table-section">
            <input
                type="text"
                id="searchInput"
                placeholder="Search by name or date"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredRecords.map((record, index) => (
                        <tr key={index}>
                            <td>{record.studentName}</td>
                            <td>{record.attendanceDate}</td>
                            <td>{record.attendanceStatus}</td>
                            <td>
                                <button className="delete" onClick={() => onDeleteRecord(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AttendanceTable;
