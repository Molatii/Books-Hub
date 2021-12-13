import { createStyles, Grid,makeStyles, Paper, Theme } from "@material-ui/core";
import LoginButton from "../components/Login/LoginButton";
import { Link } from 'react-router-dom';
import './AdImage.css';

//Style for grid layout
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      textAlign: 'center',
      width : '100%',
    },
    root: {
      flexGrow: 1,
      overflow: 'auto',
    },
  }),
);

function App() {
    const buttonName = 'Advertise Now';
    //call classes from useStyles
    const classes = useStyles();

    return (
    <div className="Ad-contain">
            
        <Grid container spacing={0}>

            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <div className="background-Ads">            
                    <h1 className="cc">Advertise your bussiness with Literacy~Hub</h1> 
                    <h2>
                      <Link to='/AdvertisingPlans' className="link">
                         <LoginButton >
                            {buttonName}
                         </LoginButton>
                      </Link>
                    </h2>                    
                 </div>                
              </Paper>
            </Grid>

        </Grid>
        
    </div>
    );
  }
  export default App;