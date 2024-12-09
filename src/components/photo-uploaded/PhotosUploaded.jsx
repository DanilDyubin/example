import { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ImageContext } from '../../context/ImageContext';
import { PhotoItemHovered } from '../photo-item/PhotoItem';
import { ReactComponent as IconClose } from '../../assets/icons/close.svg';
import { dataPhotoExamplesGood } from '../../data/dataPhotoExamples';
import s from './photosUploaded.module.scss';

const PhotosUploaded = () => {
  const location = useLocation();
  const [images, setImages] = useState(location.state?.images || []);

  const { urls, setUrls } = useContext(ImageContext);
  if (urls.length > 0) {
    console.log(urls[0].url);
  } else {
    console.log('No URLs available');
  }
  //   useEffect(() => {
  //     console.log('Updated URLs:', urls);
  //   }, [urls]);

  return (
    <div className={s['photos-uploaded']}>
      <ul className={s['photos-uploaded__list']}>
        {dataPhotoExamplesGood.images.map((image, i) => (
          <PhotoItemHovered img={image} Icon={IconClose} />
        ))}
      </ul>
      <ul className={s['photos-uploaded__list']}>
        {images.length > 0 ? (
          images.map((image, i) => <PhotoItemHovered key={i} img={image.url} Icon={IconClose} />)
        ) : (
          <p>No uploaded photos</p>
        )}
      </ul>
    </div>
  );
};

export default PhotosUploaded;
