import '../Pages/Pages.css';
import { Button, Form } from 'react-bootstrap';
//import axios from 'axios';
import { useState } from 'react';

function AdsPlanForm() {
    //usestate data tobe uploaded 
    let [picture, SetPicture] = useState<any>();
    

    //declare states for different methouds of payment
    const [visa, SetVisa] =  useState(false);
    const [mpesa, SetMpesa] =  useState(false);
    const [econet, SetEconet] =  useState(false);
  
    //three function to change methoud of payment states
      function displayMpesaMethod(){ 
          SetEconet(false);
          SetVisa(false);
          SetMpesa(true);
      }
      function displayEconetMethod(){ 
          SetVisa(false);
          SetMpesa(false);
          SetEconet(true);
      }
      function displayVisaMethod(){ 
          SetEconet(false);
          SetMpesa(false);
          SetVisa(true);
      }

    //Onchange function to update selected picture  
    function selectedPicture(event:any){
          SetPicture(event.target.files[0]); 
    }

    function upLoadData(event:any){
        const myData = new FormData();
        myData.append('picture',picture, picture.name);
        console.log(myData);

        //post to DB
        /*
        axios.post('firebase url here',fd)       
        .then(res =>{
            console.log(res);
        });  */ 
        
        alert("uploaded...!");     
    }

    return (
      <div>
        <h4>Fill All Fields</h4>

         <Form onSubmit={upLoadData}>                            
            <label>Company Name</label><br/>
            <input  className="name-input" type="text" name="Company Name" id="Company Name"/>
            <br/>
            <label>Email Address</label><br/>
            <input className="email-input" type="email" name="Email Address" id="Email"/>
            <br/>
            <br/>

            <input type="file" onChange={selectedPicture} name="picture"/>

            <br/>
            <br/>
            <h4>Select Methoud of Payment</h4>
          
            <input type="radio" name="flexRadioDefault" 
            id="flexRadioDefault1" onChange={displayMpesaMethod}/>
            <label className="labels"> Mpesa </label> 
         
            <input type="radio" name="flexRadioDefault" 
            id="flexRadioDefault2"  onChange={displayEconetMethod}/>
            <label className="labels"> EcoCash </label> 

            <input type="radio" name="flexRadioDefault" 
            id="flexRadioDefault3"  onClick={displayVisaMethod}/>
            <label>Visa</label>

            {   
                mpesa ?
                (                        
                <><p className="msg" key={"msg"}>Send Money to This Number : 59911982</p>
                <label>Mpesa Verification Code</label><br />
                <input className="ads_input" type="text" name="Email Address" id="Email" />
                <br />
                </>
                ):( <> </> )
            }
            {   
                econet ?
                (                        
                <><p className="msg" key={"msg"}>Send Money to This Number : --------</p>
                <label>EcoCash Verification Code</label><br />
                <input className="ads_input" type="text" name="Email Address" id="Email" />
                <br />
                </>
                ):( <> </> )
            }
            {   
                visa ?
                (                        
                <>
                <br/>
                <label>Card Number</label><br/>
                <input className="ads_input" type="tel" name="CardNumber" 
                 id=" CardNumber" pattern="\d*" maxLength={19}/>
                <br />

                <label className="ExpiryDate">Expiry Date</label><br/>                                    
                <input className="visaFields" type="tel" name="CardNumber"
                 id="CardExpiryDate" placeholder="MM / YY" pattern="\d*" maxLength={6}/>
                <br/>
                <label className="CVV">CVC/CVV</label><br/>
                <input className="visaFields" type="tel" name="CardNumber"
                 id="CardNumber" placeholder="CVC" pattern="\d*" maxLength={3}/>
                <br/>
                
                </>
                ):( <> </> )
            }
          
            <br/>
            <Button variant="primary" type="submit">
                Submit
            </Button>
       </Form>                  
      </div>
    );
  }
  export default AdsPlanForm;