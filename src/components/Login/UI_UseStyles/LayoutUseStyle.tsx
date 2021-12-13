import { createStyles, makeStyles, Theme } from "@material-ui/core";

export default function LayoutUseStyles () {

  //Style classes for grid layout
  const LayoutStyles = makeStyles((theme: Theme) =>
    createStyles({
      paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        background: 'rgb(231, 224, 224)',
      },
      root: {
        flexGrow: 1,
      },
    }), 
  );

 return {LayoutStyles}


}