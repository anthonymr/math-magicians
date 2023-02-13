import PropTypes from 'prop-types';

const NumericButton = (props) => {
  const { digit, className, addNewNumber } = props;

  const onClickHandler = () => {
    addNewNumber(digit);
  };

  return <button type="submit" className={className} onClick={onClickHandler}>{digit}</button>;
};

NumericButton.propTypes = {
  digit: PropTypes.string.isRequired,
  className: PropTypes.string,
  addNewNumber: PropTypes.func.isRequired,
};

NumericButton.defaultProps = {
  className: '',
};

export default NumericButton;
