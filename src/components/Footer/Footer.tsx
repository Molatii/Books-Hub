import { Link } from 'react-router-dom';
import ButtonAtFooter from './ButtonAtFooter';
import './Footer.css';

function Footer(props:any) {
    //year on the footer is updated uptomatically
    const myDate =new Date();
    const currentYear = myDate.getFullYear();

    //props button names
    const buttonName = 'Learn More';
    const buttonNameTwo = 'Register';

    return (
      <div className="footer-container">

          <div className="details-section">
              <div className="Advertise-with-us">
                    <h5>Advertise with us</h5>
                    <p>Get in touch with Literacy~Hub </p>
                    <h6><Link to='/AdvertisingPlans' className="link">
                          <ButtonAtFooter >
                                {buttonName}
                          </ButtonAtFooter>
                        </Link>
                    </h6>
              </div>

              <div className="Support">
                    <h5>Support</h5>
                    <p>
                      <Link to='/Contact-Us' className="links">
                      Contact Us
                      </Link>
                    </p>
                    <p>Blog Publishing</p>
              </div>
              <div className="Literacy-Hub">
                    <h5>Literacy~Hub</h5>
                    <p>
                      <Link to='/About-Us' className="links">
                          About Literacy~Hub
                      </Link>
                    </p>                    
                    <p>
                     <Link to='/Company-Fees' className="links">
                        Subscription Fees
                      </Link>
                    </p>
              </div>
              <div className="Get-Access">
                    <h5>Get Access to Published Blogs</h5>
                    <p>Register now</p>
                    <h6>
                        <Link to='/Registration' className="link">
                          <ButtonAtFooter>
                              {buttonNameTwo}
                          </ButtonAtFooter>
                        </Link>
                    </h6>
              </div>
          </div> 

          <div className="founder-section">
              <p>
                  Copyright&copy;Literacy~Hub {currentYear} | Designed by
                   <a href='https://ls.linkedin.com/in/paballo-molati-075313220' className="founderProfile">
                      Paballo Molati
                   </a>  
              </p>
         </div>
      </div>
    );
  }
  export default Footer;