import s from './photoItem.module.scss';

export const PhotoItem = ({ img, Icon }) => {
  return (
    <div className={s['photo-item']}>
      <img src={img} alt="photo" />
      <Icon className={s['photo-item__icon']} />
    </div>
  );
};

export const PhotoItemHovered = ({ img, Icon }) => {
  return (
    <div className={s['photo-item-hovered']}>
      <img src={img} alt="photo" />
      <div className={s['photo-item-hovered__overlay']}></div>
      <Icon className={s['photo-item-hovered__icon']} />
    </div>
  );
};

export default PhotoItem;
