import './ContactDetails.css'
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function ContactDetails() {
  return (
    <div className='contactdetails-container'>


      <div className='contactdetails-innercontainer'>
          <MdLocationOn size={30} color={'#EE2A2E'}/>
          <div>
          <div className='contactus-subheading'>Orlando</div>
              <div className='contactus-subtext'>2440 Dinneen Ave, Orlando, FL 32804</div>
          </div>
        </div>

        <div className='contactdetails-innercontainer'>
          <FaPhoneAlt size={25} color={'#EE2A2E'}/>
          <div>
              <div className='contactus-subheading'>Contact (Orlando)</div>
              <br />
              <div className='contactus-subtext'>
              <a href="tel:+4072864677" style={{ color: 'black', textDecoration: 'none' }}>(407) 286-4677</a>
              </div>
          </div>
      </div>

      <div className='contactdetails-innercontainer'>
          <MdLocationOn size={30} color={'#EE2A2E'}/>
          <div>
          <div className='contactus-subheading'>Tampa</div>
              <div className='contactus-subtext'>8524 E. Adamo Dr. Tampa, FL 33619</div>
          </div>
        </div>

        <div className='contactdetails-innercontainer'>
          <FaPhoneAlt size={25} color={'#EE2A2E'}/>
          <div>
              <div className='contactus-subheading'>Contact (Tampa)</div>
              <br />
              <div className='contactus-subtext'>
              <a href="tel:+18135334553" style={{ color: 'black', textDecoration: 'none' }}>(813) 533-4553</a>
              </div>
          </div>
      </div>



      <div className='contactdetails-innercontainer'>
          <MdEmail size={25} color={'#EE2A2E'}/>
          <div>
              <div className='contactus-subheading'>Warranty & Service</div>
              <br />
              <div className='contactus-subtext'>
                  <a href="mailto:info@sharifstone.com" style={{ color: 'black', textDecoration: 'none' }}>info@sharifstone.com </a>
              </div>
          </div>
      </div>
      


      <div className='contactdetails-innercontainer'>
        <MdEmail size={25} color={'#EE2A2E'}/>
        <div>
            <div className='contactus-subheading'>Media Relations</div>
            <br />
            <div className='contactus-subtext'>
                <a href="mailto:info@sharifstone.com" style={{ color: 'black', textDecoration: 'none' }}>info@sharifstone.com</a>
            </div>
        </div>
      </div>


      <div className='contactdetails-innercontainer'>
        <MdEmail size={25} color={'#EE2A2E'}/>
        <div>
            <div className='contactus-subheading'>Sales</div> 
            <br />
            <div className='contactus-subtext'> <a href="mailto:sales@sharifstone.com" style={{ color: 'black', textDecoration: 'none' }}>sales@sharifstone.com</a></div>
        </div>
      </div>


    </div>
  )
}

export default ContactDetails
