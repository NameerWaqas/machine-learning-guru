import React from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native'
import {  Text, Content} from 'native-base'
import { createStackNavigator } from '@react-navigation/stack'
import CardShowcase from '../Cards/CardShowcase'
import regressionCardImage from '../../static/images/HomeComponetCardsImages/regressionCardImage.png'
import classificationCardImage from '../../static/images/HomeComponetCardsImages/classificationCardImage.png'
import clusteringCardImage from '../../static/images/HomeComponetCardsImages/clusteringCardImage.png'
import recommenderSystemCardImage from '../../static/images/HomeComponetCardsImages/recommenderSystemCardImage.png'
import RegressionScreen from './RegressionScreen/Regression'
import ClassificationScreen from './ClassificationScreen/Classification'
import ClusteringScreen from './ClusteringScreen/clustering'


let DefaultHome = ({ navigation }) => {
    let data = [
        { cardTitle: 'Regression', image: regressionCardImage, screenName: 'RegressionScreen' },
        { cardTitle: 'Classification', image: classificationCardImage, screenName: 'ClassificationScreen' },
        { cardTitle: 'Clustering', image: clusteringCardImage, screenName: 'ClusteringScreen' },
        { cardTitle: 'Recommender Systems', image: recommenderSystemCardImage, screenName: 'RecSysScreen' },
    ]
    return (
        <ScrollView>
            <View>
                <Content padder>
                    {
                        data.map((obj) => {
                            return <CardShowcase cardTitle={obj.cardTitle} image={obj.image}
                                screenName={obj.screenName} navigation={navigation.navigate} />
                        })
                    }
                </Content>
            </View>
        </ScrollView>
    )
}


let Stack = createStackNavigator()
export default HomeScreen = ({ navigation }) => {
    return (
        <>
            <Stack.Navigator initialRouteName='DefaultHome' >

                <Stack.Screen name='DefaultHome' component={DefaultHome}
                    options={{
                        title: 'ML Guru',
                        headerStyle: {
                            backgroundColor: '#1A2930'
                        },
                        headerTintColor: 'white'
                    }} />

                <Stack.Screen name='RegressionScreen' component={RegressionScreen}
                    options={{
                        title: 'Regression',
                        headerStyle: {
                            backgroundColor: '#1A2930'
                        },
                        headerTintColor: 'white'
                    }} />

                <Stack.Screen name='ClassificationScreen' component={ClassificationScreen}
                    options={{
                        title: 'Classifiation',
                        headerStyle: {
                            backgroundColor: '#1A2930'
                        },
                        headerTintColor: 'white'
                    }} />

                <Stack.Screen name='ClusteringScreen' component={ClusteringScreen}
                    options={{
                        title: 'Clustering',
                        headerStyle: {
                            backgroundColor: '#1A2930'
                        },
                        headerTintColor: 'white'
                    }} />

                <Stack.Screen name='RecSysScreen' component={ScreenRec}
                    options={{
                        title: 'Recommender Systems',
                        headerStyle: {
                            backgroundColor: '#1A2930',
                        },
                        headerTintColor: 'white',
                    }} />


            </Stack.Navigator>
        </>)
}


let ScreenRec = () => {
    return (
        <Text>
            Recommender Systems Screen
        </Text>
    )
}
