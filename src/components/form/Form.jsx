import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addCurrentDate } from '../../redux/slices/scheduleSlice';
import moment from 'moment';

import s from './form.module.scss';

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' }); // defaultValues: { uin: 'IH2812-10-0001-001' }

  const dispatch = useDispatch();

  const date = watch('date');
  setValue('uin', 'IH2812-10-0001-001');

  //   useEffect(() => {
  //     if (date) {
  //       const dateMoment = moment(date).valueOf();
  //       dispatch(addCurrentDate(dateMoment));
  //     }
  //   }, [date]);

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  const handleDateValidate = (e) => {
    // валидируем ввод даты съемки и передаем в rtk
    const dateValue = e.target.value;
    if (moment(dateValue, 'DD.MM.YYYY', true).isValid()) {
      const dateMoment = moment(dateValue, 'DD.MM.YYYY').valueOf();
      dispatch(addCurrentDate(dateMoment));
    }
  };

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className={s.wrapper}>
          <div className={s.field}>
            <label className={s.label} htmlFor="uin">
              УИН *
            </label>
            <input {...register('uin', { required: true })} className={s.input} type="text" />
            <div>{errors?.uin && <p className={s.error}>Укажите УИН</p>}</div>
          </div>
          <div className={s.field}>
            <label className={s.label} htmlFor="date">
              Дата съемки *
            </label>
            <input
              {...register('date', {
                required: true,
                validate: (value) => {
                  // Если не валидна по moment
                  if (!moment(value, 'DD.MM.YYYY', true).isValid()) {
                    return 'Формат даты: ДД.ММ.ГГГГ';
                  }
                  // Если валидна — можно делать dispatch
                  const dateMoment = moment(value, 'DD.MM.YYYY').valueOf();
                  dispatch(addCurrentDate(dateMoment));
                  return true; // значит всё ок
                },
                // pattern: {
                //   value: /^\d{2}\.\d{2}\.\d{4}$/,
                //   message: 'Формат даты: ДД.ММ.ГГГГ',
                // },
              })}
              className={s.input}
              placeholder="ДД.ММ.ГГГГ"
              type="text"
              //   onBlur={handleDateValidate}
            />
            <div>
              {errors?.date && (
                <p className={s.error}>{errors?.date?.message || 'Укажите дату съемки'}</p>
              )}
            </div>
          </div>
          <div className={s.field}>
            <label className={s.label} htmlFor="floors">
              Этажность *
            </label>
            <input {...register('floors', { required: true })} className={s.input} type="text" />
            <div>{errors?.floors && <p className={s.error}>Укажите этажность</p>}</div>
          </div>
        </div>
        <div className={s.field}>
          <label className={s.label}>
            Адрес *
            <textarea
              className={s.textarea}
              {...register('address', { required: true })}
              rows={2}
            />
            <div>{errors?.address && <p className={s.error}>Заполните адрес</p>}</div>
          </label>
        </div>
        {/* <button
          type="submit"
          disabled={!isValid}
          style={{ padding: '10px', backgroundColor: 'green' }}>
          submit
        </button> */}
      </form>
    </div>
  );
};

export default Form;
