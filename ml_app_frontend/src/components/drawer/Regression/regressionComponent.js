import React, { useEffect } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SimpleCard from '../../card/simpleCard/card'
import Aos from 'aos'
import SlopeAndIntercept from './slope&interceptComp'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


export default function RegressionComponent() {
    return (
        <Switch>
            <Route exact path='/regression/blogs'><RegressionDefaultView /></Route>
            <Route path='/regression/blogs/slope-and-intercept'><SlopeAndIntercept /></Route>
        </Switch>
    )
}

function RegressionDefaultView() {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);
    let regCompData = [
        {
            title: 'Regression',
            link: '/regression/blogs/regression-introduction'
        },
        {
            title: 'Slope & Intercept',
            link: '/regression/blogs/slope-and-intercept'
        },
        {
            title: 'Linear Regression',
            link: '/regression/blogs/linear-regression'
        },
        {
            title: 'Multiple Linear Regression',
            link: '/regression/blogs/multiple-linear-regression'
        },
        {
            title: 'Polynomial Regression',
            link: '/regression/blogs/polynomial-regression'
        },
        {
            title: 'Bias Variance Tradeoff',
            link: '/regression/blogs/bias-variance-tradeoff'
        },
        {
            title: 'Regualrization',
            link: '/regression/blogs/regularization-in-regression'
        },
        {
            title: 'Generalization',
            link: '/regression/blogs/generalization-in-regression'
        },
    ]
    let anim = ['fade-up', 'fade-right', 'fade-left']
    return (
        <Grid justify='center' alignItems='center' container spacing={2} id='mainGridHome'>
            {
                regCompData.map((obj, ind) => {
                    return < Grid item xs={12} sm={12} md={6} lg={6} >
                        <Paper data-aos={(ind + 1) % 3 == 0 ? anim[0] : (ind + 1) % 3 == 1 ? anim[1] : anim[2]}>
                            <SimpleCard title={obj.title} link={obj.link} />
                        </Paper>
                    </Grid>
                })
            }

        </Grid >
    )
}