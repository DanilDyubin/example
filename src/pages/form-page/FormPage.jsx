import PhotosUploaded from '../../components/photo-uploaded/PhotosUploaded';
import TimeLine from '../../components/time-line/TimeLine';
import DatePicker from '../../components/date-picker/DatePicker';
import { dataTimeLine } from '../../data/dataTimeLine';
import ImageSkeleton from '../../ui/skeletons/image-skeleton/ImageSkeleton';
import PageSkeleton from '../../ui/skeletons/page-skeleton/PageSkeleton';

import TimeLine1 from '../../components/time-line/TimeLine1';
import TimeLine2 from '../../components/trash/TimeLine2';
import TimeLineExample from '../../components/trash/TimeLineExample';
import ProgrmScroll from '../../components/trash/ProgrmScroll';
import GanttTask from '../../components/trash/gantt/GantTaskReact';
import MyTimeline from '../../components/trash/TimeLineScroll';

const FormPage = () => {
  return (
    <div>
      <PhotosUploaded />
      <ImageSkeleton />
      <div style={{ marginTop: '100px' }}>
        {/* <TimeLine data={dataTimeLine} /> */}
        {/* <TimeLine1 data={dataTimeLine} /> */}
        <TimeLineExample data={dataTimeLine} />
      </div>

      <div style={{ marginTop: '100px' }}>
        <DatePicker />
      </div>
      <PageSkeleton />
      {/* <TimeLine2 />
      <ProgrmScroll />
      <GanttTask />
      <MyTimeline /> */}
    </div>
  );
};

export default FormPage;
