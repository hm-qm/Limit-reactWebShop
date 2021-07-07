

const Counter = ({onChange, value}) => {
    return (
        <>
            <button onClick={() => onChange(value - 1)}>-</button>
            <span>{value}</span>
            <button onClick={() => onChange(value + 1)}>+</button>
        </>
    );
};

export default Counter
