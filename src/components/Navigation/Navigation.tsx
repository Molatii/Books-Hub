import './Navigation.css';
import './NavigationMediaQuery.css';
import { Link } from 'react-router-dom';
import Logo from '../../booksHubIcons/logo-1.png';

function Navigation() {
  
  return (
  <div className="Nav-container">
    <div className="NameAndLogo">    
      <h2 className="LogoAndText">
      <Link to='/'><img alt="logo" className="Logo-icon" src={Logo}/></Link>
          Books~Hub
      </h2>        
    </div>
    <div className="Nav-text">
       <h2 className="h2-text"><Link to='/Company-Fees' className="link">Hub~Fees</Link></h2>
       <h2 className="h2-text"><Link to='/Contact-Us' className="link">Contant Us</Link></h2>
       <h2 className="h2-text"><Link to='/About-Us' className="link">About Us</Link></h2>   
       
    </div>

  </div> 
  );
}
export default Navigation;
