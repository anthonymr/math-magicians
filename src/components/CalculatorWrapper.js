import Calculator from './Calculator';
import styles from '../styles/CalculatorWrapper.module.css';

function CalculatorWrapper() {
  return (
    <section className={styles.wrapper}>
      <div>
        <h2>Let&apos;s do some math!</h2>
      </div>
      <div>
        <Calculator />
      </div>
    </section>
  );
}

export default CalculatorWrapper;
