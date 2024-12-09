import s from './customGroup.module.scss';

export const groupRenderer = ({ group }) => {
  const clazz = group.progress
    ? `${s['custom-group__values-fact']}`
    : `${s['custom-group__values-fact']}` + ` ` + `${s.warning}`;
  return (
    <div className={s['custom-group']}>
      <div className={s['custom-group__title']}>{group.title}</div>
      <div className={s['custom-group__values']}>
        <div className={s['custom-group__values-plan']}>{`${group.planValue}%`}</div>
        <div className={clazz}>{`${group.factValue}%`}</div>
      </div>
    </div>
  );
};
