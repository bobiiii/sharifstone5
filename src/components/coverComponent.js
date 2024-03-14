import './coverComponent.css'

const CoverComponent = ({image, label}) => {
    
    return(
        <div className='coverComponent overflow-hidden' >
        
        <div className='bg-red-300 w-full h-full hover:scale-110 transition-all duration-700 grid place-items-center bg-no-repeat bg-cover'  style={{ backgroundImage: image}}>
        {label[0]}
        <br />{label[1]}

        </div>
        
        
        </div>
    )
}
export default CoverComponent