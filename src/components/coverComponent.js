import './coverComponent.css'

const CoverComponent = ({image, label}) => {
    
    return(
        <div className='coverComponent' style={{ backgroundImage: image}}>{label[0]}<br />{label[1]}</div>
    )
}
export default CoverComponent