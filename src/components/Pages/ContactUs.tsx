import './Pages.css';
import Layout from "../WebLayouts/Layout";
import EmailIcon from '../../books_imgs/general_Icons/em.png';
import PhoneIcon from '../../books_imgs/general_Icons/call-icon.png';
import { Button, Form } from "react-bootstrap";

function ContactUs() {
    return (
      <Layout>
            <div>
                <h2 className="h2">Contact us</h2> 
                <div className="mission-Cotainer">
                  <div className="goals">                             
                             <p>
                                 For any enquiries, please send us an Email, give us a call or send your message from 
                                 the fields provided.
                                 <br/>
                                 Feel free to get in touch with us. We are always open to discussing 
                                 new projects or help to make your company vision come true. 
                                 <br/>

                                 <img className="email-icon" alt="email" src={EmailIcon}/><br/>
                                       molatipaballo@gmail.com
                                 <br/>      
                                 <img className="phone-icon"  alt="phone" src={PhoneIcon}/><br/>
                                        +266 59911982                                 
                             </p>
                        </div>
                        <div className="mission">
                              
                             <Form>                             
                             <label>Your Full Name</label><br/>
                              <input  className="name-input" type="text" name="Email Address" id="Email"/>
                              <br/>
                              <label>Email Address</label><br/>
                              <input className="email-input" type="email" name="Email Address" id="Email"/>
                              <br/>
                              <label>Enter Your Message</label><br/>
                              <textarea className="textarea"/>
                              <br/>
                              <Button variant="primary" type="submit">
                                Submit
                              </Button>
                            </Form>
                        </div>                        
                    </div>
            </div>
      </Layout>
    );
  }
  export default ContactUs;