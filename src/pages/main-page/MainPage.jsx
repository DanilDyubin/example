import ImagesUpload from '../../components/upload-images/UploadImages';
import PhotoExamples from '../../components/photo-examples/PhotoExamples';
import { dataPhotoExamplesGood, dataPhotoExamplesBad } from '../../data/dataPhotoExamples';
import s from './mainPage.module.scss';

const MainPage = () => {
  return (
    <div>
      <ImagesUpload />
      <div className={s['main-page__wrapper']}>
        <PhotoExamples data={dataPhotoExamplesGood} Icon={dataPhotoExamplesGood.icon} />
      </div>
      <PhotoExamples data={dataPhotoExamplesBad} Icon={dataPhotoExamplesBad.icon} />
    </div>
  );
};

export default MainPage;
