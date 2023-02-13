import PropTypes from 'prop-types';

const OperationsButton = (props) => {
  const { label } = props;
  return <button type="submit">{label}</button>;
};

OperationsButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default OperationsButton;
