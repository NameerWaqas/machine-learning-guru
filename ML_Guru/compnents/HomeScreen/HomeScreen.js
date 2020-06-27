import React from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native'
import { Button, Text, Content } from 'native-base'
import { createStackNavigator } from '@react-navigation/stack'
import CardShowcase from '../Cards/CardShowcase'
import regressionCardImage from '../../static/images/HomeComponetCardsImages/regressionCardImage.png'
import classificationCardImage from '../../static/images/HomeComponetCardsImages/classificationCardImage.png'
import clusteringCardImage from '../../static/images/HomeComponetCardsImages/clusteringCardImage.png'
import recommenderSystemCardImage from '../../static/images/HomeComponetCardsImages/recommenderSystemCardImage.png'



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

                <Stack.Screen name='RegressionScreen' component={ScreenReg}
                    options={{
                        title: 'Regression',
                        headerStyle: {
                            backgroundColor: '#1A2930'
                        },
                        headerTintColor: 'white'
                    }} />

                <Stack.Screen name='ClassificationScreen' component={ScreenClass}
                    options={{
                        title: 'Classifiation',
                        headerStyle: {
                            backgroundColor: '#1A2930'
                        },
                        headerTintColor: 'white'
                    }} />

                <Stack.Screen name='ClusteringScreen' component={ScreenClus}
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


let ScreenReg = () => {

    let RegMainScreen = ({ navigation }) => {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>
                    This is default regression screen.
            </Text>
                <Button onPress={() => navigation.navigate('SubRegScreen')}><Text>Navigate to sub screen</Text></Button>
            </View>
        )
    }

    let SubRegScreen = () => {
        return (
            <Text>
                This is sub regression screen.
            </Text>
        )
    }
    return (
        <Stack.Navigator initialRouteName='DefaultRegression'>
            <Stack.Screen name='DefaultRegression' component={RegMainScreen} />
            <Stack.Screen name='SubRegScreen' component={SubRegScreen} />
        </Stack.Navigator>
    )
}
let ScreenClass = () => {
    return (
        <Text>
            Classification
        </Text>
    )
}
let ScreenClus = () => {
    return (
        <Text>
            Clustering
        </Text>
    )
}
let ScreenRec = () => {
    return (
        <Text>
            REc. System
        </Text>
    )
}
