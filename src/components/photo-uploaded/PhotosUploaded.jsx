// import { useState, useContext, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { ImageContext } from '../../context/ImageContext';
// import { PhotoItemHovered } from '../photo-item/PhotoItem';
// import { ReactComponent as IconClose } from '../../assets/icons/close.svg';
// import { dataPhotoExamplesGood } from '../../data/dataPhotoExamples';
// import ImageSkeleton from '../../ui/skeletons/image-skeleton/ImageSkeleton';
// import { AddImageButton } from '../../ui/add-image-button/AddImageButton';
// import s from './photosUploaded.module.scss';

// const PhotosUploaded = () => {
//   const location = useLocation();
//   const [images, setImages] = useState(location.state?.images || []);

//   console.log(images);
//   // const { urls, setUrls } = useContext(ImageContext);
//   // if (urls.length > 0) {
//   //   console.log(urls[0].url);
//   // } else {
//   //   console.log('No URLs available');
//   // }

//   return (
//     <div className={s['photos-uploaded']}>
//       {/* <ul className={s['photos-uploaded__list']}>
//         {dataPhotoExamplesGood.images.map((image, i) => (
//           <PhotoItemHovered img={image} Icon={IconClose} />
//         ))}
//       </ul> */}
//       <div className={s['photos-uploaded__list']}>
//         {images.length > 0 ? (
//           images.map((image, i) => <PhotoItemHovered key={i} img={image.url} Icon={IconClose} />)
//         ) : (
//           <p>No uploaded photos</p>
//         )}
//         <ImageSkeleton />
//         <AddImageButton />
//       </div>
//     </div>
//   );
// };

// export default PhotosUploaded;

import { useState, useContext, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeImgId } from '../../redux/slices/scheduleSlice';
import { useUploadImages } from '../../hooks/useUploadImages';
import { PhotoItemHovered } from '../photo-item/PhotoItem';
import { ReactComponent as IconClose } from '../../assets/icons/close.svg';
import ImageSkeleton from '../../ui/skeletons/image-skeleton/ImageSkeleton';
import { AddImageButton } from '../../ui/add-image-button/AddImageButton';
import s from './photosUploaded.module.scss';

const PhotosUploaded = () => {
  const { imgsIds } = useSelector((state) => state.schedule);
  const dispatch = useDispatch();

  const { uploadImages } = useUploadImages();

  const filePicker = useRef(null);

  const handleAddImages = () => {
    filePicker.current.click();
  };

  const handleFiles = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    try {
      await uploadImages(files); // дозагружаем
    } catch (error) {
      console.error('Не удалось дозагрузить', error);
    }
  };

  console.log(`IDS - ${imgsIds}`);

  const handleDelete = (id) => {
    dispatch(removeImgId(id));

    // try {
    //   const resp = await fetch(`https://msi.stage-detection.contextmachine.cloud/delete_image?uid=${id}`, {
    //     method: 'DELETE',
    //   });
    //   if (!resp.ok) {
    //     console.error('Не удалось удалить на сервере:', resp.statusText);
    //   }
    // } catch (err) {
    //   console.error('Ошибка при удалении на сервере:', err);
    // }
  };

  // useEffect(() => {
  //   imgsIds.forEach((id) => {
  //     fetch(`https://msi.stage-detection.contextmachine.cloud/get_images?uid=${id}`);
  //   });
  // });

  return (
    <div className={s['photos-uploaded']}>
      <div className={s['photos-uploaded__list']}>
        {imgsIds.length > 0
          ? imgsIds.map((id) => (
              <PhotoItemHovered
                key={id}
                id={id}
                Icon={IconClose}
                onDelete={() => handleDelete(id)}
              />
            ))
          : null}
        <ImageSkeleton />
        <div>
          <input
            className={s['photos-uploaded__input']}
            type="file"
            multiple
            accept="image/*, .png, .jpg, .jpeg, .gif, .web, .svg"
            name="images"
            onChange={handleFiles}
            ref={filePicker}
            style={{ display: 'none' }}
          />
          <AddImageButton onClick={handleAddImages} />
        </div>
      </div>
    </div>
  );
};

export default PhotosUploaded;
