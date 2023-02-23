const Button = ({onButtonClick, className, text, id, picId}) => {

    const clickHandler = (e) => {
        if (picId !== '4') {
        console.log('hi')
        onButtonClick(e.target)
        }
    }

    return <button onClick={clickHandler} className={className} id={id}>{text}</button>
}
export default Button