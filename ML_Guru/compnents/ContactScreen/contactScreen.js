import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Header, Body } from 'native-base'

export default ContactScreen = () => {
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <Header style={{backgroundColor:'#1A2930'}}>
                    <Body>
                        <Text style={{fontSize:22,color:'white'}}>
                            Contact Us
                    </Text>
                    </Body>
                </Header>
                <Text>This is Contact Screen</Text>
            </View>
        </ScrollView>)
}