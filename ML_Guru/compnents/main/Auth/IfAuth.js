import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../../HomeScreen/HomeScreen'
import NotesScreen from '../../NoteScreen/NoteScreen'
import AboutScreen from '../../AboutScreen/AboutScreen'
import ContactScreen from '../../ContactScreen/ContactScreen'
import {Icon} from 'native-base'

export default IfAuth = (props) => {
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
                <Tab.Screen name='About' component={AboutScreen}
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
