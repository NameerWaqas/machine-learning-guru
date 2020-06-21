import React, { useEffect } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SimpleCard from '../../card/home/card'
import Aos from 'aos'


export default function ClusteringComponent() {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);
    let clusteringCompData = [
        {
            title: 'Clustering',
            link: '/clustering/blogs/clustering-introduction'
        },
        {
            title: 'K-Means',
            link: '/clustering/blogs/kmeans'
        },
        {
            title: 'K-Medians',
            link: '/clustering/blogs/kmedians'
        },
        {
            title: 'DBScan',
            link: '/clustering/blogs/dbscan'
        },
        {
            title: 'Hierarchical Clustering',
            link: '/clustering/blogs/hierarchical-clustering'
        },
    ]
    let anim = ['fade-up', 'fade-right', 'fade-left']

    return (
        <Grid justify='center' alignItems='center' container spacing={1} id='mainGridHome'>
            {
                clusteringCompData.map((obj,ind) => {
                    return < Grid item xs={12} sm={12} md={8} lg={8} >
                        <Paper data-aos={(ind + 1) % 3 == 0 ? anim[0] : (ind + 1) % 3 == 1 ? anim[1] : anim[2]}>
                            <SimpleCard title={obj.title} link={obj.link} />
                        </Paper>
                    </Grid>
                })
            }

        </Grid >

    )
}