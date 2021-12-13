import Typography from '@material-ui/core/Typography';

 export  function FormsTypography() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
       {'Copyright © '}
       <a href='https://ls.linkedin.com/in/paballo-molati-075313220' className="myProfile">
           Eric Molati
        </a>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
