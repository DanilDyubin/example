import icon from '../../assets/icons/plus.svg';
import s from './addImageButton.module.scss';

export const AddImageButton = ({ onClick, type = 'button', disabled = false }) => {
  return (
    <button type={type} className={s.button} onClick={onClick} disabled={disabled}>
      <img src={icon} alt="plus" />
    </button>
  );
};

export default AddImageButton;
