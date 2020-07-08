import React, { Fragment } from "react"

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function GridAll() {
    const classes = useStyles();
    return (
        <Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={12}>
                    <Paper className={classes.paper}> HEADER </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={3}>

                <Grid item xs={12} sm={6} md={2}>
                    <Paper className={classes.paper}> bLOQUE1 </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                    <Paper className={classes.paper}> bLOQUE2 </Paper>
                </Grid>

                <Grid item xs={12} sm={4} md={2}>
                    <Paper className={classes.paper}> bLOQUE3 </Paper>
                </Grid>

                <Grid item xs={12} sm={4} md={2}>
                    <Paper className={classes.paper}> bLOQUE4 </Paper>
                </Grid>

                <Grid item xs={12} sm={4} md={2}>
                    <Paper className={classes.paper}> bLOQUE5 </Paper>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default GridAll;