import ImageBlock from '../../../components/image-block/ImageBlock';
import TimeLineReport from '../../../components/trash/TimeLineReport';
import Subtitle from '../../../components/subtitle/Subtitle';

const ReportPageTotal = () => {
  return (
    <div>
      <ImageBlock />
      <div style={{ marginTop: '80px', marginBottom: '24px' }}>
        <Subtitle />
      </div>
      <TimeLineReport />
    </div>
  );
};

export default ReportPageTotal;
