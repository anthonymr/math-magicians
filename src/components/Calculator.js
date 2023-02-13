import { useState, useRef } from 'react';
import NumericButton from './NumericButton';
import OperationsButton from './OperationButton';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(0);
  const [operation, setOperation] = useState(null);

  const screenRef = useRef(null);

  const newScreenValue = (event) => {
    setNext(event.target.value);
  };

  const startNewOperation = (buttonLabel) => {
    console.log({
      total,
      next,
      operation,
    });

    const newValues = calculate({
      total,
      next,
      operation,
    }, buttonLabel);

    setTotal(newValues.total);
    setNext(newValues.next || '');

    setOperation(newValues.operation);

    if (buttonLabel === '=' && newValues.total) {
      setNext(newValues.total);
    } else if (buttonLabel !== '=') {
      screenRef.current.focus();
    }
  };

  const cleanScreen = () => {
    setNext('');
  };

  const addNewNumber = (digit) => {
    if (digit !== '.') {
      setNext(parseFloat(next + digit, 10).toString());
      return;
    }

    if (next === '') {
      setNext('0.');
    } else if (!next.includes('.')) {
      setNext(next + digit);
    }
  };

  return (
    <section>
      <div className="display">
        <input type="text" ref={screenRef} onChange={newScreenValue} value={next} onClick={cleanScreen} />
      </div>
      <div className="flexContainer">
        <div className="mainPanel">
          <OperationsButton label="AC" startNewOperation={startNewOperation} />
          <OperationsButton label="+/-" startNewOperation={startNewOperation} />
          <OperationsButton label="%" startNewOperation={startNewOperation} />
          <NumericButton digit="7" addNewNumber={addNewNumber} />
          <NumericButton digit="8" addNewNumber={addNewNumber} />
          <NumericButton digit="9" addNewNumber={addNewNumber} />
          <NumericButton digit="4" addNewNumber={addNewNumber} />
          <NumericButton digit="5" addNewNumber={addNewNumber} />
          <NumericButton digit="6" addNewNumber={addNewNumber} />
          <NumericButton digit="1" addNewNumber={addNewNumber} />
          <NumericButton digit="2" addNewNumber={addNewNumber} />
          <NumericButton digit="3" addNewNumber={addNewNumber} />
          <NumericButton digit="0" addNewNumber={addNewNumber} className="bigBtn" />
          <NumericButton digit="." addNewNumber={addNewNumber} />
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
