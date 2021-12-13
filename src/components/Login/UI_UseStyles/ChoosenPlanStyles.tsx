import { createStyles, makeStyles, Theme } from "@material-ui/core";

export default function ChoosenPlanStyles() {

    //Style for grid layout
    const ChoosenPlanUseStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: 'rgb(177, 177, 236)',
        width:'60%',
        alignSelf: 'center',
        marginLeft: '20%',
        },
        root: {
        flexGrow: 1,
        },
    }),
    );

    return{ChoosenPlanUseStyles}

}
