import { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ImageContext } from '../../context/ImageContext';
import { PhotoItemHovered } from '../photo-item/PhotoItem';
import { ReactComponent as IconClose } from '../../assets/icons/close.svg';
import { dataPhotoExamplesGood } from '../../data/dataPhotoExamples';
import ImageSkeleton from '../../ui/skeletons/image-skeleton/ImageSkeleton';
import { AddImageButton } from '../../ui/add-image-button/AddImageButton';
import s from './photosUploaded.module.scss';

const PhotosUploaded = () => {
  const location = useLocation();
  const [images, setImages] = useState(location.state?.images || []);

  console.log(images);
  // const { urls, setUrls } = useContext(ImageContext);
  // if (urls.length > 0) {
  //   console.log(urls[0].url);
  // } else {
  //   console.log('No URLs available');
  // }

  return (
    <div className={s['photos-uploaded']}>
      {/* <ul className={s['photos-uploaded__list']}>
        {dataPhotoExamplesGood.images.map((image, i) => (
          <PhotoItemHovered img={image} Icon={IconClose} />
        ))}
      </ul> */}
      <div className={s['photos-uploaded__list']}>
        {images.length > 0 ? (
          images.map((image, i) => <PhotoItemHovered key={i} img={image.url} Icon={IconClose} />)
        ) : (
          <p>No uploaded photos</p>
        )}
        <ImageSkeleton />
        <AddImageButton />
      </div>
    </div>
  );
};

export default PhotosUploaded;
