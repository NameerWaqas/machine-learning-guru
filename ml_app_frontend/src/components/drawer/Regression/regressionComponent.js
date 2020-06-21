import React, { useEffect } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SimpleCard from '../../card/simpleCard/card'
import Aos from 'aos'



export default function RegressionComponent() {
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
        
        // <Paper>
            <Grid justify='center' alignItems='center' container spacing={1} id='mainGridHome'>
                {
                    regCompData.map((obj, ind) => {
                        return < Grid item xs={12} sm={12} md={8} lg={8} >
                            <Paper data-aos={(ind + 1) % 3 == 0 ? anim[0] : (ind + 1) % 3 == 1 ? anim[1] : anim[2]}>
                                <SimpleCard title={obj.title} link={obj.link} />
                            </Paper>
                        </Grid>
                    })
                }

            </Grid >
        // </Paper>
    )
}