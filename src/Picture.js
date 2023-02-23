const Picture = ({url}) => {
    return (
        <div className="picture-container">
            <div 
            style={{background: `url(${url}) no-repeat center center/cover`, width:'100%', height:'100%'}}
            ></div>
        </div>
    )
}
export default Picture