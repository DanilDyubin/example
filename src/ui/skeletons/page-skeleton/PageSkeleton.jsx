import s from './pageSkeleton.module.scss';

const PageSkeleton = () => {
  return (
    <div className={s['page-skeleton']}>
      <div className={s['page-skeleton__images']}>
        <div className={s['page-skeleton__images-item']}></div>
        <div className={s['page-skeleton__images-item']}></div>
        <div className={s['page-skeleton__images-item']}></div>
        <div className={s['page-skeleton__images-item']}></div>
        <div className={s['page-skeleton__images-item']}></div>
      </div>
      <div className={s['page-skeleton__middle']}>
        <div className={s['page-skeleton__middle-wrapper']}>
          <div className={s['page-skeleton__block']}>
            <div className={s['page-skeleton__block-big']}></div>
            <div className={s['page-skeleton__block-small']}></div>
          </div>
          <div className={s['page-skeleton__block']}>
            <div className={s['page-skeleton__block-big']}></div>
            <div className={s['page-skeleton__block-small']}></div>
          </div>
          <div className={s['page-skeleton__block']}>
            <div className={s['page-skeleton__block-big']}></div>
            <div className={s['page-skeleton__block-small']}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSkeleton;
