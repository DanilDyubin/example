import s from './singlePhotoItem.module.scss';

export const SinglePhotoItem = () => {
  return (
    <div>
      <img src="" alt="" />
      <div>
        <div className="subtitle">
          <div>Этапы</div>
          <div>Выполнено</div>
        </div>
        <div className="data">
          <div className="stages">Земляные работы</div>
          <div className="percent">100%</div>
        </div>
      </div>
    </div>
  );
};
