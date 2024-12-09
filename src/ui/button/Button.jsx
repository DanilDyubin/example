import s from './button.module.scss';

export const Button = ({
  title,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'small',
  disabled = false,
}) => {
  const buttonClass = `${s.btn} ${s[variant]} ${s[size]}`;

  return (
    <button type={type} className={buttonClass} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};

export default Button;
