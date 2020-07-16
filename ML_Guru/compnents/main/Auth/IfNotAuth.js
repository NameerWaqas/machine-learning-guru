import React from 'react'
import {ImageBackground,View} from 'react-native'
import {Content, Item ,Header,Body,Text,Input,Button} from 'native-base'
import AuthScreenBackground from '../../../static/images/backgrounds/AuthScreenBackground.jpg'


export default IfNotAuth = (props) => {
    let name = ''
    let email = ''
    let handleName = (nm) => { name = nm }
    let handleEmail = (mail) => { email = mail }
    let handleSubmit = () => {
        if (name != "" && email != "") {
            return props.setAuth({ name: name, email: email })
        }
    }
    return (
        <ImageBackground source={AuthScreenBackground} style={{ flex: 1, width: '100%', height: '100%' }}>
            <Header style={{ backgroundColor: '#1A2930' }}>
                <Body >
                    <Text style={{ color: 'white', fontSize: 30 }}>ML GURU</Text>
                </Body>
            </Header>
            <Content padder justifyContent='center'>
                <Item style={{ marginBottom: 10 }}>
                    <Input placeholderTextColor='white' placeholder='Enter Your Name'
                        onChangeText={(t) => handleName(t)} style={{ color: 'white' }} />
                </Item>
                <Item style={{ marginTop: 10 }}>
                    <Input placeholderTextColor='white' placeholder='Enter Your Email'
                        onChangeText={(t) => handleEmail(t)} style={{ color: 'white' }}/>
                </Item>
                <Button style={{ marginTop: 10, backgroundColor: '#1A2930' }}
                    transparent bordered onPress={handleSubmit}>
                    <Text style={{ color: 'white', textAlign: 'center', flex: 1 }}>Get Started!</Text>
                </Button>
            </Content>
        </ImageBackground>
    )
}
