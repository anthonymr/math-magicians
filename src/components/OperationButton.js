import PropTypes from 'prop-types';

const OperationsButton = (props) => {
  const { label, startNewOperation } = props;

  const onClickHandler = () => {
    startNewOperation(label);
  };

  const className = label === '0' ? 'bigBtn' : '';

  return <button type="submit" className={className} onClick={onClickHandler}>{label}</button>;
};

OperationsButton.propTypes = {
  label: PropTypes.string.isRequired,
  startNewOperation: PropTypes.func.isRequired,
};

export default OperationsButton;
