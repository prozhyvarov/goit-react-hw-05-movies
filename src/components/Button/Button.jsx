import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ btnName, onClick }) => {
  return (
    <div className={css.buttonWrap}>
      <button className={css.button} onClick={onClick} type="button">
        {btnName}
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
