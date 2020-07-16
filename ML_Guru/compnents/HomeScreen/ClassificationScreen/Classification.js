import React from 'react'
import { ScrollView, View } from 'react-native'
import BlogCards from '../BlogCards/BlogCards'

let regData = [{ title: 'Introduction to Classification', ScreenName: '' },
{ title: 'KNN Classifier', ScreenName: '' },
{ title: 'Decision Tree', ScreenName: '' },
{ title: 'Random Forest', ScreenName: '' },
{ title: 'SVM Classifier', ScreenName: '' },
{ title: 'Logistic Regression', ScreenName: '' },
{ title: 'Naive Baise', ScreenName: '' },
]

export default function ClassificationScreen() {
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <BlogCards data={regData} />
            </View>
        </ScrollView>
    )
}