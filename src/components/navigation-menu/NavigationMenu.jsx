import { NavLink } from 'react-router-dom';
import s from './navigationMenu.module.scss';

const NavigationMenu = () => {
  return (
    <div className={s.container}>
      <NavLink
        to="/report"
        end
        className={({ isActive }) => (isActive ? `${s.link} ${s.active}` : s.link)}>
        Общий отчёт
      </NavLink>
      <NavLink
        to="/report/single"
        className={({ isActive }) => (isActive ? `${s.link} ${s.active}` : s.link)}>
        Отчёт по каждому снимку
      </NavLink>
    </div>
  );
};

export default NavigationMenu;
