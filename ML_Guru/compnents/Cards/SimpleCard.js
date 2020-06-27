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
                        <Left>
                            <Text style={{ fontSize: 25 }}>Title</Text>
                        </Left>
                        <Right>
                            <Button transparent><Icon type='Entypo' name='cross' style={{ color: 'black' }} /></Button>
                        </Right>
                    </Item>
                </CardItem>
                <CardItem>
                    <Item>
                        <Body>
                            <Text>This is body of card Lorum epsum quod erat demonstrnadum
                            This is body of card Lorum epsum quod erat demonstrnadum
                            This is body of card Lorum epsum quod erat demonstrnadum
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