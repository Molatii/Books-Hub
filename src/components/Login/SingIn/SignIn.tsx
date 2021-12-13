import './SignIn.css' 
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link, useNavigate } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FormsTypography } from '../FormsTypography/FormsTypography';
import SignInStyles from '../UI_UseStyles/SignInUseStyle';
import { useState } from 'react';

function SignIn() {
  //use import styles from function SignInUseStyles()
  let {SignInUseStyles} = SignInStyles();
  const classes = SignInUseStyles();

  //navigate user to dashboard
  let navigate = useNavigate();

  //validate email and password fields
  const [email,SetEmail] = useState('');
  const [password,SetPassword] = useState('');
  const [emailErr,SetEmailErr] = useState(false);
  const [passwordErr,SetPasswordErr] = useState(false);

  const handleMySubmit = (e:any) =>{
    e.preventDefault();
    SetEmailErr(false);
    SetPasswordErr(false);

    if(email && password){
       //check from DB & navigate
       alert("email = "+ email+" password = "+password);
       navigate('/dashboard');
    }else{
      
      if(email === ''){SetEmailErr(true);}
      if(password === ''){SetPasswordErr(true);}
    }
  } 

    return (
      <div className="signIn_cotainer">
         <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image}/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <div className={classes.paper}>
                <Avatar className={classes.avatar} />
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>

                <form className={classes.form} noValidate onSubmit={handleMySubmit}>

                <TextField variant="outlined" margin="normal" required  name="email" autoComplete="email" 
                onChange={(e) =>SetEmail(e.target.value)}
                fullWidth id="email" label="Email Address" autoFocus type="email" error={emailErr}
                />

                <TextField variant="outlined" margin="normal" required  fullWidth error={passwordErr}
                  onChange={(e) =>SetPassword(e.target.value) }
                  name="password" label="Password" type="password" id="password" autoComplete="current-password"
                />

                <FormControlLabel name="remember_me" label="Remember me"
                 control={<Checkbox value="remember" color="primary" defaultChecked/>}                 
                />
                
                <Button type="submit" fullWidth  variant="contained" 
                color="primary" className={classes.submit}>
                  Sign In
                </Button>


                <Grid container>
                  <Grid item xs>
                  <Link to='/SignIn' className="linkstoNav">
                      Forgot password?
                    </Link>
                  </Grid>

                  <Grid item>
                  <Link to='/Registration' className="linkstoNav">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>

                </Grid>

                <Box mt={5}>
                  <FormsTypography/>
                </Box>

              </form>
            </div>
          </Grid>
        </Grid>          
      </div>
    );
  }
  export default SignIn;