import { useState } from 'react';

import { DayPicker } from 'react-day-picker';
import { ru } from 'react-day-picker/locale';
import 'react-day-picker/style.css';

const DatePicker = () => {
  const [selected, setSelected] = useState();
  console.log(selected);

  const handleSelect = (newSelected) => {
    // Update the selected dates
    setSelected(newSelected);
  };

  const Footer = () => {
    return (
      <div>
        <div>Footer</div>
      </div>
    );
  };

  return (
    <div>
      <DayPicker
        locale={ru}
        mode="range"
        captionLayout="dropdown"
        endMonth={new Date(2039, 9)}
        selected={selected}
        onSelect={handleSelect}
        showOutsideDays
        footer={<Footer />}
      />
    </div>
  );
};

export default DatePicker;
