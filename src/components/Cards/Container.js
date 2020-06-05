import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core'
import styles from './card.module.css';

const Container = (Props) => {
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Active Casees of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default Container;