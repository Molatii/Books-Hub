import './Pages.css';
import Navigation from "../Navigation/Navigation";
import {Grid, Paper} from "@material-ui/core";
import Footer from "../Footer/Footer";
import AdvertisingPlanButton from "./AdvertisingPlanButton";
import { Link } from 'react-router-dom';
import AdvertisingPlanStyles from '../Login/UI_UseStyles/AdvertisingPlanStyles';


function AdvertisingPlans(props:any) {
  
  //use import styles from function AdvertisingStyles()
  let {AdvertisingStyles} = AdvertisingPlanStyles();
  const classes = AdvertisingStyles();

    return (
      <div className="ads_container">
         <Navigation/>

         <h2 className="ads_title">Choose Advertising Plan</h2>
       
         <div style={{ width: '99%',padding: '5px', marginLeft: '0.5%' }}>
           
              <Grid container spacing={1}>
                
                <Grid item xs={6} sm={3}>
                  <Paper className={classes.paper}>
                     <h4 className="Plan-title">Monthly Plan</h4>
                     <p className="plan-description">Try our Advertising capabilities with our
                       Monthly Advertising plan</p>
                       <h5 className="plan-amount">M50.00/$3.20</h5>
                        <Link to='/Choosen-Plan' className="link">
                         <AdvertisingPlanButton>  
                           <h6 className="Ads-button-monthly">Select Plan</h6>
                         </AdvertisingPlanButton>
                        </Link>
                  </Paper>
                </Grid>

                <Grid item xs={6} sm={3}>
                  <Paper className={classes.paperone}>
                  <h4 className="Plan-title">5 Months Plan</h4>
                     <p className="plan-description">Try our Advertising capabilities with our
                        5 Months  Advertising plan</p>
                       <h5 className="plan-amount">M250.00/$15.34</h5>
                        <Link to='/Choosen-Plan' className="link">
                         <AdvertisingPlanButton>  
                           <h6 className="Ads-button-monthly_2">Select Plan</h6>
                         </AdvertisingPlanButton>
                        </Link>  
                  </Paper>
                </Grid>

                <Grid item xs={6} sm={3}>
                  <Paper className={classes.papertwo}>
                  <h4 className="Plan-title">12 Months Plan</h4>
                     <p className="plan-description">Try our Advertising capabilities with our 
                     12 Months Advertising plan</p>
                       <h5 className="plan-amount">M550.00/$33.74</h5>
                        <Link to='/Choosen-Plan' className="link">
                         <AdvertisingPlanButton>  
                           <h6 className="Ads-button-monthly_3">Select Plan</h6>
                         </AdvertisingPlanButton>
                        </Link>  
                  </Paper>
                </Grid>

                <Grid item xs={6} sm={3}>
                   <Paper className={classes.paperthree}>
                   <h4 className="Plan-title">our 2 Years Plan</h4>
                     <p className="plan-description">Try our Advertising capabilities with our 
                       2 years Advertising plan</p>
                       <h5 className="plan-amount">M1100.00/$67.48</h5>
                        <Link to='/Choosen-Plan' className="link">
                         <AdvertisingPlanButton>                       
                           <h6 className="Ads-button-monthly_4">Select Plan</h6>
                         </AdvertisingPlanButton>
                        </Link> 
                   </Paper>
                </Grid>

              </Grid>
            </div>
          <Footer/>  
      </div>
    );
  }
  export default AdvertisingPlans;