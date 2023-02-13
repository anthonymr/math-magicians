import PropTypes from 'prop-types';

const OperationsButton = (props) => {
  const { label, startNewOperation } = props;

  const onClickHandler = () => {
    startNewOperation(label);
  };

  return <button type="submit" onClick={onClickHandler}>{label}</button>;
};

OperationsButton.propTypes = {
  label: PropTypes.string.isRequired,
  startNewOperation: PropTypes.func.isRequired,
};

export default OperationsButton;
