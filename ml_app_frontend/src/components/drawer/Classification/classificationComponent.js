import React, { useEffect } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SimpleCard from '../../card/simpleCard/card'     //Card without image
import Aos from 'aos'       //package to animate components onScroll


export default function ClassificationComponent() {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);
    let classificationCompData = [
        {
            title: 'Classification',
            link: '/classification/blogs/classification-introduction'
        },
        {
            title: 'KNN',
            link: '/classification/blogs/knn'
        },
        {
            title: 'Decision Tree',
            link: '/classification/blogs/decision-tree'
        },
        {
            title: 'SVM',
            link: '/classification/blogs/svm'
        },
        {
            title: 'Logistic Regression',
            link: '/classification/blogs/logistic-regression'
        },
        {
            title: 'Naive Bias',
            link: '/classification/blogs/naive-bias'
        },
    ]
    
    let anim = ['fade-up', 'fade-right', 'fade-left']

    return (
        <Grid justify='center' alignItems='center' container spacing={1} id='mainGridHome'>
            {
                classificationCompData.map((obj,ind) => {
                    return < Grid item xs={12} sm={12} md={8} lg={8} >
                        <Paper data-aos={(ind + 1) % 3 == 0 ? anim[0] : (ind + 1) % 3 == 1 ? anim[1] : anim[2]}>
                            <SimpleCard title= {obj.title} link={obj.link} />
                        </Paper>
                    </Grid>
                })
            }

        </Grid >
    )
}