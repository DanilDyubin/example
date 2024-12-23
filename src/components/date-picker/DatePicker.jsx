import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../../redux/slices/calendarSlice';
import { addItem } from '../../redux/slices/scheduleSlice';
import moment from 'moment';

import { DayPicker } from 'react-day-picker';
import { ru } from 'react-day-picker/locale';
import 'react-day-picker/style.css';
import '../../styles/datePicker.css';
import s from './footer.module.scss';

const DatePicker = () => {
  const [selected, setSelected] = useState(null);
  //   //   console.log(Object.keys(selected).length > 0 && selected);
  const groupId = useSelector((state) => state.calendar.groupId);
  const dispatch = useDispatch();

  const items = useSelector((state) => state.schedule.items);

  const itemsColors = [
    '#FDB1B1',
    '#B2FFB4',
    '#B3B2FE',
    '#FFFEB2',
    '#FFB2FF',
    '#8CFFFF',
    '#FEDFA5',
    '#FFB2E4',
    '#FFB2FF',
    '#B2E3FF',
    '#E3FFB2',
    '#B2FFE4',
  ];

  const handleSelect = (newSelected) => {
    setSelected(newSelected);
  };

  const handleClearDates = () => {
    setSelected(null);
  };

  const handleClose = () => {
    dispatch(setOpen(false));
  };

  const isDateSelected = selected && selected.from && selected.to;
  const handleAddItem = () => {
    if (isDateSelected) {
      console.log(moment(selected.to).format('DD MM YYYY HH:mm'));
      const newItem = {
        id: groupId,
        group: groupId, // обязательно для привязки item к group
        title: `${moment(selected.from).format('DD.MM')} — ${moment(selected.to).format('DD.MM')}`,
        start_time: moment(selected.from).valueOf(),
        end_time: moment(selected.to).endOf('day').valueOf(), // endOf('day') устанавливаем время в конце дня на 23:59 чтобы выбранный день в item был подностью закрашен
        itemProps: {
          className: 'bordernone',
          style: {
            background: itemsColors[groupId],
            border: 'none',
          },
        },
      };
      dispatch(addItem(newItem));
      dispatch(setOpen(false));
    }
  };

  const Footer = () => {
    return (
      <div className={s.footer}>
        <div className={s.wrapper}>
          <div className={s.cancel} onClick={handleClose}>
            Отмена
          </div>
          <div className={s.clear} onClick={handleClearDates}>
            Очистить
          </div>
        </div>
        <div className={s.done} onClick={handleAddItem} disabled={!isDateSelected}>
          Готово
        </div>
      </div>
    );
  };

  return (
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
  );
};

export default DatePicker;
