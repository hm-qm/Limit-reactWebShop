import styles from "./Counter.module.scss"

const Counter = ({onChange, value}) => {
    return (
        <>
            <button className={styles.Counter_button} onClick={() => onChange(value - 1)}><i class="fas fa-chevron-left"></i></button>
            <span className={styles.Counter_text}> {value} </span>
            <button className={styles.Counter_button} onClick={() => onChange(value + 1)}><i class="fas fa-chevron-right"></i></button>
        </>
    );
};

export default Counter
