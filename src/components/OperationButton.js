import PropTypes from 'prop-types';

const OperationsButton = (props) => {
  const { label, startNewOperation, className } = props;

  const onClickHandler = () => {
    startNewOperation(label);
  };

  return <button type="submit" className={className} onClick={onClickHandler}>{label}</button>;
};

OperationsButton.propTypes = {
  label: PropTypes.string.isRequired,
  startNewOperation: PropTypes.func.isRequired,
  className: PropTypes.string,
};

OperationsButton.defaultProps = {
  className: '',
};

export default OperationsButton;
