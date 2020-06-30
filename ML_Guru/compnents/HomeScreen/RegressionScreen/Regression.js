import React from 'react'
import { ScrollView, View } from 'react-native'
import BlogCards from '../BlogCards/BlogCards'

let regData = [{ title: 'Introduction to Regression', ScreenName: '' },
{ title: 'Slope & Intercept', ScreenName: '' },
{ title: 'Linear Regression', ScreenName: '' },
{ title: 'Polynomial Regression', ScreenName: '' },
{ title: 'Bias Variance Tradeoff', ScreenName: '' },
{ title: 'Regularization in Regression ', ScreenName: '' },
{ title: 'Generalization in Regression', ScreenName: '' },
]

export default function RegressionScreen() {
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <BlogCards data={regData} />
            </View>
        </ScrollView>
    )
}