import '../SingIn/SignIn.css'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { FormsTypography } from '../FormsTypography/FormsTypography';
import RegisterStyles from '../UI_UseStyles/RegisterUseStyle';
import { useState } from 'react';

function Registration() {
  //use import styles from function ResUseStyles()
  let {ResUseStyles} = RegisterStyles();
  const classes = ResUseStyles();

  //navigate user to dashboard
  let navigate = useNavigate();

  //check if check box is checked
  const [ischecked,SetIsChecked] = useState(false);
  //validate FirstName,secondName,email and password fields
  const [email,SetEmail] = useState('');
  const [password,SetPassword] = useState('');
  const [firstName,SetFirstName] = useState('');
  const [lastName,SetLastName] = useState('');
  const [emailErr,SetEmailErr] = useState(false);
  const [passwordErr,SetPasswordErr] = useState(false);
  const [firstNameErr,SetFirstNameErr] = useState(false);
  const [lastNameErr,SetLastNameErr] = useState(false);

  const handleSubmit = (e:any) =>{
    e.preventDefault();
    SetEmailErr(false);
    SetPasswordErr(false);
    SetFirstNameErr(false);
    SetLastNameErr(false);
  
   
    if(email && password && firstName && lastName){
      if(ischecked === false){
        alert('Agree First To The Teams And Conditions');
      }else{
      //register from DB & navigate
      alert("email = "+ email+" password = "+password+ "name ="+firstName+"laft name ="+lastName);
      navigate('/dashboard');
      }
    }else{
    
    if(email === ''){SetEmailErr(true);}
    if(password === ''){SetPasswordErr(true);}
    if(firstName === ''){SetFirstNameErr(true);}
    if(lastName === ''){SetLastNameErr(true);}

    }

  }

    return (
      <div>
           <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}/>
            
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField  onChange={(e) =>SetFirstName(e.target.value)}
                    autoComplete="fname" name="firstName" variant="outlined" required fullWidth
                    id="firstName" label="First Name" autoFocus error={firstNameErr}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField  onChange={(e) =>SetLastName(e.target.value)}
                    variant="outlined" required fullWidth id="lastName" label="Last Name" name="lastName"
                    autoComplete="lname" error={lastNameErr}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField onChange={(e) =>SetEmail(e.target.value)}
                    variant="outlined"required fullWidth id="email" label="Email Address"
                    name="email" autoComplete="email" error={emailErr}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField  onChange={(e) =>SetPassword(e.target.value) }
                    variant="outlined" required fullWidth name="password" label="Password"
                    type="password" id="password" autoComplete="current-password" error={passwordErr}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" required
                     onChange={(e) =>SetIsChecked(true)}/>} 
                    label="I agree that i would not sell or buy stolen government books."
                  />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained"  
                color="primary" className={classes.submit}>
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to='/SignIn' className="linkstoNav">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
            <FormsTypography />
          </Box>
        </Container>         
      </div>
    );
  }
  export default Registration;