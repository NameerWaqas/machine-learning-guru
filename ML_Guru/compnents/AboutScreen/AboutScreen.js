import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Header, Body } from 'native-base'


export default AboutScreen = () => {
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <Header style={{backgroundColor:'#1A2930'}}>
                    <Body>
                        <Text style={{fontSize:22,color:'white'}}>About Us</Text>
                    </Body>
                </Header>
                <Text>This is Info Screen</Text>
            </View>
        </ScrollView>)
}