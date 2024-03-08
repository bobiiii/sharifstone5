import React, {useState} from 'react'
import Logo from '../../assets/images/logo_footer.png'
import './dashboard.css'

const Dashboard = () => {
    const [formData, setFormData] = useState({})
    // const navigate = useNavigate();
    const loginForm = () => {
        if(formData.email === 'admin9871@sharifstore.com' && formData.password === 'sharif-admin0873565') {
            alert('You are loggedin')
            // navigate('/admin-dashboard', { replace: true });
            console.log('doing good job.');
        } else {
            alert('Your email or password does not match. please try again.')
        }
    }
  return (
    <div className="login-container">
    <div className="login-innercontainer">
      <div className="login-header">WELCOME TO SHARIFSTONE DASHBOARD</div>
      <img src={Logo} alt="" />
    </div>
  </div>
  )
}

export default Dashboard
