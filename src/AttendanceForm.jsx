// src/components/AttendanceForm.jsx
import { useState } from 'react';

const AttendanceForm = ({ onAddRecord }) => {
    const [studentName, setStudentName] = useState('');
    const [attendanceDate, setAttendanceDate] = useState('');
    const [attendanceStatus, setAttendanceStatus] = useState('Present');

    const handleAddRecord = () => {
        if (!studentName || !attendanceDate) {
            alert("Please enter a student's name and select a date.");
            return;
        }
        onAddRecord({ studentName, attendanceDate, attendanceStatus });
        setStudentName('');
        setAttendanceDate('');
    };

    return (
        <div className="form-section">
            <input
                type="text"
                id="studentName"
                placeholder="Enter student name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                required
            />
            <input
                type="date"
                id="attendanceDate"
                value={attendanceDate}
                onChange={(e) => setAttendanceDate(e.target.value)}
                required
            />
            <select
                id="attendanceStatus"
                value={attendanceStatus}
                onChange={(e) => setAttendanceStatus(e.target.value)}
            >
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
            </select>
            <button onClick={handleAddRecord}>Add Record</button>
        </div>
    );
};

export default AttendanceForm;
