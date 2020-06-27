import React, { Component } from 'react';
import { Item, Text, Left, Button, Right, Body, Title, Drawer, Content, Container, Header, Input } from 'native-base'
import { Icon } from 'native-base'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NotesScreen from '../NoteScreen/NoteScreen'
import HomeScreen from '../HomeScreen/HomeScreen'
import { connect } from 'react-redux'
import {Handle_Auth} from '../../redux/actionCreator'

InfoScreen = () => {
    return (
        <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>This is Info Screen</Text>
            </View>
        </>)
}

ContactScreen = () => {
    return (
        <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>This is Contact Screen</Text>
            </View>
        </>)
}



let mapStateToProps = (state) => ({
    mainState: state
})

let mapDispatchToProps=(dispatch)=>({
    setAuth : (bool)=>dispatch(Handle_Auth(bool))
})
function Main(props) {

    console.disableYellowBox = true
    console.ignoredYellowBox = true

    return (
        <>
            {props.mainState.user.auth ?
                <IfAuth />
                : <IfNotAuth setAuth = {props.setAuth}/>}
        </>

    )
}


let IfAuth = () => {
    const Tab = createBottomTabNavigator()
    return (
        <NavigationContainer >
            <Tab.Navigator initialRouteName='Home' tabBarOptions={{
                showLabel: false,
                activeTintColor: 'lightblue',
                inactiveTintColor: 'white',
                keyboardHidesTabBar: true,
                style: {
                    backgroundColor: '#1A2930',
                    // fontSize:30
                },
            }}>
                <Tab.Screen name='Home' component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (<Icon
                            name='home' style={{ color: color }} />)
                    }} />
                <Tab.Screen name='About' component={InfoScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (<Icon type='Entypo' name='info'
                            style={{ color: color }} />)
                    }} />
                <Tab.Screen name='Contact' component={ContactScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (<Icon name='contacts'
                            style={{ color: color }} />)
                    }} />
                <Tab.Screen name='Notes' component={NotesScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (<Icon type="FontAwesome5" name='clipboard-list'
                            style={{ color: color }} />)
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

let IfNotAuth = (props) => {
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <Header style={{ backgroundColor: '#1A2930' }}>
                <Body >
                    <Text style={{ color: 'white', fontSize: 30 }}>ML GURU</Text>
                </Body>
            </Header>
            <Content padder justifyContent='center'>
                <Text style={{fontWeight:'bold',fontSize:40,color:'#1A2930',textAlign:'center'}}>Your Learning Curve!</Text>
                <Item style={{ marginBottom: 10 }}>
                    <Input placeholder='Enter Your Name' />
                </Item>
                <Item style={{ marginTop: 10 }}>
                    <Input placeholder='Enter Your Email' />
                </Item>
                <Button style={{ marginTop: 10, backgroundColor: '#1A2930' }}
                    transparent bordered onPress={()=>props.setAuth(true)}>
                    <Text style={{ color: 'white' }}>Get Started!</Text>
                </Button>
                {/* </Item> */}
            </Content>
        </View>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(Main)