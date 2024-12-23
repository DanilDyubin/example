import s from './form.module.scss';

const PdfForm = () => {
  const FormItem = ({ title, data }) => {
    return (
      <div className={s['form__item']}>
        <span className={s['form__item-title']}>{title}</span>
        <div className={s['form__item-data']}>{data}</div>
      </div>
    );
  };
  return (
    <div className={s.form}>
      <div className={s.wrapper}>
        <FormItem title="УИН *" data="IH2812-10-0001-001" />
        <FormItem title="Дата съемки *" data="12.11.2024" />
        <FormItem title="Этажность *" data="10" />
      </div>
      <FormItem
        title="Адрес *"
        data="КОРПУСА N 6 В КВАРТАЛЕ N 57 ПО УЛИЦЕ ВАСИЛИСЫ КОЖИНОЙ ВО ВЛАДЕНИИ N 14 РАЙОНА ФИЛЕВСКИЙ ПАРК (ЗАПАДНЫЙ АДМИНИСТРАТИВНЫЙ ОКРУГ) "
      />
    </div>
  );
};

export default PdfForm;
