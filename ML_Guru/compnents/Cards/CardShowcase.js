import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';


export default function CardShowcase(props){
        return (
            <Content>
                <Content>
                    <Card style={{ flex: 1 }}>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text 
                                    style={{fontSize:35}}
                                    >{props.cardTitle}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={props.image} style={{ height: 200, width: 400, flex: 1 }} />
                                <Text>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit
                </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button bordered textStyle={{ color: '#87838B' }}
                                onPress={()=>props.navigation(props.screenName)}
                                >
                                    <Text>Learn More!</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                </Content>
            </Content>
        );
    }
// }