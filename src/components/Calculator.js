import { useState } from 'react';
import NumericButton from './NumericButton';
import OperationsButton from './OperationButton';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(0);
  const [operation, setOperation] = useState(null);

  const newScreenValue = (event) => {
    setNext(event.target.value);
  };

  const startNewOperation = (label) => {
    const newValues = calculate({
      total,
      next,
      operation,
    }, label);

    setTotal(newValues.total);
    setNext(newValues.next || '');
    setOperation(newValues.operation);

    if (label === '=') {
      setNext(newValues.total);
    }
  };

  return (
    <section>
      <div className="display">
        <input type="number" min="0" onChange={newScreenValue} value={next} />
      </div>
      <div className="flexContainer">
        <div className="mainPanel">
          <OperationsButton label="AC" startNewOperation={startNewOperation} />
          <OperationsButton label="+/-" startNewOperation={startNewOperation} />
          <OperationsButton label="%" startNewOperation={startNewOperation} />
          <NumericButton digit="7" startNewOperation={startNewOperation} />
          <NumericButton digit="8" startNewOperation={startNewOperation} />
          <NumericButton digit="9" startNewOperation={startNewOperation} />
          <NumericButton digit="4" startNewOperation={startNewOperation} />
          <NumericButton digit="5" startNewOperation={startNewOperation} />
          <NumericButton digit="6" startNewOperation={startNewOperation} />
          <NumericButton digit="1" startNewOperation={startNewOperation} />
          <NumericButton digit="2" startNewOperation={startNewOperation} />
          <NumericButton digit="3" startNewOperation={startNewOperation} />
          <NumericButton digit="0" startNewOperation={startNewOperation} className="bigBtn" />
          <NumericButton digit="." startNewOperation={startNewOperation} />
        </div>
        <div className="rightPanel">
          <OperationsButton label="÷" startNewOperation={startNewOperation} />
          <OperationsButton label="x" startNewOperation={startNewOperation} />
          <OperationsButton label="-" startNewOperation={startNewOperation} />
          <OperationsButton label="+" startNewOperation={startNewOperation} />
          <OperationsButton label="=" startNewOperation={startNewOperation} />
        </div>
      </div>
    </section>
  );
};

export default Calculator;
