import img1 from '../../assets/images/photo/test.webp';
import img2 from '../../assets/images/photo/test.webp';
import img3 from '../../assets/images/photo/test.webp';
import img4 from '../../assets/images/photo/test.webp';
import img5 from '../../assets/images/photo/test.webp';
import img6 from '../../assets/images/photo/test.webp';
import img7 from '../../assets/images/photo/test.webp';
import img8 from '../../assets/images/photo/test.webp';
import img9 from '../../assets/images/photo/test.webp';
import img10 from '../../assets/images/photo/test.webp';
import s from './imageBlock.module.scss';

const images = [img1, img2, img3, img4, img5];
// const images = [img1];
// const images = [img1, img2];
// const images = [img1, img2, img3];
// const images = [img1, img2, img3, img4];
// const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const ImageBlock = () => {
  return (
    <div className={s['image-block']}>
      <div className={s['image-block__images']}>
        {images.map((img, i) => (
          <div className={s['image-block__images-item']}>
            <img src={img} alt="photo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageBlock;
