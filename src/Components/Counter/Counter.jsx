

const Counter = ({onChange, value}) => {
    return (
        <>
            <button onClick={() => onChange(value - 1)}><i class="fas fa-chevron-left"></i></button>
            <span>{value}</span>
            <button onClick={() => onChange(value + 1)}><i class="fas fa-chevron-right"></i></button>
        </>
    );
};

export default Counter
