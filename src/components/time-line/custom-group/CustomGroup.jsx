import { useSelector } from 'react-redux';
import s from './customGroup.module.scss';

// props group приходят из <Timeline groups/>

export const groupRenderer = ({ group }) => {
  const clazz = group.progress
    ? `${s['custom-group__values-fact']}`
    : `${s['custom-group__values-fact']}` + ` ` + `${s.warning}`;
  return (
    <div className={s['custom-group']}>
      <div className={s['custom-group__title']}>{group.title}</div>
      <div className={s['custom-group__values']}>
        <div className={s['custom-group__values-plan']}>{`${group.done}%`}</div>
        <div className={clazz}>{`${group.deviation}%`}</div>
      </div>
    </div>
  );
};

export const groupRendererWithoutColls = ({ group }) => {
  return (
    <div className={s['custom-group']}>
      <div className={s['custom-group__title']}>{group.title}</div>
      <div className={s['custom-group__values-plan']}>{`${group.done}%`}</div>
    </div>
  );
};
