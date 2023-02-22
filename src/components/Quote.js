import styles from '../styles/Quote.module.css';

function Quote() {
  return (
    <section className={styles.wrapper}>
      <h3>
        Mathematics is not about numbers, equations, computations or algorithms:
        it is about understanding.
        -William Paul Thurston
      </h3>
    </section>
  );
}

export default Quote;
