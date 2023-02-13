import NumericButton from './NumericButton';
import OperationsButton from './OperationButton';
import './Calculator.css';

const Calculator = () => (
  <section>
    <div className="display">
      <input type="number" min="0" defaultValue={0} />
    </div>
    <div className="flexContainer">
      <div className="mainPanel">
        <div>
          <OperationsButton label="AC" />
          <OperationsButton label="+/-" />
          <OperationsButton label="%" />
        </div>
        <div>
          <NumericButton digit={7} />
          <NumericButton digit={8} />
          <NumericButton digit={9} />
          <NumericButton digit={4} />
          <NumericButton digit={5} />
          <NumericButton digit={6} />
          <NumericButton digit={1} />
          <NumericButton digit={2} />
          <NumericButton digit={3} />
          <NumericButton digit={0} className="bigBtn" />
          <NumericButton digit="." />
        </div>
      </div>
      <div className="rightPanel">
        <OperationsButton label="÷" />
        <OperationsButton label="x" />
        <OperationsButton label="-" />
        <OperationsButton label="+" />
        <OperationsButton label="=" />
      </div>
    </div>
  </section>
);

export default Calculator;
