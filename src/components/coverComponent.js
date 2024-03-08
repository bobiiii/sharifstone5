import './coverComponent.css'

const CoverComponent = ({image, label}) => {
    console.log('Im age ... ',image);
    return(
        <div className='coverComponent' style={{ backgroundImage: image}}>{label[0]}<br />{label[1]}</div>
    )
}
export default CoverComponent