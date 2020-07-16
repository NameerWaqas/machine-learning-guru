import React from 'react'
import { ScrollView, View } from 'react-native'
import BlogCards from '../BlogCards/BlogCards'

let regData = [{ title: 'Introduction to Clustering', ScreenName: '' },
{ title: 'K-Means Clustering', ScreenName: '' },
{ title: 'K-Medians Clustering', ScreenName: '' },
{ title: 'Density Based Clustering', ScreenName: '' },
{ title: 'DBSCAN Algorithm', ScreenName: '' },
{ title: 'Hierarchical Clustering', ScreenName: '' },
// { title: 'Generalization in Regression', ScreenName: '' },
]

export default function ClusteringScreen() {
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <BlogCards data={regData} />
            </View>
        </ScrollView>
    )
}