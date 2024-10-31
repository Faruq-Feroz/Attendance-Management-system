import { useState } from 'react';
import AttendanceForm from './AttendanceForm';
import AttendanceTable from './AttendanceTable';

const App = () => {
    const [records, setRecords] = useState([]);

    const addRecord = (newRecord) => {
        setRecords([...records, newRecord]);
    };

    const deleteRecord = (index) => {
       
        const newRecords = records.filter((_, i) => i !== index);
       
        setRecords(newRecords);
    };

    return (
        <div className="container">
            <h1>Nairobits Attendance Management System</h1>
            <AttendanceForm onAddRecord={addRecord} />
            <AttendanceTable records={records} onDeleteRecord={deleteRecord} />
        </div>
    );
};

export default App;
