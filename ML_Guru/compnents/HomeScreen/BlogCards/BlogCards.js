import React from 'react'
import { Content, Text, Input, Button, Item, Card, Body } from 'native-base'
import { Icon } from 'native-base'
import { ScrollView, View } from 'react-native'



export default class BlogCards extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchString: ''
        }
    }

    render() {

        let handleSearch = (txt) => {
            this.setState({
                ...this.state, searchString: txt
            })
        }
        return (
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <Item>
                        <Input placeholder='Search blog' onChangeText={(t) => handleSearch(t)} />
                        <Button transparent><Icon name='search' /></Button>
                    </Item>
                    {
                        this.state.searchString == '' ?
                            this.props.data.map((obj) => {
                                return <Content padder>
                                    <Card style={{ height: 80, borderRadius: 20 }}>
                                        <Body style={{ flexDirection: 'row' }}>
                                            {/* <Item> */}
                                            <Text style={{ fontSize: 25, flex: 8, padding: 10 }}>
                                                {obj.title}
                                            </Text>
                                            <Button transparent onPress={()=>alert('regression')}>
                                                <Icon name='arrowright' type='AntDesign' style={{color:'black'}} />
                                            </Button>
                                            {/* </Item> */}
                                        </Body>
                                    </Card>
                                </Content>
                            }) :
                            this.props.data.filter((obj) => obj.title.toLowerCase().match(this.state.searchString.toLowerCase()) != null).map((obj, ind) => {
                                return <Content padder>
                                    <Card style={{ height: 80, borderRadius: 20 }}>
                                        <Body style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 25, flex: 6, padding: 10 }}>
                                                {obj.title}
                                            </Text>
                                            <Icon name='arrowright' type='AntDesign' style={{ flex: 1 }} />
                                        </Body>
                                    </Card>
                                </Content>
                            }
                            )
                    }

                </View>
            </ScrollView>
        )
    }
}