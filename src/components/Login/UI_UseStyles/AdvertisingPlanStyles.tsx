import { createStyles, makeStyles, Theme } from "@material-ui/core";

export default function AdvertisingPlanStyles () {

    //Style for grid layout
    const AdvertisingStyles = makeStyles((theme: Theme) =>
    createStyles({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: 'rgb(100, 194, 170)',
    },
    paperone: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: 'rgb(110, 110, 185)',
    },
    papertwo: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: 'rgb(73, 73, 216)',
    },    
    paperthree: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: 'rgb(98, 201, 50)',
    },
    root: {
        flexGrow: 1,
    },
    }),
    );
  
    return {AdvertisingStyles}

}