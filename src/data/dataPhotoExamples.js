import { ReactComponent as IconGreen } from '../assets/icons/check-green.svg';
import { ReactComponent as IconRed } from '../assets/icons/check-red.svg';
import img1 from '../assets/images/photo/image-1.png';
import img2 from '../assets/images/photo/image-2.png';
import img3 from '../assets/images/photo/image-3.png';
import img4 from '../assets/images/photo/image-4.png';
import img5 from '../assets/images/photo/image-5.png';

export const dataPhotoExamplesGood = {
  icon: IconGreen,
  title: 'Хорошие примеры фотографий',
  list: [
    'Общий ракурс квартала или здания',
    'Фото не должны повторяться',
    'Избегать перекрытия объекта',
  ],
  images: [img1, img2, img3, img4, img5],
};

export const dataPhotoExamplesBad = {
  icon: IconRed,
  title: 'Плохие примеры фотографий',
  list: [
    'Изображен не общий ракурс квартала или здания',
    'Фото повторяются',
    'Объект перекрывается',
  ],
  images: [img1, img2, img3, img4, img5],
};
