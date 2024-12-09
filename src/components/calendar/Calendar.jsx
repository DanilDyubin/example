import { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

function Calendar() {
  const [value, onChange] = useState(new Date());
  const [dateRange, setDateRange] = useState([null, null]);

  console.log(dateRange);

  return (
    <div>
      <DatePicker
        onChange={onChange}
        value={value}
        isOpen
        startDate={dateRange[0]}
        endDate={dateRange[1]}
        onChange={(update) => setDateRange(update)}
        returnValue="range"
      />
    </div>
  );
}

export default Calendar;
