import React from 'react';
import './dashboard.css';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Close';
import {DashboardList, DashboardListTwo, DashboardListThree} from './dashboardList';
import AdsPlanForm from '../Forms/AdsPlanForm';
import { Link } from 'react-router-dom';
import DashboardUseStyle from './dashBoardUseStyle';


export default function Dashboard(){
    //use styles classes
    let {DashboardStyles} = DashboardUseStyle();
    const classes = DashboardStyles();

    //make sure drawer starts closed
    const [open, setOpen] = React.useState(false);
    
    //handle(open and close) drawer with handleDrawerOpen and handleDrawerClose
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };

    return(
        <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton edge="start" color="inherit"
              aria-label="open drawer" onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>

            <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Books~Hub
            </Typography>

            <IconButton color="inherit">
              <Badge color="secondary">
               <Link to='/SignIn' className="signOff">
                <NotificationsIcon />
               </Link>
              </Badge>
            </IconButton>
            </Toolbar>
            </AppBar>


        <Drawer variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}>

          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>

          <Divider />
            <List>{DashboardList}</List>
          <Divider />
            <List>{DashboardListTwo}</List>
          <Divider />
            <List>{DashboardListThree}</List>
          </Drawer>

        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
           
              {/* Put Multiple grids here depending on their state e.g if true show */}
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                <AdsPlanForm/>
                </Paper>
              </Grid>

            </Grid>       
          </Container>
        </main>

      </div>
    )
}