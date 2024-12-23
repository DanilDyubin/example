import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { DateContext } from '../../context/DateContext';
import PhotosUploaded from '../../components/photo-uploaded/PhotosUploaded';
import TimeLine from '../../components/time-line/TimeLine';
import DatePicker from '../../components/date-picker/DatePicker';
import { dataTimeLine } from '../../data/dataTimeLine';
import ImageSkeleton from '../../ui/skeletons/image-skeleton/ImageSkeleton';
import PageSkeleton from '../../ui/skeletons/page-skeleton/PageSkeleton';

import TimeLine1 from '../../components/time-line/TimeLine1';
import TimeLine2 from '../../components/trash/TimeLine2';
import TimeLineExample from '../../components/trash/TimeLineExample';
import TimeLineExampleLocale from '../../components/trash/TimeLineExampleLocale';
import TimeLineExampleColored from '../../components/trash/TimeLineExampleColored';
import ProgrmScroll from '../../components/trash/ProgrmScroll';
import GanttTask from '../../components/trash/gantt/GantTaskReact';
import MyTimeline from '../../components/trash/TimeLineScroll';
import Subtitle from '../../components/subtitle/Subtitle';
import Form from '../../components/form/Form';

const FormPage = () => {
  const { date } = useSelector((state) => state.calendar);

  return (
    <div>
      <PhotosUploaded />
      <div style={{ marginTop: '100px' }}>
        <Form />
      </div>

      <div style={{ marginTop: '100px', marginBottom: '100px' }}>
        {/* <TimeLine data={dataTimeLine} /> */}
        {/* <TimeLine1 data={dataTimeLine} /> */}
        {/* <TimeLineExample data={dataTimeLine} /> */}
        <Subtitle />
        <TimeLineExampleLocale data={dataTimeLine} />
      </div>
      {/* <TimeLineExampleColored data={dataTimeLine} /> */}

      <div style={{ marginTop: '100px' }}></div>
      <PageSkeleton />
      {/* <TimeLine2 />
      <ProgrmScroll /> */}
      {/* <GanttTask />
      <MyTimeline /> */}
    </div>
  );
};

export default FormPage;
