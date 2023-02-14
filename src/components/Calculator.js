import { useState, useRef } from 'react';
import OperationsButton from './OperationButton';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(0);
  const [operation, setOperation] = useState(null);

  const screenRef = useRef(null);

  const newScreenValue = (event) => {
    const re = /^[0-9]+\.?[0-9]*$/;

    if (event.target.value === '' || re.test(event.target.value)) {
      setNext(event.target.value);
    }
  };

  const startNewOperation = (buttonLabel) => {
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

  const keyUpOperations = (event) => {
    if (
      event.key === '/'
      || event.key === '*'
      || event.key === '-'
      || event.key === '+'
    ) {
      startNewOperation(event.key);
    }

    if (event.key === 'Enter') {
      startNewOperation('=');
    }
  };

  const cleanScreen = () => {
    setNext('');
  };

  const addNewNumber = (digit) => {
    const re = /^[0-9]+\.?[0-9]*$/;

    const newValue = next + digit;

    if (newValue === '' || re.test(newValue)) {
      setNext(newValue);
    }
  };

  return (
    <section>
      <div className="display">
        <input
          type="text"
          ref={screenRef}
          onChange={newScreenValue}
          value={next}
          onClick={cleanScreen}
          pattern="[0-9.]+"
          onKeyUp={keyUpOperations}
        />
      </div>
      <div className="flexContainer">
        <div className="mainPanel">
          <OperationsButton label="AC" startNewOperation={startNewOperation} />
          <OperationsButton label="+/-" startNewOperation={startNewOperation} />
          <OperationsButton label="%" startNewOperation={startNewOperation} />
          <OperationsButton label="7" startNewOperation={addNewNumber} />
          <OperationsButton label="8" startNewOperation={addNewNumber} />
          <OperationsButton label="9" startNewOperation={addNewNumber} />
          <OperationsButton label="4" startNewOperation={addNewNumber} />
          <OperationsButton label="5" startNewOperation={addNewNumber} />
          <OperationsButton label="6" startNewOperation={addNewNumber} />
          <OperationsButton label="1" startNewOperation={addNewNumber} />
          <OperationsButton label="2" startNewOperation={addNewNumber} />
          <OperationsButton label="3" startNewOperation={addNewNumber} />
          <OperationsButton label="0" startNewOperation={addNewNumber} className="bigBtn" />
          <OperationsButton label="." startNewOperation={addNewNumber} />
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
