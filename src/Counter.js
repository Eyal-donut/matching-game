const Counter = ({count, customClass}) => {
    return (
    <div className="counter-wrapper">
        <div className={`counter-logo `+ customClass}></div>
        <p className="count">{count}</p>
    </div>

    )
}
export default Counter