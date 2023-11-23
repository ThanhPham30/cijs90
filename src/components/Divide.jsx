/* eslint-disable react/prop-types */
const Divide = ({ value, setValue, number }) => {

    const handleDivide = () => {
        if (number === 0) {
            alert('Số chia không hợp lệ');
        } else {
            setValue(value / number);
        }
    }

    return (
        <>
            <button onClick={handleDivide}>Chia cho {number}</button>
        </>
    )
}

export default Divide;
