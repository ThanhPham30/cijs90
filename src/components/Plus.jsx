/* eslint-disable react/prop-types */
const Plus = ({value, setValue, number}) => {
    const handleSum = () => {
        setValue(value + number);
    }
    return (
        <>
            <button onClick={handleSum}>Cộng với {number}</button>
        </>
    )
}

export default Plus;
