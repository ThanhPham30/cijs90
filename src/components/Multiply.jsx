/* eslint-disable react/prop-types */
const Multiply = ({value, setValue, number}) => {
    const handleMultiply = () => {
        setValue(value * number);
    }
    return (
        <>
            <button onClick={handleMultiply}>Nhân với {number}</button>
        </>
    )
}

export default Multiply;
