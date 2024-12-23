import { Outlet } from 'react-router-dom';
import ImageBlock from '../../components/image-block/ImageBlock';
import TimeLineReport from '../../components/trash/TimeLineReport';
import Subtitle from '../../components/subtitle/Subtitle';
import NavigationMenu from '../../components/navigation-menu/NavigationMenu';

import s from './reportPage.module.scss';

const ReportPage = () => {
  return (
    <div className={s.container}>
      <div className={s.navigation}>
        <NavigationMenu />{' '}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ReportPage;
