/* eslint-disable react/prop-types */
const Minus = ({value, setValue, number}) => {
    const handleMinus = () => {
        setValue(value - number);
    }

    return (
        <>
            <button onClick={handleMinus}>Trừ cho {number}</button>
        </>
    )
}

export default Minus;
