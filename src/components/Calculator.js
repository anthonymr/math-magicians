import './Calculator.css';

const Calculator = () => (
  <section>
    <div className="display">
      <input type="number" min="0" defaultValue={0} />
    </div>
    <div className="flexContainer">
      <div className="mainPanel">
        <div>
          <button type="submit">AC</button>
          <button type="submit">+/-</button>
          <button type="submit">%</button>
        </div>
        <div>
          <button type="submit">7</button>
          <button type="submit">8</button>
          <button type="submit">9</button>
          <button type="submit">4</button>
          <button type="submit">5</button>
          <button type="submit">6</button>
          <button type="submit">1</button>
          <button type="submit">2</button>
          <button type="submit">3</button>
          <button type="submit" className="bigBtn">0</button>
          <button type="submit">.</button>
        </div>
      </div>
      <div className="rightPanel">
        <button type="submit">÷</button>
        <button type="submit">x</button>
        <button type="submit">-</button>
        <button type="submit">+</button>
        <button type="submit">=</button>
      </div>
    </div>
  </section>
);

export default Calculator;
