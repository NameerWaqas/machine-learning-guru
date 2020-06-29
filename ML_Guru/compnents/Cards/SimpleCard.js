import React from 'react'
import { Card, CardItem, Left, Body, Text, Button, Content, Right, Item } from 'native-base'
import { Icon } from 'native-base'
import { ScrollView, View } from 'react-native'

let date = new Date().toDateString()

export default function SimpleCard(props) {
    return (
        <Content padder>
            <Card >
                <CardItem>
                    <Item>
                        <Left style={{flex:5}}>
                            <Text style={{ fontSize: 25 }}>{props.title}</Text>
                        </Left>
                        <Right style={{flex:1}}>
                            <Button transparent onPress={props.del}
                            ><Icon type='Entypo' name='cross' style={{ color: 'black' }} /></Button>
                        </Right>
                    </Item>
                </CardItem>
                <CardItem>
                    <Item>
                        <Body>
                            <Text style={{textAlign:'left'}}>{props.note}
                        </Text>
                        </Body>
                    </Item>
                </CardItem>
                <CardItem>
                    <Text>{date}</Text>
                </CardItem>
            </Card>
        </Content>
    )
}