import './Layout.css';
import './LayoutMediaQuery.css';
import Footer from '../Footer/Footer';
import Navigation from "../Navigation/Navigation";
import FacebookIcon from '../../books_imgs/socialMedia-Icons/bo.png';
import TwitterIcon from '../../books_imgs/socialMedia-Icons/b.png';
import LinkedInIcon from '../../books_imgs/socialMedia-Icons/iin.png';
import InstagramIcon from '../../books_imgs/socialMedia-Icons/in2.png';
import {Grid, Paper} from "@material-ui/core";
import AdBackgroundImage from '../../AdImage/AdBackgroundImage';
import LayoutUseStyles from '../Login/UI_UseStyles/LayoutUseStyle';


//parent component layout
function Layout(props:any) {

   //use import styles from function LayoutUseStyles()
   let {LayoutStyles} =  LayoutUseStyles();
   const classes =LayoutStyles();

  return (
    <div className="contaner-div">
      <Navigation/>
        <AdBackgroundImage/>
         <div style={{ width: '99%', backgroundColor: 'white',padding: '5px', marginLeft: '0.5%' }}>
           
           <Grid container spacing={3}>
             <Grid item xs={12}>
               <Paper className={classes.paper}>
                  {props.children}
               </Paper>
             </Grid>
     
             <Grid item xs={12}>
               <Paper className={classes.paper}>
                    <div className="mission-Cotainer">
                        <div className="mission">
                              <h3>Our Mission</h3>
                              <p>To provide an online platform to all africans at lower costs and have access
                                 to learing resources while supporting local artist and businesses to grow 
                                 by allowing them to reach any type of market they want to.
                              </p>
                        </div>
                        <div className="goals">
                             <h3>Our Goals</h3>
                             <h6>Make any market accessable to Local Businesses</h6>
                             <h6>Be one of the leading online platformm in Africa.</h6>
                             <h6>Build relationships with local businesses, artist and our subcribers.</h6>
                        </div>
                    </div>
               </Paper>
             </Grid>
     
             <Grid item xs={12}>
                <Paper className={classes.paper}>
                   <h3>Follow us on all social media Platforms</h3>
                    <div className="socialMedia-container">

                      <div className="fb">
                        <a href='https://web.facebook.com/paballo.maloti/' className="social">
                          <img src={FacebookIcon} alt="fb" className="Icon"/>
                          <p>Facebook</p>
                        </a>  
                      </div>
                      <div className="tw">
                        <a href='https://twitter.com/' className="social">
                          <img src={TwitterIcon} alt="fb" className="Icon" />                         
                          <p>Twitter</p>
                        </a>  
                      </div>
                      <div className="Link">
                        <a href='https://ls.linkedin.com/in/paballo-molati-075313220' className="social">
                          <img src={LinkedInIcon} alt="fb" className="Icon" />                         
                          <p>LinkedIn</p>
                        </a>  
                      </div>
                      <div className="Ins">
                        <a href='https://www.instagram.com/kaylo_swaggmoggos/' className="social"> 
                          <img src={InstagramIcon} alt="fb" className="Icon" />                          
                           <p>Instergram</p>
                         </a>  
                      </div>

                    </div>
                </Paper>                
             </Grid>
           </Grid>

        </div>        
       <Footer/>    
    </div>
  );
}
export default Layout;