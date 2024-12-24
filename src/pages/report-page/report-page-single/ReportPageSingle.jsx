import ImageBlock from '../../../components/image-block/ImageBlock';
import Subtitle from '../../../components/subtitle/Subtitle';
import TimeLineExampleLocale from '../../../components/trash/TimeLineExampleLocale';

const ReportPageSingle = () => {
  return (
    <div>
      <div>
        <ImageBlock />
        <div style={{ marginTop: '80px' }}>
          <Subtitle />
          <TimeLineExampleLocale />
        </div>
      </div>
    </div>
  );
};

export default ReportPageSingle;
