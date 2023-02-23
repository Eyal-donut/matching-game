const Button = ({onButtonClick, className, text, id}) => {

    const clickHandler = (e) => {
        onButtonClick(e.target)
    }

    return <button onClick={clickHandler} className={className} id={id}>{text}</button>
}
export default Button