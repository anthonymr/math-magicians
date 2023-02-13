import PropTypes from 'prop-types';

const NumericButton = (props) => {
  const { digit, className } = props;
  return <button type="submit" className={className}>{digit}</button>;
};

NumericButton.propTypes = {
  digit: PropTypes.string.isRequired,
  className: PropTypes.string,
};

NumericButton.defaultProps = {
  className: '',
};

export default NumericButton;
