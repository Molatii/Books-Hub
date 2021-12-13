import './Pages.css';
import Navigation from "../Navigation/Navigation";
import {Grid, Paper} from "@material-ui/core";
import Footer from "../Footer/Footer";
import AdsPlanForm from '../Forms/AdsPlanForm';
import ChoosenPlanStyles from '../Login/UI_UseStyles/ChoosenPlanStyles';


function AdvertisingPlans(props:any) {
  
   //use import styles from function ChoosenPlanUseStyles()
   let {ChoosenPlanUseStyles} = ChoosenPlanStyles();
   const classes = ChoosenPlanUseStyles();


    return (
      <div className="ads_container">
         <Navigation/>
          <h2 className="ads_title">Plan name as props</h2>
           <div style={{ width: '99%', padding: '5px', marginLeft: '0.5%' }}>           
            <Grid container spacing={0}>

               <Grid item xs={12} sm={12}>
                <Paper className={classes.paper}>                   
                   <AdsPlanForm/>
                 </Paper>
               </Grid>

            </Grid>
          </div>                
         <Footer/>  
      </div>
    );
  }
  export default AdvertisingPlans;