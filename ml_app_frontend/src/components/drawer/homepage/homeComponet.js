import React, { useEffect } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SimpleCard from '../../card/simpleCard/card';
import recommenderSystemCardImage from '../../../images/HomeComponetCardsImages/recommenderSystemCardImage.png'
import classificationCardImage from '../../../images/HomeComponetCardsImages/classificationCardImage.png'
import regressionCardImage from '../../../images/HomeComponetCardsImages/regressionCardImage.png'
import clusteringCardImage from '../../../images/HomeComponetCardsImages/clusteringCardImage.png'
import MediaCard from '../../card/medaiCard/card'
import Aos from 'aos'

function HomeComponent(props) {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    let homeData = [
        {
            title: 'Regression',
            link: '/regression/blogs',
            image: regressionCardImage
        },
        {
            title: 'Classification',
            link: '/classification/blogs',
            image: classificationCardImage
        },
        {
            title: 'Clustering',
            link: '/clustering/blogs',
            image: clusteringCardImage
        },
        {
            title: 'Recommender Systems',
            link: '/',
            image: recommenderSystemCardImage
        }
    ]
    return (
        <div>
            <div id='marginControlDiv'>
                <h2>ML GURU</h2>
                <h3>Your Learning Curve!</h3>
            </div>
            <Grid container spacing={1} id='mainGridHome' id="homeComponent">
                {
                    homeData.map((obj) => {
                        return < Grid item xs={12} sm={12} md={6} lg={6} >
                            <Paper data-aos='fade-up'>
                                <MediaCard title={obj.title} link={obj.link} image={obj.image} />
                            </Paper>
                        </Grid>
                    })
                }

            </Grid >
        </div>
    )
}

export default HomeComponent;
// connect(mapStateToProps, null)(HomeComponent);